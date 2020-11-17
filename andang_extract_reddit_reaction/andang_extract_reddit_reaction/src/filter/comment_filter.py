import re

def is_deleted_comment(lowered_comment: str) -> bool:
    if 'deleted' in lowered_comment:
        return True
    else:
        return False

question_signatures = ['anyone', 'anybody']
def is_question(lowered_comment: str) -> bool:
    if any([True if signature in lowered_comment else False for signature in question_signatures]):
        return True
    else:
        return False

regex = r"http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+"
def includes_url(lowered_comment: str) -> bool:
    url = re.findall(regex,lowered_comment)
    if len(url) >0:
        return True
    else:
        return False