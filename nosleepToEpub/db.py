from sqlalchemy.dialects.postgresql import UUID
from soilter import db
import uuid


class EpubEntry(db.Model):

    __tablename__ = "epubentry"

    id = db.Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
        unique=True,
        nullable=False
    )

    # here will be stored the location of the epub
    filepath = db.Column(db.String(), nullable=True)
    filename = db.Column(db.String())
    has_been_downloaded = db.Column(db.Boolean(), default=False)

    def __init__(self, filename, filepath, has_been_downloaded):
        self.filename = filename
        self.filepath = filepath
        self.has_been_downloaded = has_been_downloaded

    def __repr__(self):
        return f"book: {filename} - {id}"
