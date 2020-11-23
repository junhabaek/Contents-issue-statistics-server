## TODO lambda 배포시 . 제거
from src.dao.mongo_connector import db

_pending_collecting_info = db['pendingcollectingmetadatas']
_deploying_collecting_info = db['collectingmetadatas']

def move_collecting_info_from_pending_to_deploy(content_id):
    result = _pending_collecting_info.find_one_and_delete({
        "content_id":content_id
    })
    _deploying_collecting_info.insert_one(result)