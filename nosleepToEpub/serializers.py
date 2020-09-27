from typing import List, Optional, Literal
from pydantic import BaseModel


class ApiLinkInterface(BaseModel):
    link: str
    type: Literal["story", "chapter"]
    chapter_id: int

class ApiEpubInterface(BaseModel):
    links: List[ApiLinkInterface]
    title: str
    cover: Optional[str]