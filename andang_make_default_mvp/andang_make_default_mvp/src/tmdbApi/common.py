import re
from typing import List

def _get_valid_sliced_name_chunk(name: tuple)-> tuple:
    without_special_name = re.sub("[^A-Za-z0-9']+", ' ', name[1])
    splitted_name = without_special_name.split()

    to_be_removed = []
    for i, chunk in enumerate(splitted_name):
        if len(chunk) <=2:
            to_be_removed.append(i)
        else:
            splitted_name[i] = chunk.lower()

    for i in reversed(to_be_removed):
        del splitted_name[i]

    return name[0], splitted_name