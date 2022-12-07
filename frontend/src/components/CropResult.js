import React from "react";
import { useLocation } from "react-router-dom";

function CropResult() {
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
              <b>
                You should grow <i>{location.state} </i>in your farm
              </b>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropResult;
