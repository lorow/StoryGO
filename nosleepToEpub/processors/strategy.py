import abc


class AbstractParsingInterface(metaclass=abc.ABCMeta):
    """
    An interface detailing how all the other
    parsing strategies should be implemented

    The strategy does two things, it fetches the data
    And it also parses it into the correct data format

    For ease of use, one can implement such that the data returned
    is similar to this
    {
        "type": "story" | "chapter",
        "meta": None | {"chapter_id": int}
        "title": "",
        "content": "",
        "author": "",
        "original_link": ""
    }
    as this format will be then used to stich the epub together
    """

    def __init__(self, link_data):
        self.link_data = link_data
        self.data = None

    @classmethod
    def __subclasshook__(cls, subclass):
        return (
            hasattr(subclass, "fetch_data")
            and callable(subclass.fetch_data)
            and hasattr(subclass, "parse_data")
            and callable(subclass.parse_data)
            and hasattr(subclass, "to_representation")
            and callable(subclass.to_representation)
            or NotImplemented
        )

    async def fetch_data(self) -> None:
        """ Sends a request to the link, and stores it """

    @abc.abstractmethod
    async def parse_data(self) -> None:
        """ does the actual parsing of the downloaded data """
        raise NotImplementedError

    async def to_representation(self) -> dict:
        """
        takes the data returned by the parsing method
        and turns it into desired form.
        """
