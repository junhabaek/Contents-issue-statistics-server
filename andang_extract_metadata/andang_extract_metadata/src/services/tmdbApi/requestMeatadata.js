const axios = require('axios');
const {TMDB_API_KEY} = require('../../utils/config');

const getMovieMetadata = async(contentId)=>{
    return getContentMetadata("movie", contentId);
}

const getDramaMetadata = async(contentId)=> {
    return getContentMetadata("drama", contentId);
}

const getContentMetadata = async(contentType, contentId)=>{
    let mappedContentType;
    if(contentType === "movie"){
        mappedContentType = "movie";
    }
    else{
        mappedContentType = "tv";
    }

    const url = `https://api.themoviedb.org/3/${mappedContentType}/${contentId}`;

    let result;
    try {
        const response = await axios.get(url, {
            params: {
                api_key: TMDB_API_KEY
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
    getMovieMetadata,
    getDramaMetadata
}