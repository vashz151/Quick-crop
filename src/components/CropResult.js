import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/cr.css";
import axios from "axios";
function CropResult(props) {
  const navigate = useNavigate();
  const [results, setResults] = React.useState([]);
  //fetch the data from unsplash api using axios
  React.useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: props.prediction },
        headers: {
          Authorization: `Client-ID ${props.apikey}`,
        },
      })
      .then((response) => {
        setResults(response.data.results);
      });
  }, [props.prediction, props.apikey]);

  return (
    <div className="crdiv">
      {results
        .filter((item, index) => index === 2)
        .map((item, index) => {
          return (
            <img key={index} id="img" src={item.urls.regular} alt="crop" />
          );
        })}
      <h1 className="text-center" style={{ color: "white" }}>
        {props.prediction === "No crop" ? (
          <div className="para">
            <b>
              <i style={{ color: "red" }}>{props.prediction} </i>can be grown in
              your farm!.
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
              You should grow{" "}
              <i style={{ color: "orange" }}>{props.prediction} </i>in your
              farm!
            </i>
            <br />
            Want to know about the yield of the crop?
            <br />
            <button className="crbtn" onClick={() => navigate("/crop-yield")}>
              Crop Yield
            </button>
            <button className="crbtn" onClick={() => navigate("/")}>
              Home Page
            </button>
          </p>
        )}
      </h1>
    </div>
  );
}

export default CropResult;
