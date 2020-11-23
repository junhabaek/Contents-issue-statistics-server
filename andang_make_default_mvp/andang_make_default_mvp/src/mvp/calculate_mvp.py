from collections import Counter
from collections import defaultdict
from typing import List
import re

def get_6mvp(names: List, sentences: List)-> List[tuple]:
    chunk_to_character_dict = defaultdict(list)
    character_counter = Counter()

    for char_name, chunks in names:
        for chunk in chunks:
            chunk_to_character_dict[chunk].append(char_name)

    single_string = ' '.join(sentences)

    sanitized_string = re.sub("[^a-zA-Z']", ' ', single_string).lower()

    for chunk in sanitized_string.split():
        for target in chunk_to_character_dict[chunk]:
            character_counter[target]+=1

    return character_counter.most_common(6)