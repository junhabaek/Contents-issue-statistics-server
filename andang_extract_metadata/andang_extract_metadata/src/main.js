//TODO 서비스 require
const {validateRequest} = require('./services/validation/index');
const {extractMetadata} = require('./services/extraction/index');

//TODO controller의 역할
const main = async(collectingInfo)=>{
    const result = {message : ""}

    result.message = await validateRequest(collectingInfo);

    // 만약 검증 문제 없었다면 metadata 추출, 있었다면 s3버킷에 등록(현재는 그냥 로그기록 + 에러 메시지 반환토록 하자
    if(result.message === "success"){
        try{
            const contentId = await extractMetadata(collectingInfo);
            result.isSucess = true;
            result.contentId = contentId;
        }
        catch(e){
            result.message = e;
        }
    }
    else{
        //TODO 에러시 s3 버킷에 등록(선택사항)
        console.log(result.message);
        result.isSucess = false;
    }

    return result;
}

module.exports = {main}