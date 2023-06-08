import React from "react";
import "./ErrorPage.css";
import Assets from "../../Assets/Assets";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={Assets.FourOFour} alt="Error" />
    </div>
  );
};

export default ErrorPage;
