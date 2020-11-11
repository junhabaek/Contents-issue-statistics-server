const should = require('should');
const {getDramaAltTitle, getMovieAltTitle,getMovieCredits,getDramaCredits} =
    require('../../../andang_extract_metadata/src/services/tmdbApi');

describe('tmdb API', ()=>{
    describe('tv alternative title', ()=>{
        it('valid tv_id alt title', async()=>{
            const result = await getDramaAltTitle('1399');
            // console.log(result);
            result.success.should.eql(true);
        });
        it('invalid tv_id alt title', async()=>{
            try{
                const result = await getDramaAltTitle('13993588');
                // console.log(result);
                result.success.should.eql(false);
            }
            catch(e){
                console.log(e);
            }
        });
    });
    describe('movie alternative title', ()=>{
        it('valid movie_id alt title', async()=>{
            const result = await getMovieAltTitle('299534');
            // console.log(result);
            result.success.should.eql(true);
        });
        it('invalid movie_id alt title', async()=>{
            try{
                const result = await getMovieAltTitle('2995345635574');
                // console.log(result);
                result.success.should.eql(false);
            }
            catch(e){
                console.log(e);
            }
        });
    });
    describe('tv credits', ()=>{
        it('valid tv_id credits', async()=>{
            const result = await getDramaCredits('1399');
            // console.log(result);
            result.success.should.eql(true);
        });
        it('invalid tv_id credits', async()=>{
            try{
                const result = await getDramaCredits('13993588');
                // console.log(result);
                result.success.should.eql(false);
            }
            catch(e){
                console.log(e);
            }
        });
    });
    describe('movie credits', ()=>{
        it('valid movie_id credits', async()=>{
            const result = await getMovieCredits('299534');
            // console.log(result);
            result.success.should.eql(true);
        });
        it('invalid movie_id credits', async()=>{
            try{
                const result = await getMovieCredits('2995345635574');
                // console.log(result);
                result.success.should.eql(false);
            }
            catch(e){
                console.log(e);
            }
        });
    });
});