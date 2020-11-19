const {main} = require('./src/main');

exports.handler =  async function(event, context) {

    const {body} = event;

    const response = {};

    const result = await main(body)
    response.body = {
        "statusCode" : result.isSuccess ? 200:400,
        "resultSources" : result.resultResources
    }

    return result
}