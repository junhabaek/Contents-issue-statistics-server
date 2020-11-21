const should = require('should');
const {validDramaId, invalidDramaId, validMovieId, invalidMovieId} = require('./extractionTestData');
const {extractContentDetail} = require('../../../andang_extract_metadata/src/services/extraction/index');

describe('extract contentDetail', ()=>{
    it('with alt title movie', async()=>{
        const result = await extractContentDetail("movie", validMovieId);
        console.log(result);
        result.should.have.ownProperty('content_id');
    });

    it('without alt title movie', async()=>{
        const result = await extractContentDetail("movie", invalidMovieId);
        console.log(result);
        result.should.have.ownProperty('content_id');
    });

    it('with alt title drama', async()=>{
        const result = await extractContentDetail("drama", validDramaId);
        console.log(result);
        result.should.have.ownProperty('content_id');
    });

    it('without alt title drama', async()=>{
        const result = await extractContentDetail("drama", invalidDramaId);
        console.log(result);
        result.should.have.ownProperty('content_id');
    });
});