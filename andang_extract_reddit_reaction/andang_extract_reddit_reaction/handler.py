from .src import main

def lambda_handler(event, context):
    ##TODO event 객체로부터 필요 정보 추출하기.
    main.main()