const {validateRequest} = require('./services/validation/index');
const {extractContentDetail} = require('./services/extraction/index');

//controller의 역할
const main = async(collectingInfo)=>{
    const result = {message : ""}

    result.message = await validateRequest(collectingInfo);

    // 만약 검증 문제 없었다면 metadata 추출, 있었다면 s3버킷에 등록(현재는 그냥 로그기록 + 에러 메시지 반환토록 하자
    if(result.message === "success"){
        try{
            //TODO [NOW] 갱신된 overveiw 이용 result 데이터 넣기.
            const contentDetail = await extractContentDetail(collectingInfo.content_type, collectingInfo.content_id);

            if(contentDetail.hasOwnProperty('content_id')){
                result.isSucess = true;
                result.contentId = contentDetail.content_id; //여기서의 content_id != collectingInfo.content_id

                // TODO poster 받기
                // poster s3 넣기
                // _poster_url 갱신

                //TODO [NOW] metadata 바탕으로, collectingInfo 갱신할거 있으면 갱신
                //TODO [NOW] 받은거 가지고 mongodb 안에 넣어주기
                //TODO [NOW] sourceData의 updated를 season : 1, episodes :0으로 초기화
                //TODO [NOW] collectingInfo를 mongodb의 collectingInfo에 저장.(isUpdating flag == true)
                //TODO [NOW] metadata를 mongodb의 대기중 contentsOverview에 저장.
            }
            else{
                //TODO 나. 가
            }


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