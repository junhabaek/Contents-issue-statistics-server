import requests
import os
from src.tmdbApi.common import _get_valid_sliced_name_chunk
from typing import List

_API_KEY = os.getenv("TMDB_API_KEY")

def get_episode_character_cast(content_id: str, season_number: int, episode_number: int)->List:
    url = f"https://api.tmdb.org/3/tv/{content_id[1:]}/season/{season_number}/episode/{episode_number}/credits?api_key={_API_KEY}"
    req = requests.request("GET", url,data=None)
    result = req.json()
    names = [(actor['character'].split('/')[0], f"{actor['original_name']} {actor['character']}")
             for actor in result['cast'] if actor['known_for_department']=='Acting']

    return list(map(_get_valid_sliced_name_chunk, names))

