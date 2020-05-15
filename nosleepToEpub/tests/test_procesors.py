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

    @pytest.mark.asyncio
    async def test__process_cover__cover_data_provided(self):
        cover_data = {"cover": {"cover_title": "a title"}}

        processor = LinkProcessor(data=cover_data, model_uuid="")
        cover = await processor._process_cover()

        assert cover["title"] == "a title"

    @pytest.mark.asyncio
    async def test__process_cover__processed_link_injected(self):
        common_link = "https://www.reddit.com/r/nosleep/comments/fz2na2/a_story/"
        data = {
            "data": [{"link": common_link, "linkType": {"type": "new_story"}}],
            "cover": {},
        }

        processor = LinkProcessor(data=data, model_uuid="")
        processor.stories_by_link = {common_link: {"title": "a story"}}

        cover = await processor._process_cover()
        assert cover["title"] == "a story"
