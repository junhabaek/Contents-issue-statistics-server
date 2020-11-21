const validContentTypes = ["movie", "drama"]

//TODO try catch 도배해도 되는걸까?
const isFormatValid = async(doc)=>{
    if (isUndefinedNotExist(doc) && areBasicAttributesTypeCorrect(doc)
        && areSourceDataFormatValid(doc.source_data)
        && isContentTypeValid(doc.content_type)) {
        return true;
    } else {
        return false;
    }
}

const isUndefinedNotExist = (doc)=>{
    try {
        if (doc.hasOwnProperty('content_id') && doc.hasOwnProperty('content_type')
            && doc.hasOwnProperty('source_data')) {
            return true;
        } else {
            return false;
        }
    }
    catch(e){
        console.log(e);
        return false;
    }
}

const areBasicAttributesTypeCorrect = (doc)=>{
    try{
        if(typeof doc['content_id'] === "string" && typeof doc['content_type'] === "string"
        && Array.isArray(doc['source_data'])){
            return true;
        }
        else{
            return false;
        }
    }
    catch(e){
        console.log(e);
        return false;
    }
}

const isContentTypeValid = (contentType)=>{
    if (validContentTypes.includes(contentType)) {
        return true;
    } else {
        return false;
    }
}

const areSourceDataFormatValid = (sourceData)=>{
    if(sourceData.every(isSourceDataFormatValid)){
        return true;
    }
    else{
        return false;
    }
}
const isSourceDataFormatValid = (oneSource)=>{
    if(isSourceDataUndefinedNotExist(oneSource)
    && isSourceDataAttributesTypeCorrect(oneSource)
    && isSourceTypeSpecificFormatValid(oneSource)
    && isSiteTypeSpecificFormatValid(oneSource)){
        return true;
    }
    else{
        return false;
    }
}

//TODO 이때 class 쓰는건가?
//외부에서 받은걸 class로 mapping 할 수 있어?
const isSourceDataUndefinedNotExist = (oneSource)=>{
    try{
        if(oneSource.hasOwnProperty('source_name')&&oneSource.hasOwnProperty('statistics_type')
        && oneSource.hasOwnProperty('source_type')&&oneSource.hasOwnProperty('site_type')
        && oneSource.hasOwnProperty('source')&&oneSource.hasOwnProperty('target_range')) {
            return true;
        }
        else{
            return false;
        }
    }
    catch(e){
        console.log(e);
        return false;
    }
}

const isSourceDataAttributesTypeCorrect = (oneSource)=>{
    //TODO 현재는 raw_id만 고려하기 때문에, from과 to가 둘 다 있어야 한다.
    //나중에 search pattern으로 자동 갱신이 된다고 가정하면, default로 최신화까지 전부 긁어주세요 그렇게 말할수도 있어.

    if(typeof oneSource['source_name'] === "string" && Array.isArray(oneSource['statistics_type'])
    && typeof oneSource['source_type'] === "string" && typeof oneSource['site_type'] === "string"
    && Array.isArray(oneSource['source'])){
        return true;
    }
    else{
        return false;
    }
}

const isSourceTypeSpecificFormatValid = (oneSource)=>{
    if(oneSource['source_type'] === 'raw_id'){
        if(oneSource['target_range'].hasOwnProperty('from')
            && oneSource['target_range'].hasOwnProperty('to')
            && typeof oneSource['target_range']['from']['season'] ==="number"
            && typeof oneSource['target_range']['from']['episode'] === "number"
            && typeof oneSource['target_range']['to']['season'] === "number"
            && typeof oneSource['target_range']['to']['episode'] === "number"
            && isSourceNumberExact(oneSource)) {
            return true;
        }
        else{
            return false;
        }
    }
    else if(oneSource['source_type'] === 'search_pattern'){
        return true;
    }
    return false;
}

const isSourceNumberExact = (oneSource)=>{
    //TODO 원래는 from, to 구간이 만드는 episode 개수와, source에 넣어준 개수가 같은지 체크해야 함

    return true;

    // const startSeason = oneSource['target_range']['from']['season'];
    // const destinSeason = oneSource['target_range']['to']['season'];
    //
    // if(startSeason <1 || destinSeason <1){
    //     return false;
    // }
    //
    // let episodeCount = 0;
    // for(let i=startSeason; i<=destinSeason; i++){
    //
    // }
}

const isSiteTypeSpecificFormatValid = (oneSource)=>{
    if(oneSource['site_type'] === 'reddit'){
        if(oneSource.hasOwnProperty('additional_data')
        && typeof oneSource['additional_data']['sub_reddit'] === "string"){
            return true;
        }
        else{
            return false;
        }
    }
    else if(oneSource['site_type'] === 'twitter'){
        return true;
    }
    return false;
}

module.exports = {
    isFormatValid
}