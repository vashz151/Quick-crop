# Importing essential libraries and modules
import blogs
from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import numpy as np
from news import news_fetch
from flask_cors import CORS
from sendOtp import send_message
from croprecommend import crop_recommendation
from fertilizer import fertilizer_prediction
from cropyield import crop_yield
from flask_sqlalchemy import SQLAlchemy
from mail import send_email
from reg import obfuscate_email
load_dotenv()
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = 'subscribers'
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), primary_key=True,
                      unique=True, nullable=False)
    mobile = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Email %r>' % self.email


class Blogs(db.Model):
    __tablename__ = 'blogs'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(300), nullable=False)
    image_1 = db.Column(db.String(200), nullable=False)
    image_2 = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(50), nullable=False)
    read_time = db.Column(db.String(10), nullable=False)
    date = db.Column(db.String(20), nullable=False)
    content = db.Column(db.Text, nullable=False)
    link = db.Column(db.String(50), unique=True, nullable=False)

    def __repr__(self):
        return f"Article('{self.title}', '{self.author}', '{self.date}')"


@app.route('/')
def home():

    return 'Hello World!'


@ app.route('/news', methods=['GET'])
def getNews():
    return news_fetch(request.args.get("page"))


@ app.route('/send-message', methods=['POST'])
def send_otp():
    formdata = request.json
    mobile = formdata['mobile']
    return send_message(mobile)


@ app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    formdata = request.json
    prediction, temperature, humidity, rainfall, chart_data = crop_recommendation(
        formdata)
    pred = {
        "prediction": prediction,
        "temperature": temperature,
        "humidity": humidity,
        "rainfall": rainfall,
        "chart_data": chart_data,
    }
    if pred == 'No crop':
        response = {"status": "error", "result": pred,
                    "message": "No crop can be grown in this region"}
    else:
        response = {"status": "success", "result": pred,
                    "message": "Crop recommendation fetched successfully"}
    return {
        "response": response
    }


@ app.route('/crop-yield-predict', methods=['POST'])
def crop_yield_prediction():
    formdata = request.json
    prediction, temperature, humidity, rainfall = crop_yield(
        formdata)
    pred = {
        "prediction": prediction,
        "temperature": temperature,
        "humidity": humidity,
        "rainfall": rainfall
    }
    if pred == '':
        response = {"status": "error", "result": pred,
                    "message": "No crop can be grown in this region"}
    else:
        response = {"status": "success", "result": pred,
                    "message": "Crop Yield fetched successfully"}
    return {
        "response": response
    }


@ app.route('/fertilizer-predict', methods=['POST'])
def fert_prediction():
    formdata = request.json
    my_prediction, temperature, humidity, rainfall = fertilizer_prediction(
        formdata)
    pred = {
        "prediction": my_prediction,
        "temperature": temperature,
        "humidity": humidity,
        "rainfall": rainfall,
    }
    response = {"status": "success", "result": pred,
                "message": "Fertilizer recommendation fetched successfully"}
    return {
        "response": response
    }


@app.route('/send-newsletter', methods=['GET'])
def send_newsletter():
    subject = 'Newsletter'
    with open('templates/newsletter.html', 'r') as f:
        template = f.read()
    subscribers = db.session.query(User).all()
    return send_email(subject, template, subscribers)


@ app.route('/subscribe', methods=['POST'])
def subscribe():
    formdata = request.json
    name = formdata['name']
    email = formdata['email']
    mobile = formdata['mobile']
    user = User(name, email, mobile)
    if db.session.query(User).filter(User.email == email).count() == 1:
        return 'You are already subscribed to our mailing list!'
    elif db.session.query(User).filter(User.mobile == mobile).count() == 1:
        user = db.session.query(User).filter(User.mobile == mobile).first()
        email = user.email
        return 'This mobile number is already subscribed to our mailing list with email: ' + obfuscate_email(email) + '!'
    else:
        db.session.add(user)
        db.session.commit()
        subject = 'Thanks for subscribing {{{name}}}'
        with open('templates/subscribe.html', 'r') as f:
            template = f.read()
        subscribers = db.session.query(User).filter(User.email == email)
        message = send_email(subject, template, subscribers)
        if message[1] == 200:
            return 'You have been successfully subscribed to our mailing list!'
        else:
            db.session.delete(user)
            db.session.commit()
            return 'Something went wrong! Please try again later.'


@app.route('/unsubscribe', methods=['GET'])
def unsubscribe():
    email = request.args.get("email")
    user = db.session.query(User).filter(User.email == email).first()
    db.session.delete(user)
    db.session.commit()
    return 'You have been successfully unsubscribed from our mailing list. Thank you!'


@app.route('/add-blog', methods=['POST'])
def addBlog():
    formdata = request.json
    title = formdata['title']
    description = formdata['description']
    image_1 = formdata['image_1']
    image_2 = formdata['image_2']
    author = formdata['author']
    read_time = formdata['read_time']
    date = formdata['date']
    content = formdata['content']
    link = formdata['link']
    blog = Blogs(title, description, image_1, image_2,
                 author, read_time, date, content, link)
    db.session.add(blog)
    db.session.commit()
    return {
        "response": {
            "status": "success",
            "result": blog.__dict__,
            "message": "Blog added successfully"
        }
    }


@app.route('/blogs', methods=['GET'])
def getBlogs():
    blogs = db.session.query(Blogs).all()
    blogs = [blog.__dict__ for blog in blogs]
    for blog in blogs:
        blog.pop('_sa_instance_state')

    return {
        "response": {
            "status": "success",
            "result": blogs,
            "message": "Blogs fetched successfully"
        }
    }


if __name__ == '__main__':
    app.run()
