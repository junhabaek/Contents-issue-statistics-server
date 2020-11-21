const axios = require('axios');
const {TMDB_API_KEY} = require('../../utils/config');

const getMovieCredits = async(contentId)=>{
    const result = await getContentCredits("movie", contentId);
    if(result.hasOwnProperty('id')){
        const max10Casts = result.cast.slice(0,10);
        const directorInfo = result.crew.find(element=>element['job'].toUpperCase() === 'DIRECTOR')
        return {
            cast :max10Casts.map(element=>element.name.toLowerCase()),
            director : (directorInfo!==undefined) ? directorInfo['name'].toLowerCase():"Not found"
        }
    }
    else{
        return {}
    }
}

const getDramaCredits = async(contentId)=> {
    const result = await getContentCredits("drama", contentId);
    if(result.hasOwnProperty('id')){
        const max10Casts = result.cast.slice(0,10)
        return {
            cast :max10Casts.map(element=>element.name.toLowerCase())
        }
    }
    else{
        return {}
    }
}

const getContentCredits = async(contentType, contentId)=>{
    let mappedContentType;
    if(contentType === "movie"){
        mappedContentType = "movie";
    }
    else{
        mappedContentType = "tv";
    }

    const url = `https://api.themoviedb.org/3/${mappedContentType}/${contentId}/credits`;

    let result;
    try {
        const response = await axios.get(url, {
            params: {
                api_key: TMDB_API_KEY,
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
    getMovieCredits,
    getDramaCredits
}