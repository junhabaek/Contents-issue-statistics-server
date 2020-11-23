from src.dao.mongo_connector import db

_episode_collection = db['leaf_episodes']

def update_episode_statistics(content_id, season_number, episode_number, statistics_path):
    _episode_collection.update_one({
        "content_id" : content_id,
        "season_number" : season_number,
        "episode_number" : episode_number
    },{
        '$push':{'episode_statistics' : {
            "statistics_type" : "mvp",
            "statistics_name" : f'mvp for episode{episode_number}',
            "url" : statistics_path
    }}})

def insert_episode_detail(content_id, season_number, episode_number):
    _episode_collection.insert_one({
        "content_id" : content_id,
        "season_number" : season_number,
        "episode_number" : episode_number,
        "episode_statistics" : []
    })
    
def get_episode_detail(content_id, season_number, episode_number):
    return _episode_collection.find_one({
        "content_id" : content_id,
        "season_number" : season_number,
        "episode_number": episode_number
    })