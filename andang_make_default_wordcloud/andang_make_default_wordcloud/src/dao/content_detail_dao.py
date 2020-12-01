from src.dao.mongo_connector import db

_pending_content = db['pendingcontents']
_deploying_content = db['contents']

def update_season_count_in_content_detail(content_id):
    result = _deploying_content.update_one({
        "content_id" : content_id,
    },{'$inc':{"season_count":1}})

    ## TODO season number가 1인데 season detail이 없었다면. 다만, main에서 처리중.
    # if result.modified_count == 0:
    #     _pending_content.update_one({
    #         "content_id": content_id,
    #     }, {'$inc': {"season_count": 1}})


def move_content_detail_from_pending_to_deploy(content_id):
    result = _pending_content.find_one_and_delete({
        "content_id":content_id
    })
    _deploying_content.insert_one(result)

def update_content_statistics(content_id, statistics_path):
    result = _deploying_content.update_one({
        "content_id" : content_id
    },{
        '$push':{'single_statistics' : {
            "statistics_type" : "wordcloud",
            "statistics_name" : 'wordcloud',
            "url" : statistics_path
    }}})
    return result.modified_count