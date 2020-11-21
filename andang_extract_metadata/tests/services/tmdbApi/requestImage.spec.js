const should = require('should');
const {saveImage} = require('../../../andang_extract_metadata/src/services/tmdbApi/requestPoster');

describe('download and save poster', ()=>{
    it('download movie poster', async()=>{
        try {
            await saveImage('/or06FN3Dka5tukK1e9sl16pB37567567iy.jpg', 'temp.jpg')
        }
        catch(e){
            console.log(e)
        }

    })
    // it('donwload drama poster', async()=>{
    //
    // })
})