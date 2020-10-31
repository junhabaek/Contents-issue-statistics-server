const {extractContentOverview} = require('./extractContentOverview');

const extractMetadata = async(collectingInfo)=>{
    const overview = await extractContentOverview(collectingInfo.content_type, collectingInfo.content_id);

    collectingInfo.aired_information = {
        season : 0,
        episode : 0
    }
    //TODO sourceData의 updated를 1, 0으로 초기화

    //TODO collectingInfo를 mongodb의 collectingInfo에 저장.(isUpdating flag == true)
    //TODO metadata를 mongodb의 대기중 contentsOverview에 저장.

    return collectingInfo.content_id;
}

module.exports = {
    extractMetadata
}