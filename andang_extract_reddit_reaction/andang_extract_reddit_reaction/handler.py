from src import main

def lambda_handler(event, context):
    ##TODO event 객체로부터 필요 정보 추출하기.
    body = event['body'];
    main.main(body['content_id'], body['source_name'], body['season_number'], body['episode_number'],
              body['source'])

    return {
        'statusCode' : 200,
        'body' :{
            'content_id':body['content_id'],
            'source_name':body['source_name'],
            'statistics_type':body['statistics_type'],
            'season_number':body['season_number'],
            'episode_number':body['episode_number']
        }
    }