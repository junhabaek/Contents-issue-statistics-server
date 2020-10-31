const {main} = require('./src/main');

exports.handler =  async function(event, context) {
    //TODO 요청 데이터 추출
    const {body} = event;

    const result = await main(event)

    return result
}