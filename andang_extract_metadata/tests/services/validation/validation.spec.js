const should = require('should');
const testData = require('./validationTestData');
const {validateRequest} = require('../../../andang_extract_metadata/src/services/validation');
const {isFormatValid} = require('../../../andang_extract_metadata/src/services/validation/formatValidation');
const {isContentValid} = require('../../../andang_extract_metadata/src/services/validation/contentValidation');
const {areSourceDataValid} = require('../../../andang_extract_metadata/src/services/validation/sourceValidation');

describe('validation', ()=>{
    describe('format validation', ()=>{
        it('valid format', async()=>{
            const result = await isFormatValid(testData.validRawIdDramaRequest);
            result.should.eql(true);
        });
        it('invalid contentType', async()=>{
            const result = await isFormatValid(testData.invalidContentTypeRequest);
            result.should.eql(false);
        });
        it('undefined attribute', async()=>{
            const result = await isFormatValid(testData.undefinedContentIdRequest);
            result.should.eql(false);
        });
    });
    describe('content validation', ()=>{
        it('valid drama id', async()=>{
            const result = await isContentValid(testData.validRawIdDramaRequest.content_type,
                testData.validRawIdDramaRequest.content_id);
            result.should.eql(true);
        });
        it('invalid drama id', async()=>{
            const result = await isContentValid(testData.invalidContentIdDramaRequest.content_type,
                testData.invalidContentIdDramaRequest.content_id);
            result.should.eql(false);
        });
        it('valid movie id', async()=>{
            const result = await isContentValid(testData.validRawIdMovieRequest.content_type,
                testData.validRawIdMovieRequest.content_id);
            result.should.eql(true);
        });
        it('invalid movie id', async()=>{
            const result = await isContentValid(testData.invalidContentIdMovieRequest.content_type,
                testData.invalidContentIdMovieRequest.content_id);
            result.should.eql(false);
        });
    });


    describe('source validation', ()=>{
        it('invalid SourceType', async()=>{
            const result = await areSourceDataValid(testData.invalidSourceTypeSourceData)
            result.should.eql(false);
        }).timeout(5000);
        it('invalid SiteType', async()=>{
            const result = await areSourceDataValid(testData.invalidSiteTypeSourceData)
            result.should.eql(false);
        }).timeout(5000);
        it('invalid SourceData Format', async()=>{
            const result = await areSourceDataValid(testData.invalidFormatSourceData)
            result.should.eql(false);
        }).timeout(5000);
        it('valid raw id', async()=>{
            const result = await areSourceDataValid(testData.validSourceData)
            result.should.eql(true);
        }).timeout(5000);
        it('invalid raw id', async()=>{
            const result = await areSourceDataValid(testData.invalidSourceSourceData)
            result.should.eql(false);
        }).timeout(5000);
    });
});