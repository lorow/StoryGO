import abc
from typing import Iterable

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
            and hasattr(subclass, "_parse_data")
            and callable(subclass._parse_data)
            and hasattr(subclass, "parse_data")
            and callable(subclass.parse_data)
            or NotImplemented
        )

    async def parse_data(self) -> dict:
        "parses the data and returns is as a dict"
        await self._fetch_data()
        await self._parse_data()
        return self.data

    async def _fetch_data(self) -> None:
        """ Sends a request to the link, and stores the retrieved html """
        async with aiohttp.ClientSession as cs:
            async with cs.get(self.link_data["link"]) as resp:
                self.response_data = resp.text()

    @abc.abstractclassmethod
    async def _parse_data(self) -> None:
        """ does the actual parsing of the downloaded data """
        raise NotImplementedError


class NosleepParser(AbstractParsingStrategy):
    async def _parse_data(self):
        pass


class WritingPromptsParser(AbstractParsingStrategy):
    async def _parse_data(self):
        pass
