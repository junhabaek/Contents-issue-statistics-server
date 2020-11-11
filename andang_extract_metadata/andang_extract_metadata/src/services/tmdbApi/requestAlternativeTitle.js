const axios = require('axios');
const {TMDB_API_KEY} = require('../../utils/config');

const getMovieAltTitle = async(contentId)=>{
    const result = await getContentAltTitle("movie", contentId);
    if(result.hasOwnProperty('titles')){
        const krTitle = result.titles.find(element=>element['iso_3166_1'] === "KR");
        if(krTitle !== undefined){
            return krTitle['title'];
        }
    }
    return ''
}

const getDramaAltTitle = async(contentId)=> {
    const result = await getContentAltTitle("drama", contentId);
    if(result.hasOwnProperty('results')){
        const krTitle = result.results.find(element=>element['iso_3166_1'] === "KR");
        if(krTitle !== undefined){
            return krTitle['title'];
        }
    }
    return ''
}

const getContentAltTitle = async(contentType, contentId)=>{
    let mappedContentType;
    if(contentType === "movie"){
        mappedContentType = "movie";
    }
    else{
        mappedContentType = "tv";
    }

    const url = `https://api.themoviedb.org/3/${mappedContentType}/${contentId}/alternative_titles`;

    let result;
    try {
        const response = await axios.get(url, {
            params: {
                api_key: TMDB_API_KEY,
                country:"KR"
            }
        });

        result = response.data;
        result.success = true;
    }
    catch(e){
        if(e.response){
            console.log(e.response.data);
            console.log(e.response.status);
        }
        result = {};
        result.success = false;
    }

    return result;
}

module.exports = {
    getMovieAltTitle,
    getDramaAltTitle
}