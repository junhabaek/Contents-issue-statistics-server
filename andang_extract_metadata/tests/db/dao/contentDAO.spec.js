const should = require('should');
require('../../../andang_extract_metadata/src/db/connectors').connectMongo();
const contentDAO = require('../../../andang_extract_metadata/src/db/dao/contentDAO');
const {testContent} = require('./testData');

describe('test',()=>{
   it('addContent',async()=>{
       const result = await contentDAO.addContent(testContent);
       console.log(result);
   });
});