import asyncio
import re

from .strategy import AbstractParsingStrategy


class LinkProcessor:
    def __init__(self, data: dict, model_uuid):
        self.data = data
        self.stories_by_link = {}
        self.model_uuid = model_uuid

    def start(self):
        """
        takes care of starting the asyncio loop
        and orchestrating the work
        """
        # let's create the async loop and run the actual start method
        loop = asyncio.get_event_loop()
        loop.run_until_complete(self._start())

    async def _start(self):
        await self._process_links()
        # await self._process_cover()
        # await self._stich_the_book()
        # TODO add pubsub last message here
        # so that the processing has finished

    async def _process_links(self):
        """ Takes care of the processing of the links """
        for link in self.data["data"]:
            print(link)

    async def _process_cover(self) -> dict:
        """
        Takes care of processing the cover of the book

        Return a dictionary containing both title and cover image.
        In case the title wasn't provided, it takes it from the very first
        processed link and sets it as such

        And for the cover image, it's either the image or nothing
        """

        if "cover_title" in self.data["cover"]:
            title = self.data["cover"]["cover_title"]
        else:
            title = self.stories_by_link[self.data["data"][0]["link"]]["title"]

        return {
            "title": title,
            "cover_base64": self.data["cover"].get("cover_image", None),
        }

    async def _determine_strategy(self, link: str) -> AbstractParsingStrategy:
        """
        Depending on the link provided
        chooses the parsing strategy to use
        """

        # matches anything that's /r/anything_up_to/
        subreddit_regex = r"\/r\/.+\/"
        strategies = {
            "/r/nosleep/": "nosleep_strategy",
            "/r/WritingPrompts/": "writing_prompts strategy",
        }

        return strategies.get(
            re.search(subreddit_regex, link).group(0), "HERE will be a default strategy"
        )

    async def _stich_the_book(self):
        pass
