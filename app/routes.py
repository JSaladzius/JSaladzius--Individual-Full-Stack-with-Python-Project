from app import app, db, login_manager, bcrypt
from flask_login import current_user ,login_required,login_user,logout_user
from flask import flash, redirect, render_template, request, url_for, session
from app.forms import LoginForm , RegistrationForm 


from app.db_models.User import User
from app.db_models.Text import Texts
from app.db_models.Video import Videos
from app.db_models.Name import Names


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.route("/", methods=['GET','POST'])
def home():
    form=LoginForm()
    names = Names.query.all() 
    return render_template("login.html", title="LOG iN", form=form, names=names)

    
@app.route("/login" , methods=['GET','POST'])
def log_in():
    names = Names.query.all() 
    if current_user.is_authenticated:
        return redirect(url_for('inside'))
    form=LoginForm()
    if request.method == 'POST' and form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user)
            return redirect(url_for('inside'))
        else:
            flash('No luck. Check email or secret word', 'warning')
    return render_template("login.html", title="LOG iN", form=form, names=names)


@app.route("/logout", methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('log_in'))


@app.route("/register" , methods=['GET', 'POST'])
def register():
    names = Names.query.all() 
    db.create_all
    if current_user.is_authenticated:
        return redirect(url_for('inside'))
    form = RegistrationForm()
    if request.method == 'POST' and form.validate_on_submit():
        encrypted_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(name = form.name.data, email = form.email.data, password = encrypted_password)
        db.session.add(user)
        db.session.commit()
        flash('Now Joined!', 'success')
        return redirect(url_for('log_in'))
    return render_template('register.html', form=form, names=names)


@app.route("/main_inside", methods=['GET','POST'])
@login_required
def inside():
    names = Names.query.all() 
    videos = Videos.query.all()
    texts = Texts.query.all()

    return render_template("main_inside.html", videos=videos , texts=texts , names=names)
       