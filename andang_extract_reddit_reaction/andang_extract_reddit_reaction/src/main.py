
def main(content_id, source_name, season_number, episode_number, source_id):
    size = 'large' if season_number ==0 else 'small'
    reddit_client = RedditComments(source_id, size)
    df = reddit_client.get_one_depth_comments()
    s3_uploader = S3Uploader()
    s3_uploader.upload_dataframe(df, content_id, source_name, season_number, episode_number)

if __name__ == "__main__":
    from dotenv import load_dotenv
    from andang_extract_reddit_reaction.src.redditApi.reddit_requester import RedditComments
    from andang_extract_reddit_reaction.src.s3upload.s3_uploader import S3Uploader

    load_dotenv(verbose = True)
    main("m123", "reddit_discussion", 1, 2, "323947")
else:
    ##TODO lambda upload시 . 빼야함.
    from src.redditApi.reddit_requester import RedditComments
    from src.s3upload.s3_uploader import S3Uploader
