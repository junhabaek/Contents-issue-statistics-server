import boto3
import os
import pandas as pd
from io import StringIO, BytesIO
import matplotlib.pyplot as plt

class S3Manager:
    def __init__(self):
        self._client = boto3.client('s3',
                                       aws_access_key_id=os.getenv("S3_ACCESS_KEY"),
                                       aws_secret_access_key=os.getenv("S3_SECRET_ACCESS_KEY"),
                                       region_name=os.getenv("S3_REGION"))
    def download_dataframe(self, content_id, source_name, season_number, episode_number):

        obj = self._client.get_object(Bucket='big-andang',
                                Key=self._get_formatted_csv_path(content_id, source_name, season_number, episode_number))
        body = obj['Body']
        csv_string = body.read().decode('utf-8')

        return pd.read_csv(StringIO(csv_string))

    def _get_formatted_csv_path(self, content_id, source_name, season_number, episode_number):
        return f'test/reactions/{content_id}/{source_name}/flattened_S{season_number}E{episode_number}.csv'

    def upload_wordcloud(self, wordcloud, content_id, source_name, season_number, episode_number):
        plt.imshow(wordcloud)
        wordcloud_data = BytesIO()
        plt.axis('off')
        plt.savefig(wordcloud_data, format='png')
        wordcloud_data.seek(0)

        image_path = self._get_formatted_image_path(content_id, source_name, season_number, episode_number)

        self._client.put_object(Bucket='big-andang', Body=wordcloud_data,
                                ContentType='image/png',
                                Key=image_path)
        return image_path


    def _get_formatted_image_path(self, content_id, source_name, season_number, episode_number):
        return f'test/statistics/{content_id}/{source_name}/wordcloud/S{season_number}E{episode_number}.png'