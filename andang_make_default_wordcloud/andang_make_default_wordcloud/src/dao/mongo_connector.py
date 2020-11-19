import pymongo
import os

_client = pymongo.MongoClient(os.getenv("MONGO_URL"))
db = _client['andangTestResourceDB']