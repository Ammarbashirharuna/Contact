from config import db

class Contact(db.model):
    id = db.column(db.Integer, primary_key=True)
    first_name = db.coloumn(db.stringg(80), unique=False, nullable=False)
    last_name = db.coloumn(db.stringg(80), unique=False, nullable=False)
    emai = db.coloumn(db.stringg(120), unique=True, nullable=False)
    
    def to_json(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email
        }