const dotenv = require('dotenv');

if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}

const config = {};
config.TMDB_API_KEY = process.env.TMDB_API_KEY;

config.NODE_ENV = process.env.NODE_ENV;

config.REDDIT_USER_AGENT = process.env.REDDIT_USER_AGENT;
config.REDDIT_CLIENT_ID = process.env.REDDIT_CLIENT_ID;
config.REDDIT_CLIENT_SECRET = process.env.REDDIT_CLIENT_SECRET;
config.REDDIT_ACCESS_TOKEN = process.env.REDDIT_ACCESS_TOKEN;
config.REDDIT_REFRESH_TOKEN = process.env.REDDIT_REFRESH_TOKEN;

config.MONGO_URL = process.env.MONGO_URL

config.S3_ACCESS_KEY = process.env.S3_ACCESS_KEY
config.S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY
config.S3_REGION = process.env.S3_REGION

module.exports = config;