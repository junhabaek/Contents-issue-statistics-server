
def main(content_id, source_name, season_number, episode_number):
    s3_manager = S3Manager()
    df = s3_manager.download_dataframe(content_id, source_name, season_number, episode_number)
    print(df.shape)

if __name__ == "__main__":
    from dotenv import load_dotenv
    from andang_make_default_wordcloud.src.fileManager.s3_manager import S3Manager

    load_dotenv(verbose = True)
    main("m123", "reddit_discussion", 1, 2)
else:
    from .fileManager.s3_manager import S3Manager