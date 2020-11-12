const {getMovieMetadata} = require('./requestMeatadata');
const {getDramaMetadata} = require('./requestMeatadata');
const {getDramaAltTitle, getMovieAltTitle} = require('./requestAlternativeTitle');
const {getDramaCredits, getMovieCredits} = require('./requestCredits');
const {getPosterImage} = require('./requestPoster');


module.exports = {
    getDramaMetadata,
    getMovieMetadata,
    getDramaAltTitle,
    getMovieAltTitle,
    getDramaCredits,
    getMovieCredits,
    getPosterImage
}