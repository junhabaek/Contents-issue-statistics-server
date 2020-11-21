import boto3
import os
from io import StringIO

class S3Uploader:
    def __init__(self):
        self._client = boto3.client('s3',
                                       aws_access_key_id=os.getenv("S3_ACCESS_KEY"),
                                       aws_secret_access_key=os.getenv("S3_SECRET_ACCESS_KEY"),
                                       region_name=os.getenv("S3_REGION"))
    def upload_dataframe(self, target_df, content_id, source_name, season_number, episode_number):
        csv_buf = StringIO()
        target_df.to_csv(csv_buf, header=True, index=False)
        csv_buf.seek(0)
        self._client.put_object(Bucket='big-andang', Body=csv_buf.getvalue(),
                                Key=self._get_formatted_path(content_id, source_name, season_number, episode_number))

    def _get_formatted_path(self, content_id, source_name, season_number, episode_number):
        return f'test/reactions/{content_id}/{source_name}/flattened_S{season_number}E{episode_number}.csv'