
def main(content_id, source_name, season_number, episode_number):
    s3_manager = S3Manager()
    df = s3_manager.download_dataframe(content_id, source_name, season_number, episode_number)
    word_generator = WordcloudGenerator()
    wordcloud = word_generator.make_wordcloud(df)
    image_path = s3_manager.upload_wordcloud(wordcloud,content_id,source_name,season_number,episode_number)
    image_path = '/'+image_path

    result = get_season_detail(content_id, season_number)
    if result is None:
        insert_season_detail(content_id, season_number)
        insert_episode_detail(content_id, season_number, episode_number)
        if season_number == 1:
            move_content_detail_from_pending_to_deploy(content_id)
            move_collecting_info_from_pending_to_deploy(content_id)
        update_season_count_in_content_detail(content_id)
    else:
        if get_episode_detail(content_id, season_number, episode_number) is None:
            insert_episode_detail(content_id, season_number, episode_number)
            update_episode_count_in_season(content_id,season_number)


    update_episode_statistics(content_id, season_number,episode_number,image_path)



if __name__ == "__main__":
    from dotenv import load_dotenv
    from andang_make_default_wordcloud.src.fileManager.s3_manager import S3Manager
    from andang_make_default_wordcloud.src.wordcloudGenerator.wordcloud_generator import WordcloudGenerator
    load_dotenv(verbose = True)

    from andang_make_default_wordcloud.src.dao.content_detail_dao import *
    from andang_make_default_wordcloud.src.dao.season_dao import *
    from andang_make_default_wordcloud.src.dao.episode_dao import *
    from andang_make_default_wordcloud.src.dao.collecting_info_dao import *
    main("t61889", "reddit_discussion", 1, 2)

else:
    ## TODO lambda 배포시 src.fileManager로 변경
    from .fileManager.s3_manager import S3Manager
    from .wordcloudGenerator.wordcloud_generator import WordcloudGenerator

    from .dao.content_detail_dao import *
    from .dao.season_dao import *
    from .dao.episode_dao import *
    from .dao.collecting_info_dao import *