const areSourceDataValid = async(sourceData)=>{
    const promises = sourceData.map(isSourceDataValid)
    await Promise.all(promises);
}

const isSourceDataValid = async(oneSource) =>{
    if(oneSource.site_type === "reddit"){
        return isRedditSourceValid(oneSource);
    }
    else if(oneSource.site_type === "twitter"){
        return isTwitterSourceValid(oneSource)
    }
    return false;
}

const isRedditSourceValid = async(oneSource)=>{
    if(oneSource.source_type === "search_pattern"){

    }
    else if(oneSource.source_type === "raw_id"){
        // not defined yet
        return false;
    }
    return false;
}

// not implemented yet
const isTwitterSourceValid = async(oneSource)=>{

}

const isStatisticsTypeValid = async()=>{
    //TODO lambda에 해당하는 이름의 함수가 있는가?
}

module.exports = {
    areSourceDataValid
}