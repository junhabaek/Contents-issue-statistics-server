const {validateRequest} = require('./services/validation/index');
const {extractContentDetail} = require('./services/extraction/index');
const {getPosterImage} = require('./services/tmdbApi');
const {uploadPosterToServer} = require('./services/upload');
const {addContent, addCollectingMetadata} = require('./db/dao');
const {splitCollectingInfoToExtractionRequests} = require('./services/splitRequests');
require('./db/connectors').connectMongo();

// console.log("db connected");

//controller의 역할
const main = async(collectingInfo)=>{
    const result = {
        message : "",
        resultResources:[]
    }

    result.message = await validateRequest(collectingInfo);
    // console.log("validate success");

    // 만약 검증 문제 없었다면 metadata 추출, 있었다면 s3버킷에 등록(현재는 그냥 로그기록 + 에러 메시지 반환토록 하자
    if(result.message === "success"){
        try{
            const contentDetail = await extractContentDetail(collectingInfo.content_type, collectingInfo.content_id);
            
            // console.log("extract detail success");

            if(contentDetail.hasOwnProperty('content_id')){
                result.isSuccess = true;
                result.contentId = contentDetail.content_id; //여기서의 content_id != collectingInfo.content_id
                result.isFirstCall = true; //이게 true냐 false냐에 따라 어느 collection에서 collectingInfo 찾는지 달라진다.
                                        // 굳이 데이터 자체에 firstCall 여부의 정보를 직접 넣고 싶지 않았기 때문.

                const posterImage = await getPosterImage(contentDetail.poster_url);
                // console.log("download poster success");

                const imageNameAndFormat = contentDetail.poster_url.split('.');
                const imageFileName = contentDetail.content_id + '.' + imageNameAndFormat[imageNameAndFormat.length-1];
                await uploadPosterToServer(posterImage, imageFileName);
                
                // console.log("upload poster success");

                contentDetail.poster_url = `/test/posters/${imageFileName}`;

                collectingInfo.source_data.forEach(element=>element.updated = {season:1, episode:0});
                collectingInfo.tmdb_id = collectingInfo.content_id;
                collectingInfo.content_id = contentDetail.content_id;

                await addContent(contentDetail);
                await addCollectingMetadata(collectingInfo);

                result.resultSources = splitCollectingInfoToExtractionRequests(collectingInfo);
            }
            else{
                result.message = "some error"
                result.isSuccess = false;
            }


        }
        catch(e){
            result.message = e;
            result.isSuccess = false;
        }
    }
    else{
        //TODO 에러시 s3 버킷에 등록(선택사항)
        console.log(result.message);
        result.isSuccess = false;
    }

    return result;
}

module.exports = {main}