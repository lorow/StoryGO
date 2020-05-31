import uuid

from sqlalchemy.dialects.postgresql import UUID

from soilter import db


class ActiveRecordMixin:
    """ Basic model implementing simple ADP-like save method and repr """

    def __repr__(self):
        return self.id

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class EpubEntry(db.Model, ActiveRecordMixin):

    __metaclass__ = db.Model
    __tablename__ = "epubentry"

    id = db.Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
        unique=True,
        nullable=False,
    )

    # here will be stored the location of the epub
    filepath = db.Column(db.String(), nullable=True)
    filename = db.Column(db.String())
    has_been_downloaded = db.Column(db.Boolean(), default=False)

    def __init__(self, filename, filepath="", has_been_downloaded=False):
        self.filename = filename
        self.filepath = filepath
        self.has_been_downloaded = has_been_downloaded

    def __repr__(self):
        return f"book: {self.filename} - {self.id}"
