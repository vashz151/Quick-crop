import React from "react";
import loading from "../images/loading.gif";

const Loading = (props) => {
  return (
    <div className="text-center">
      if (props.load==="tre")
      {
        <img
          src={loading}
          alt="loading"
          style={{ width: "100px", margin: "auto", display: "block" }}
        />
      }
    </div>
  );
};

export default Loading;
