import abc
from typing import Iterable


class AbstractParsingStrategy(metaclass=abc.ABCMeta):
    """
    An interface detailing how all the other
    parsing strategies should be implemented

    The strategy does two things, it fetches the data
    And it also parses it into the correct data format
    For ease of use, one can implement it such that the data returned
    is similar to this: 
    {
        "type": "story" | "chapter",
        "meta": None | {"chapter_id": int}
        "title": "",
        "content": "",
        "author": "",
        "original_link": ""
    }
    """

    def __init__(self, link_data: Iterable[dict], reddit_praw):
        self.link_data = link_data
        self.submission = None
        self.data = {}
        self.praw = reddit_praw

    @classmethod
    def __subclasshook__(cls, subclass):
        return (hasattr(subclass, "_get_content")
            and callable(subclass._get_content)
            and hasattr(subclass, "_process_data")
            and callable(subclass._process_data)
            or NotImplemented
        )

    async def parse_data(self) -> dict:
        "parses the data and returns is as a dict"
        await self._fetch_data()
        await self._process_data()
        return self.data

    async def _fetch_data(self) -> None:
        """ Sends a request to the link, and stores the retrieved content """
        self.submission = self.praw.submission(url=self.link_data["link"])
    
    async def _get_author(self):
        "Gathers all info about the author of the post: Redditor instance"
        if self.submission:
            return self.submission.author

    async def _get_title(self):
        if self.submission:
            return self.submission.title

    @abc.abstractclassmethod
    async def _get_content(self):
        "Gathers the actual story content"
        raise NotImplementedError

    @abc.abstractclassmethod
    async def _process_data(self):
        """ Does the actual processing of the data"""
        raise NotImplementedError

class NosleepParser(AbstractParsingStrategy):

    async def _get_content(self):
        pass