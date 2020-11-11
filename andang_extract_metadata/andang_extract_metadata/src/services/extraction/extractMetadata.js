const {extractContentOverview} = require('./extractContentOverview');

const extractMetadata = async(collectingInfo)=>{
    //TODO [NOW] requestMetadata

    //TODO [NOW] interface 수정
    const overview = await extractContentOverview(collectingInfo.content_type, collectingInfo.content_id);

    //TODO [NOW] metadata 추가 정보 기입
    collectingInfo.aired_information = {
        season : 0,
        episode : 0
    }


    //TODO [NOW] 갱신된 overview 반환
    return collectingInfo.content_id;
}

module.exports = {
    extractMetadata
}