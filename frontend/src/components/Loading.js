import React from "react";
import loading from "../images/loading.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <img
        src={loading}
        alt="loading"
        style={{ opacity: "0.6", backgroundColor: "white", height: "15rem", margin:"0 auto" }}
      />
    </div>
  );
};

export default Loading;
