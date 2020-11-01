const {getMovieMetadata, getDramaMetadata} = require('../tmdbApi/index');

const isContentValid = async(contentType, contentId)=>{
    if(contentType === "movie"){
        return isMovieValid(contentId);
    }
    else if(contentType === "drama"){
        return isDramaValid(contentId);
    }
    else{
        return false;
    }
}

const isMovieValid = async(contentId)=>{
    const result = await getMovieMetadata(contentId);
    return result.success;
}

const isDramaValid = async(contentId)=>{
    const result = await getDramaMetadata(contentId);
    return result.success;
}

// not defined yet
const isSportsValid = async(contentId)=>{

}

module.exports = {
    isContentValid
}