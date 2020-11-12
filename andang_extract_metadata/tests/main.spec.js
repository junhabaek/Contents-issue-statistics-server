const should = require('should');
const {main} = require('../andang_extract_metadata/src/main');
const {validRawIdDramaRequest, invalidContentIdDramaRequest} = require('./services/validation/validationTestData');

describe('integration test', ()=>{
   it('invalid collectingInfo', async()=>{
       const result = await main(validRawIdDramaRequest);
       result.isSuccess.should.eql(true);
   }).timeout(10000);
   it('valid collectingInfo', async()=>{
       const result = await main(invalidContentIdDramaRequest);
       result.isSuccess.should.eql(false);
   }).timeout(10000);
});