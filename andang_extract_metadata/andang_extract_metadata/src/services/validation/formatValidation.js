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
    && isSourceDataAttributesTypeCorrect(oneSource)){
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
        && oneSource.hasOwnProperty('source')&&oneSource.hasOwnProperty('target_range')){
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
    if(typeof oneSource['source_name'] === "string" && Array.isArray(oneSource['statistics_type'])
    && typeof oneSource['source_type'] === "string" && typeof oneSource['site_type'] === "string"
    && Array.isArray(oneSource['source'])){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    isFormatValid
}