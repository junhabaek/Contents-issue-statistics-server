//TODO index.js로 바꿔버리기? directory 구조만 보기에는 뭐가 진입점인지 잘 모른다.

const {isFormatValid} = require('./formatValidation');
const {isContentValid} = require('./contentValidation');
const {areSourceDataValid} = require('./sourceValidation');

const validateRequest = async(collectingInfo)=>{
    let message = "success"
    if(isFormatValid === false){
        message = "format";
    }
    else if(await isContentValid(collectingInfo.content_type, collectingInfo.content_id) === false){
        message = "invalidContentId";
    }
    else if(await areSourceDataValid(collectingInfo.source_data) === false){
        message = "invalidSourceData";
    }
    return message;
}

module.exports = {
    validateRequest
}