const RedditClient = require('./redditClient');
const reddit = new RedditClient();

const isSubRedditNameIdMatched = async(sourceId, subRedditName)=>{
    let result;
    try {
        result = await reddit.getSubmission(sourceId).fetch();
    }
    catch(e){
        result = {}
    }
    return result.subreddit_name_prefixed === 'r/'+subRedditName;
}

module.exports = {
    isSubRedditNameIdMatched
}