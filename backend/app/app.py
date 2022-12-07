# Importing essential libraries and modules

from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import requests
import config
import pickle

crop_recommendation_model_path = 'RandomForest.pkl'
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))

crops = np.load('columns.npy', allow_pickle=True)


def weather_fetch(city):
    api_key = config.weather_api_key
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


@ app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    formdata = request.json
    N = formdata['nitrogen']
    P = formdata['phosphorous']
    K = formdata['pottasium']
    ph = formdata['ph']
    rainfall = formdata['rainfall']
    city = formdata['city']
    temperature, humidity = weather_fetch(city)
    data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    my_prediction = crop_recommendation_model.predict(data)
    final_prediction = my_prediction[0]
    prediction = []
    for i in range(0, len(final_prediction)):
        if final_prediction[i] == 1:
            prediction.append(crops[i])
    pred = str(prediction[0])
    response = {"status": "success", "prediction": pred,
                       "message": "Crop recommendation fetched successfully"}
    return {
        "response": response
    }


if __name__ == '__main__':
    app.run(debug=False)
