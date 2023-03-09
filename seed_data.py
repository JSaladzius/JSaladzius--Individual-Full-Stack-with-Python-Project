from app import db
from app.db_models.User import User
from app.db_models.Text import Texts
from app.db_models.Video import Videos
from app.db_models.Name import Names

db.create_all()

text1 = Texts('Someday' ,'','Visuals for live band performance, from personal archyve')
text2 = Texts('All that', '' , 'Visuals for music video , from personal archyve')
text3 = Texts('Nothing really', '' , 'Visuals for music video , from personal archyve')
db.session.add_all([text1,text2,text3])
db.session.commit()

video1 = Videos('M1.mp4')
video2 = Videos('M2.mp4')
video3 = Videos('El Matrix2-1_VP9.webm')
video4 = Videos('Clock4-1_VP9.webm')
video5 = Videos('clock3.mp4')
video6 = Videos('clock_VP9.webm')
video7 = Videos('clock5.webm')
video8 = Videos('darkangel1.mp4')
video9 = Videos('Whitedevil.mp4')
video10 = Videos('AngDev.mp4')
db.session.add_all([video1,video2,video3,video4,video5,video6,video7,video8,video9,video10])
db.session.commit()

name1 = Names('Personal', "What's going on", 'page')
db.session.add_all([name1])
db.session.commit()


