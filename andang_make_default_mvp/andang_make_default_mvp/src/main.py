from src.fileManager.s3_manager import S3Manager
from src.mvp.calculate_mvp import get_6mvp
from src.mvp.plotting_mvp import convert_mvp_to_image_file

from src.dao.content_detail_dao import *
from src.dao.season_dao import *
from src.dao.episode_dao import *
from src.dao.collecting_info_dao import *

from src.tmdbApi.episode import get_episode_character_cast
from src.tmdbApi.season import get_season_character_cast

from src.utils.df_converter import convert_df_to_str_list

def main(content_id, source_name, season_number, episode_number):
    s3_manager = S3Manager()
    df = s3_manager.download_dataframe(content_id, source_name, season_number, episode_number)

    cast_names = []
    if season_number == 0:
        return
    elif episode_number ==0:
        cast_names = get_season_character_cast(content_id, season_number)
    else:
        cast_names = get_episode_character_cast(content_id, season_number, episode_number)

    mvps = get_6mvp(cast_names, convert_df_to_str_list(df))
    
    if len(mvps) <=1:
        return

    image_data = convert_mvp_to_image_file(mvps)

    image_path = s3_manager.upload_wordcloud(image_data,content_id,source_name,season_number,episode_number)
    image_path = '/'+image_path


    if season_number ==0:
        result = update_content_statistics(content_id, image_path)
        if result == 0:
            move_content_detail_from_pending_to_deploy(content_id)
            move_collecting_info_from_pending_to_deploy(content_id)
            update_content_statistics(content_id, image_path)
    else:
        result = get_season_detail(content_id, season_number)
        if result is None:
            insert_season_detail(content_id, season_number)
            
            isNotDeployedYet = True if get_pending_collecting_detail(content_id) is not None else False
            
            if isNotDeployedYet:
                move_content_detail_from_pending_to_deploy(content_id)
                move_collecting_info_from_pending_to_deploy(content_id)
            update_season_count_in_content_detail(content_id)

        if episode_number == 0:
            update_season_statistics(content_id, season_number, image_path)

        else:
            if get_episode_detail(content_id, season_number, episode_number) is None:
                insert_episode_detail(content_id, season_number, episode_number)
                update_episode_count_in_season(content_id,season_number)

            update_episode_statistics(content_id, season_number,episode_number,image_path)



