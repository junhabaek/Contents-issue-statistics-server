const should = require('should');
require('../../../andang_extract_metadata/src/db/connectors').connectMongo();
const collectingMetadataDAO = require('../../../andang_extract_metadata/src/db/dao/collectingMetadataDAO');
const {testCollectingInfo} = require('./testData');

describe('test',()=>{
    it('add CollectingMetadata',async()=>{
        const result = await collectingMetadataDAO.addCollectingMetadata(testCollectingInfo);
        console.log(result);
    });
});