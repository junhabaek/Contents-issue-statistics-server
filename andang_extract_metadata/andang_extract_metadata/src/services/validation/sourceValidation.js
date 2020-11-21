const {isSubRedditNameIdMatched} = require('../redditAPIService');

const areSourceDataValid = async(sourceData)=>{
    const promises = sourceData.map(isSourceDataValid)
    const results = await Promise.all(promises);
    return results.every(function(i){return i;});
}

const isSourceDataValid = async(oneSource) =>{
    if(oneSource.site_type === "reddit"){
        return areRedditSourceValid(oneSource);
    }
    else if(oneSource.site_type === "twitter"){
        return isTwitterSourceValid(oneSource)
    }
    return false;
}

const areRedditSourceValid = async(oneSource)=>{
    if(oneSource.source_type === "search_pattern"){
        return false;
    }
    else if(oneSource.source_type === "raw_id"){
        const promises = [];
        oneSource.source.forEach(function(src){
            promises.push(isRedditSourceValid(src, oneSource['additional_data']['sub_reddit']));
        });
        const results = await Promise.all(promises);
        return results.every(function(i){return i;});
    }
    return false;
}

const isRedditSourceValid = async(sourceId, subRedditName)=>{
    return isSubRedditNameIdMatched(sourceId, subRedditName);
}

// not implemented yet
const isTwitterSourceValid = async(oneSource)=>{
    return false;
}

const isStatisticsTypeValid = async()=>{
    //TODO lambda에 해당하는 이름의 함수가 있는가?
}

module.exports = {
    areSourceDataValid
}