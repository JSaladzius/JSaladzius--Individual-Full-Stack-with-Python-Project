from app import db

class Videos(db.Model):
    __tablename__ = "videos"
   
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255,))
    
    def __init__(self, name ):
        self.name = name
        