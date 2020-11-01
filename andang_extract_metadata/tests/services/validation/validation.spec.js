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
        //TODO statistics type validation
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

    //TODO source data validation test
    //
    // describe('source validation', ()=>{
    //     it('invalid SourceType', async()=>{
    //
    //     });
    //     it('invalid SiteType', async()=>{
    //
    //     });
    //     it('invalid SourceData Format', async()=>{
    //
    //     });
    //     it('valid search pattern', async()=>{
    //
    //     });
    //     it('invalid search pattern', async()=>{
    //
    //     });
    //     it('valid raw id', async()=>{
    //
    //     });
    //     it('invalid raw id', async()=>{
    //
    //     });
    // });
});