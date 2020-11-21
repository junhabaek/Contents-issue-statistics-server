const splitCollectingInfoToExtractionRequests = (requestFormat)=>{
    const resultSources = [];

    requestFormat.source_data.forEach((element)=>{
        // 고정되는 value들

        for(let i=element.target_range.from.episode; i<= element.target_range.to.episode; i++){
            element.statistics_type.forEach((statisticsType)=>{
                const extractRequest = {
                    "content_id" : requestFormat.content_id,
                    "source_name" : element.source_name,
                    "statistics_type" : statisticsType,
                    "source_type" : element.source_type,
                    "site_type" : element.site_type,
                    "source" : element.source[i-element.target_range.from.episode],
                    "season_number" : element.target_range.from.season,
                    "episode_number" : i
                }
                resultSources.push(extractRequest);
            })
        }
    });
    return resultSources;

}

module.exports = {
    splitCollectingInfoToExtractionRequests
}