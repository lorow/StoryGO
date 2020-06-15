import abc
from typing import Iterable
from bs4 import BeautifulSoup as bs
import aiohttp


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

    def __init__(self, link_data: Iterable[dict]):
        self.link_data = link_data
        self.response_data = None
        self.data = {}

    @classmethod
    def __subclasshook__(cls, subclass):
        return (
            hasattr(subclass, "_fetch_data")
            and callable(subclass._fetch_data)
            and hasattr(subclass, "_get_author")
            and callable(subclass._get_author)
            and hasattr(subclass, "_get_content")
            and callable(subclass._get_content)
            and hasattr(subclass, "parse_data")
            and callable(subclass.parse_data)
            or NotImplemented
        )

    async def parse_data(self) -> dict:
        "parses the data and returns is as a dict"
        await self._fetch_data()
        
        return self.data

    async def _fetch_data(self) -> None:
        """ Sends a request to the link, and stores the retrieved html """
        async with aiohttp.ClientSession as cs:
            async with cs.get(self.link_data["link"]) as resp:
                self.response_data = bs(resp.text(), "html5lib")
    
    @abc.abstractclassmethod
    async def _get_author(self):
        "Gathers all info about the author of the post"
        raise NotImplementedError

    @abc.abstractclassmethod
    async def _get_content(self):
        "Gathers the actual story content"
        raise NotImplementedError

class NosleepParser(AbstractParsingStrategy):
    
    async def _get_author(self):
        pass

    async def _get_content(self):
        pass

class WritingPromptsParser(AbstractParsingStrategy):
    pass
