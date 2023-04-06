import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/cr.css";
import CropMoreInfo from "./CropMoreInfo";
import BarGraph from "./BarGraph";
function CropResult(props) {
  const navigate = useNavigate();
  const [moreInfo, setMoreInfo] = React.useState(false);
  const handleMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };
  const toTitleCase = (str) =>
    str.replace(
      /(^\w|\s\w)(\S*)/g,
      (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
    );
  const prediction = toTitleCase(props.prediction[0]);

  return (
    <div className="crdiv">
      <div className="flex-container">
        <div className="flex-items">
          <BarGraph labels={props.chartData} />
        </div>
        <div className="flex-items">
          <img
            className="img"
            src={require(`../images/crops/${props.prediction[0]}.png`)}
            alt={`${prediction}`}
          />
        </div>
      </div>

      <h1 className="text-center" style={{ color: "white" }}>
        {prediction === "No crop" ? (
          <div className="para">
            <b>
              <i style={{ color: "red" }}>{prediction} </i>can be grown in your
              farm!
            </b>
            <p className="para">
              Try our Fertilizer Recommendation System to increase nutrient
              values!
            </p>
            <br />
            <button
              className="crbtn"
              onClick={() => navigate("/fertilizer-recommend")}
            >
              Fertilizer
            </button>
          </div>
        ) : (
          <p className="para">
            <br />
            <i>
              Your farm has potential to grow{" "}
              <i style={{ color: "orange" }}>{prediction} </i>in your farm!
              <br />
              Other option is{" "}
              <i style={{ color: "orange" }}>{props.prediction[1]} </i>
            </i>
            <br />
            Want to know about the yield of the crop?
            <br />
            <button className="crbtn" onClick={() => navigate("/crop-yield")}>
              Crop Yield
            </button>
            <button className="crbtn" onClick={handleMoreInfo}>
              More Info
            </button>
            {moreInfo && (
              <CropMoreInfo setMoreInfo={setMoreInfo} crop={prediction} />
            )}
          </p>
        )}
      </h1>
    </div>
  );
}

export default CropResult;
