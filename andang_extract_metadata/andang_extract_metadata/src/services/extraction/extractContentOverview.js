//TODO [개선] 어떤 parameter가 먼저 나와야 하는가?
const extractContentOverview = async(contentType, contentId)=>{
    let result = {};
    if(contentType === "movie"){
        result = extractMovieOverview(contentId);
    }
    else if(contentType === "drama"){
        result = extractDramaOverview(contentId);
    }
    return result;
}

//from tmdb
const extractMovieOverview = async(contentId)=>{
    //content_id를 unique id로 바꾸는 방법.

}
//from tmdb
const extractDramaOverview = async(contentId)=>{

}

//not defined yet
const extractSportsOverview = async(contentId)=>{

}

module.exports = {
    extractContentOverview
}