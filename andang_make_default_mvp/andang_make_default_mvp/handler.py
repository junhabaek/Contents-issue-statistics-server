## TODO lambda 배포시 src로 변경
from src import main

def lambda_handler(event, context):
    body = event['body'];
    main.main(body['content_id'], body['source_name'], body['season_number'], body['episode_number'])

    return {
        'statusCode' : 200,
        'body' :{
            'content_id' : body['content_id'],
            'statistics' : 'mvp',
            'result':True
        }
    }