const {main} = require('./src/main');

exports.handler =  async function(event, context) {

    const {body} = event;

    const response = {};

    const result = await main(body);
    response.body = {
        "resultSources" : result.resultSources
    };
    response.isSuccess = result.isSuccess;

    return response
}