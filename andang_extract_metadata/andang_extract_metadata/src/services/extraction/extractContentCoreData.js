const {getDramaMetadata, getMovieMetadata} = require('../tmdbApi');

//TODO [개선] 어떤 parameter가 먼저 나와야 하는가?
const extractContentCoreData = async(contentType, contentId)=>{
    let result = {};
    if(contentType === "movie"){
        result = extractMovieCoreData(contentId);
    }
    else if(contentType === "drama"){
        result = extractDramaCoreData(contentId);
    }
    return result;
}

//from tmdb
const extractMovieCoreData = async(contentId)=>{
    //content_id를 unique id로 바꾸는 방법.
    const rawMetadata = await getMovieMetadata(contentId);
    const formattedResult = (({id, title, release_date, poster_path, genres, vote_average})=>
        ({
            content_id : 'm'+id,
            title_en : title.toLowerCase(),
            release_date : release_date,
            poster_url : poster_path,
            sub_type :genres,
            type_additional_data: {
                rating:vote_average
            }
        }))(rawMetadata);

    return formattedResult;
}
//from tmdb
const extractDramaCoreData = async(contentId)=>{
    const rawMetadata = await getDramaMetadata(contentId);
    const formattedResult = (({id, name, first_air_date, poster_path, genres, vote_average, created_by})=>
        ({
            content_id : 'd'+id,
            title_en : name.toLowerCase(),
            release_date : first_air_date,
            poster_url : poster_path,
            sub_type :genres,
            type_additional_data: {
                rating:vote_average,
                director : (created_by!==undefined && created_by[0]!==undefined)?created_by[0]['name'].toLowerCase():'Not found'
            }
        }))(rawMetadata);

    return formattedResult;
}

//not defined yet
const extractSportsCoreData = async(contentId)=>{

}

module.exports = {
    extractContentCoreData
}