# Importing essential libraries and modules

from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import requests
import api
import pickle
from newsdataapi import NewsDataApiClient
from flask_cors import CORS, cross_origin

rainfall_data = pd.read_csv('rain.csv')

crop_recommendation_model_path = './Models/RandomForest.pkl'
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))

# crop_yield_model_path = './Models/Yield.pkl'
# crop_yield_model = pickle.load(open(crop_yield_model_path, 'rb'))
crops = np.load('crops.npy', allow_pickle=True)


def weather_fetch(city):
    city = "Mumbai"
    api_key = api.weather_api_key
    base_url = "http://api.openweathermap.org/geo/1.0/direct?q={city_name}&appid={API_key}&limit=1"
    complete_url = base_url.format(city_name=city, API_key=api_key)
    response = requests.get(complete_url)
    x = response.json()
    lat = x[0]["lat"]
    lon = x[0]["lon"]
    base_url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&"
    complete_url = base_url.format(lat=lat, lon=lon) + "appid=" + api_key
    response = requests.get(complete_url)
    x = response.json()
    y = x["main"]
    temperature = round((y["temp"] - 273.15), 2)
    humidity = y["humidity"]
    return temperature, humidity


app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return 'Hello World!'


@app.route('/news', methods=['GET'])
def getNews():
    nextPage = request.args.get("page")
    newsapi = NewsDataApiClient(apikey=api.newsdata_api_key)
    if nextPage == "1":
        response = newsapi.news_api(
            country="in", q="Agricultutre OR Farming OR Farmers", language="en,hi")
    else:
        response = newsapi.news_api(
            country="in", q="Agricultutre OR Farming OR Farmers", language="en,hi", page=nextPage)
    return response


@ app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    formdata = request.json
    N = formdata['nitrogen']
    P = formdata['phosphorous']
    K = formdata['pottasium']
    ph = formdata['ph']
    season = formdata['season']
    city = formdata['city']
    temperature, humidity = weather_fetch(city)
    rainfall = rainfall_data[rainfall_data["DIST"] == city][season].values[0]
    data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    my_prediction = crop_recommendation_model.predict(data)
    final_prediction = my_prediction[0]
    prediction = []
    for i in range(0, len(final_prediction)):
        if final_prediction[i] == 1:
            prediction.append(crops[i])
    if len(prediction) == 0:
        prediction = ['No crop']
    pred = {
        "prediction": prediction[0],
        "temperature": temperature,
        "humidity": humidity,
        "rainfall": rainfall
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
# @ app.route('/crop-yield-predict', methods=['POST'])
# def crop_yield_prediction():
#     formdata = request.json
#     crop = formdata['crop']
#     area = formdata['area']
#     season = formdata['season']
#     city = formdata['city']
#     temperature, humidity = weather_fetch(city)
#     rainfall = rainfall_data[rainfall_data["DIST"] == city][season].values[0]
#     data = np.array([[crop, area, season, city, temperature,  rainfall]])
#     my_prediction = crop_recommendation_model.predict(data)
#     prediction = my_prediction[0]
#     if len(prediction) == 0:
#         prediction = ['No crop']
#     pred = {
#         "prediction": prediction,
#         "temperature": temperature,
#         "humidity": humidity,
#         "rainfall": rainfall
#     }
#     if pred == '':
#         response = {"status": "error", "result": pred,
#                     "message": "No crop can be grown in this region"}
#     else:
#         response = {"status": "success", "result": pred,
#                     "message": "Crop recommendation fetched successfully"}
#     return {
#         "response": response
#     }
if __name__ == '__main__':
    app.run(debug=False)
