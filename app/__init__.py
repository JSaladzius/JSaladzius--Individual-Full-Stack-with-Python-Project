import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_mail import Mail
from flask_bcrypt import Bcrypt
from flask_authorize import Authorize

base_dir = os.path.dirname(__file__)

app = Flask(__name__)
app.app_context().push()

basedir = os.path.abspath(os.path.dirname(__file__))

app.config.from_prefixed_env()
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.db')
# app.config['SECRET-KEY']
# app.config['SQLALCHEMY_DATABASE_URI']



db = SQLAlchemy(app)
db.create_all()
login_manager = LoginManager(app)
bcrypt = Bcrypt(app)
mail = Mail(app)
authorize = Authorize(app)

from app.db_models import  User, Text, Video , Name
from app import routes
