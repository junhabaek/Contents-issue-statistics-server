const axios = require('axios');
const {TMDB_API_KEY} = require('../../utils/config');

const getMovieCredits = async(contentId)=>{
    return getContentCredits("movie", contentId);
}

const getDramaCredits = async(contentId)=> {
    return getContentCredits("drama", contentId);
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