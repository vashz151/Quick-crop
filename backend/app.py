# Importing essential libraries and modules
from flask import Flask, request, jsonify
import numpy as np
from news import news_fetch
from flask_cors import CORS
from sendOtp import send_message
from croprecommend import crop_recommendation
from fertilizer import fertilizer_prediction
from cropyield import crop_yield


app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return 'Hello World!'


@app.route('/news', methods=['GET'])
def getNews():
    return news_fetch(request.args.get("page"))


@app.route('/send-message', methods=['POST'])
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


if __name__ == '__main__':
    app.run(debug=True)
