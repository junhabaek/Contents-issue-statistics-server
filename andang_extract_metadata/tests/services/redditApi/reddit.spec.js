const should = require('should');
const RedditClient = require('../../../andang_extract_metadata/src/services/redditAPIService/redditClient');

describe('redditAPI', ()=>{
    // describe('comment', ()=>{
    //
    // });
    describe('submission', ()=>{
        it('test',async()=>{

            const reddit = new RedditClient();
            const result = await reddit.getSubmission('gsd0t').fetch()
            console.log(result.subreddit_name_prefixed)

        }).timeout(5000)
    });
});