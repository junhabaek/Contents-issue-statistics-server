const config = require('../../utils/config');
const snoowrap = require('snoowrap');

class RedditClient{
    constructor() {
        if(!RedditClient.instance){
            RedditClient.init()
        }
        return RedditClient.instance;
    }
    static init(){
        const requester = new snoowrap({
            userAgent: config.REDDIT_USER_AGENT,
            clientId : config.REDDIT_CLIENT_ID,
            clientSecret : config.REDDIT_CLIENT_SECRET,
            refreshToken : config.REDDIT_REFRESH_TOKEN

            // accessToken: config.REDDIT_ACCESS_TOKEN
        });
        RedditClient.instance = requester;
    }
}
module.exports = RedditClient