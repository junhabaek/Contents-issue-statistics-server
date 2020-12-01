from src.dao.mongo_connector import db

_season_collection = db['seasons']

def get_season_detail(content_id, season_number):
    return _season_collection.find_one({
        "content_id" : content_id,
        "season_number" : season_number
    })

def update_episode_count_in_season(content_id, season_number):
    _season_collection.update_one({
        "content_id" : content_id,
        "season_number" : season_number
    },{'$inc':{"episode_count":1}})


def insert_season_detail(content_id, season_number):
    _season_collection.insert_one({
        "content_id" : content_id,
        "season_number" : season_number,
        "episode_count" : 0,
        "season_statistics" : []
    })

def update_season_statistics(content_id, season_number, statistics_path):
    _season_collection.update_one({
        "content_id" : content_id,
        "season_number": season_number
    },{
        '$push':{'season_statistics' : {
            "statistics_type" : "wordcloud",
            "statistics_name" : f'wordcloud for season{season_number}',
            "url" : statistics_path
    }}})