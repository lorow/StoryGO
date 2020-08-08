from sqlalchemy.dialects.postgresql import UUID
from pydantic import BaseModel


class EpubEntry(BaseModel):

    __tablename__ = "epubentry"

    id: UUID
    filepath: str
    filename: str
    has_been_downloaded: bool

    def __init__(self, filename, filepath="", has_been_downloaded=False):
        super().__init__(self, {}, {})
        self.filename = filename
        self.filepath = filepath
        self.has_been_downloaded = has_been_downloaded

    def __repr__(self):
        return f"book: {self.filename} - {self.id}"
