import React, { useEffect, useContext } from "react";
import "./Covid.css";
import { dataFlowContext } from "../../App";

const Covid = () => {
  const { setActiveTab, setSmallScreen } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("covid-active");
    setSmallScreen(false);
  }, []);

  return <div>Covid</div>;
};

export default Covid;
