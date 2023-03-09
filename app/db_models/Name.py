from app import db

class Names(db.Model):
    __tablename__ = "names"
    id = db.Column(db.Integer, primary_key=True)
    purpose = db.Column(db.String(255,))
    name = db.Column(db.String(255))
    what = db.Column(db.String(255))
     
    def __init__(self, purpose , name, what):
        self.purpose = purpose
        self.name = name
        self.what = what