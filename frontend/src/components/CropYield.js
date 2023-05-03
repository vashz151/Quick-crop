import React from "react";
import "../css/cr.css";
import state_arr from "./state.json";
import crop_arr from "./crop.json";
import CropYieldResult from "./CropYieldResult";
import Url from "../api/Url";
import { BsInfoCircleFill } from "react-icons/bs";
import InfoModal from "./InfoModal";
function CropYield() {
  var season = ["Summer", "Kharif", "Autumn", "Rabi", "Winter", "Annual"];
  const [state, setState] = React.useState("Select State");
  const [show, setShow] = React.useState(false);
  const [prediction, setPrediction] = React.useState("");
  const [tempData, setTempData] = React.useState(null);
  const [humidData, setHumidData] = React.useState(null);
  const [rainData, setRainData] = React.useState(null);
  const [seasonData, setSeasonData] = React.useState(null);
  const [yearData, setYearData] = React.useState(null);
  const [showInfo, setShowInfo] = React.useState(false);
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const [info, setInfo] = React.useState({
    season: false,
    temperature: false,
    humidity: false,
    rainfall: false,
  });
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
    const baseUrl = Url;
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
        setShowInfo(true);
        console.log(data.response.result);
        setTempData(data.response.result.temp_yield);
        setHumidData(data.response.result.humid_yield);
        setRainData(data.response.result.rain_yield);
        setSeasonData(data.response.result.season_yield);
        setYearData(data.response.result.year_yield);
        setPrediction(data.response.result.prediction);
      });
  };
  const handleReset = (event) => {
    event.preventDefault();
    document.getElementById("formdata").reset();
    setState("Select State");

    setShow(false);
  };
  const handleInfo = (name) => {
    setInfo({
      ...info, // copy the existing state
      [name]: true, // update the property corresponding to the clicked button
    });
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
              <b>Area (in acre)</b>
            </label>
            <input
              type="number"
              className="form-control"
              min="0"
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
              <BsInfoCircleFill
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  handleInfo("season");
                }}
              />
              {showInfo && info["season"] && (
                <InfoModal
                  title="Season"
                  body={seasonData}
                  info={info}
                  setInfo={setInfo}
                  cryield={true}
                  graph={true}
                />
              )}
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
              <BsInfoCircleFill
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  handleInfo("temperature");
                }}
              />
              {showInfo && info["temperature"] && (
                <InfoModal
                  title="Temperature"
                  body={tempData}
                  info={info}
                  setInfo={setInfo}
                  cryield={true}
                  graph={true}
                />
              )}
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
              <BsInfoCircleFill
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  handleInfo("humidity");
                }}
              />
              {showInfo && info["humidity"] && (
                <InfoModal
                  title="Humidity"
                  body={humidData}
                  info={info}
                  setInfo={setInfo}
                  cryield={true}
                  graph={true}
                />
              )}
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
              <BsInfoCircleFill
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  handleInfo("rainfall");
                }}
              />
              {showInfo && info["rainfall"] && (
                <InfoModal
                  title="Rainfall"
                  body={rainData}
                  info={info}
                  setInfo={setInfo}
                  cryield={true}
                  graph={true}
                />
              )}
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
            show={show}
            setShow={setShow}
            prediction={prediction}
            area={formdata.area}
            crop={formdata.crop}
            yearData={yearData}
          />
        )}
      </div>
    </>
  );
}

export default CropYield;
