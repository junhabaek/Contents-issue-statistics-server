import praw
import praw.models.reddit.comment as reddit_comment
import praw.models.reddit.submission as reddit_submission
import os
import pandas as pd
from src.filter import comment_filter

class RedditComments:
    def __init__(self, submission_id: str, size: str):
        self._reddit_client = praw.Reddit(
            client_id=os.getenv("REDDIT_CLIENT_ID"),
            client_secret=os.getenv("REDDIT_CLIENT_SECRET"),
            user_agent=os.getenv("REDDIT_USER_AGENT")
        )
        self._submission = self._request_submission(submission_id, size)

    def get_one_depth_comments(self) -> pd.DataFrame:
        comment_list = []
        for cur_comment in self._submission.comments.list():
            if self._is_useful_comments(cur_comment):
                comment_list.append(cur_comment.body)

        df = pd.DataFrame(comment_list, columns=['text'])
        return df

    ## TODO 2 depth는 요구사항 명확해지기 전까지 보류
    def _get_two_depth_comments(self) -> pd.DataFrame:
        pass

    def _request_submission(self, submission_id: str, size: str) -> reddit_submission:
        submission = self._reddit_client.submission(submission_id)
        if size == 'large':
            submission.comments.replace_more(limit=8)
        else:
            submission.comments.replace_more(limit=None)
        return submission

    def _is_minus_score(self, comment: reddit_comment) -> bool:
        if comment.score < 0:
            return True
        else:
            return False

    def _is_useful_comments(self, comment: reddit_comment) -> bool:
        lowered_comment = comment.body.lower()
        if self._is_minus_score(comment) or comment_filter.is_question(lowered_comment)\
            or comment_filter.is_deleted_comment(lowered_comment) \
                or comment_filter.includes_url(lowered_comment):
            return False
        else:
            return True
