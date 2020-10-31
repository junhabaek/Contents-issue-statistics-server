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
    if(oneSource.source_type === "url_pattern"){

    }
    else if(oneSource.source_type === "search_pattern"){

    }
    else if(oneSource.source_type === "pure"){
        // not defined yet
        return false;
    }
    return false;
}

// not implemented yet
const isTwitterSourceValid = async(oneSource)=>{

}

module.exports = {
    areSourceDataValid
}