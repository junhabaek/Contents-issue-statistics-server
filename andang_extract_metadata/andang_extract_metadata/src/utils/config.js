const dotenv = require('dotenv');

if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}

const config = {};
config.TMDB_API_KEY = process.env.TMDB_API_KEY;

console.log(config.TMDB_API_KEY);

module.exports = config;