const {uploadStatisticsToServer, uploadPosterToServer} = require('../../../andang_extract_metadata/src/services/upload/index');
const {getPosterImage} = require('../../../andang_extract_metadata/src/services/tmdbApi')

describe('upload',()=>{
    it('upload poster', async()=>{
        const image = await getPosterImage("/or06FN3Dka5tukK1e9sl16pB3iy.jpg");
        if(image!==undefined){
            const result = await uploadPosterToServer(image, "tempImage", ".jpg");
            // console.log(result);
        }
    });
    // it('upload statistics', async()=>{
    //
    // });
})