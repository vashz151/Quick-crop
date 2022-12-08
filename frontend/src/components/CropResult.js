import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function CropResult() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      className="container py-2 mx-auto my-50 h-10 "
      style={{ margin: "12rem" }}
    >
      <div className="row">
        <div className="col-sm py-2 py-md-3">
          <div className="card card-body" style={{ justifyContent: "center" }}>
            <h1 className="text-center" style={{ color: "black" }}>
              {location.state === "No crop" ? (
                <p>
                  <b>
                    <i>{location.state} </i>can be grown in your farm.
                  </b>
                  <br />
                  Try our Fertilizer Recommendation System to increase nutrient
                  values.
                  <br />
                  <button onClick={() => navigate("/fertilizer-recommend")}>
                    Fertilizer Recommendation
                  </button>
                </p>
              ) : (
                <p>
                  <b>
                    You should grow <i>{location.state} </i>in your farm
                  </b>
                  <br />
                  Want to know about the yield of the crop?
                  <br />
                  <button onClick={() => navigate("/crop-yield")}>
                    Crop Yield
                  </button>
                  <button onClick={() => navigate("/")}>Home Page</button>
                </p>
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropResult;
