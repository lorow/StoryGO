import pytest

from ..processors.LinkProcessor import LinkProcessor


class TestLinkProcessor:
    @pytest.mark.asyncio
    async def test_determine_strategy(self):
        # we only care about the strategry determination
        # thus we can set the data and the uuid to none
        processor = LinkProcessor(data={}, model_uuid="")
        reddit_link = "http://reddit.com/r/nosleep/some_very_scary_story"
        determined_strategy = await processor._determine_strategy(reddit_link)

        # TODO replace it with the actual strategries when they are done
        assert determined_strategy == "nosleep_strategy"
