from ..db import EpubEntry


class TestModels:
    def test_saving_method(self):
        """
            Testing if the custom save() function
            saves the model as expected and does
            not raise any exceptions
        """
        entry = EpubEntry("testing")
        entry.save()

        saved = EpubEntry.query.get(entry.id)

        assert saved.filename == entry.filename

    def test_delete_method(self):
        """
            Testing if the delete() function
            deletes the previously saved model
            and does not raise any exceptions
        """
        entry = EpubEntry("testing")
        entry.save()

        saved = EpubEntry.query.get(entry.id)
        saved.delete()

        r = EpubEntry.query.get(entry.id)

        assert r is None
