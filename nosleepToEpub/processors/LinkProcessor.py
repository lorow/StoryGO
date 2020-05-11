import asyncio
import re

from .strategy import AbstractParsingInterface


class LinkProcessor:
    def __init__(self, data: dict, model_uuid):
        self.data = data
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
        pass

    async def _process_links(self):
        """ Takes care of the processing of the links """
        return self.data

    async def _determine_strategy(self, link: str) -> AbstractParsingInterface:
        """
        Depending on the link provided
        chooses the parsing strategy to use
        """

        # matches anything that's /r/anything up to /
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
