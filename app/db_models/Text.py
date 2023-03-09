from app import db

class Texts(db.Model):
    __tablename__ = "texts"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255,))
    text = db.Column(db.String(255))
    discription = db.Column(db.String(255))
     
    def __init__(self, name , text, discription):
        self.name = name
        self.text = text
        self.discription = discription