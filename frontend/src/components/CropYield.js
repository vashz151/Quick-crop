import React from "react";
import "../css/cr.css";
import state_arr from "./state.json";
import crop_arr from "./crop.json";
import CropYieldResult from "./CropYieldResult";
function CropYield() {
  var season = ["Summer", "Kharif", "Autumn", "Rabi", "Winter", "Annual"];
  const [state, setState] = React.useState("Select State");
  const [show, setShow] = React.useState(false);
  const [prediction, setPrediction] = React.useState("");
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const [formdata, setFormdata] = React.useState({
    crop: "",
    area: "",
    season: "",
    city: "",
  });
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormdata((prevValue) => {
      return {
        ...prevValue,
        [name]: value.trim(),
      };
    });
  };
  const handlePredict = (event) => {
    event.preventDefault();
    const baseUrl = "https://quickcrop.onrender.com";
    const data = formdata;
    fetch(baseUrl + "/crop-yield-predict", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("temp").value =
          data.response.result.temperature + " °C";
        document.getElementById("hum").value =
          data.response.result.humidity + " %";
        document.getElementById("rain").value =
          data.response.result.rainfall + " mm";
        setShow(true);
        setPrediction(data.response.result.prediction);
      });
  };
  const handleReset = (event) => {
    event.preventDefault();
    document.getElementById("formdata").reset();
    setState("Select State");
    setShow(false);
  };

  return (
    <>
      <div className="cr">
        <form id="formdata">
          <div className="form-group">
            <label htmlFor="crop">
              <b>Crop</b>
            </label>
            <select
              id="crop"
              className="form-control"
              name="crop"
              required
              onChange={handleFormChange}
            >
              <option value="">Select Crop</option>
              {crop_arr["crops"].map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="area">
              <b>Area (in kg)</b>
            </label>
            <input
              type="number"
              className="form-control"
              id="area"
              name="area"
              placeholder="Enter the value"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="season">
              <b>Crop Season</b>
            </label>
            <select
              id="season"
              className="form-control"
              name="season"
              required
              onChange={handleFormChange}
            >
              <option value="-1">Select Season</option>
              {season.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="State">
              <b>State</b>
            </label>
            <select
              id="sts"
              name="stt"
              className="form-control"
              onChange={handleChange}
              required
            >
              {Object.keys(state_arr).map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <label htmlFor="city">
              <b>City</b>
            </label>
            <select
              id="city"
              className="form-control"
              name="city"
              required
              onChange={handleFormChange}
            >
              <option value="">Select City</option>
              {state_arr[state].map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="temp">
              <b>Temperature (in °C)</b>
            </label>
            <input
              className="form-control"
              id="temp"
              name="temp"
              placeholder="Temperature"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="hum">
              <b>Humidity (in %)</b>
            </label>
            <input
              className="form-control"
              id="hum"
              name="hum"
              placeholder="Humidity"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="rain">
              <b>Rainfall (in mm)</b>
            </label>
            <input
              className="form-control"
              id="rain"
              name="rain"
              placeholder="Rainfall"
              disabled
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-info crbtn"
              onClick={handlePredict}
            >
              Predict
            </button>
            <button
              type="reset"
              className="btn btn-danger crbtn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
        {show && (
          <CropYieldResult
            prediction={prediction}
            area={formdata.area}
            crop={formdata.crop}
          />
        )}
      </div>
    </>
  );
}

export default CropYield;
