from .mongo_connector import db

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

## season을 새로 생성한다는 것 자체가 episode가 생겼기 때문에 넣는다고 가정. 그래서 episode count가 첨부터 1
def insert_season_detail(content_id, season_number):
    _season_collection.insert_one({
        "content_id" : content_id,
        "season_number" : season_number,
        "episode_count" : 1,
        "season_statistics" : []
    })