import React, { useEffect, useContext } from "react";
import "./Covid.css";
import { dataFlowContext } from "../../App";

const Covid = () => {
  const { setActiveTab } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("covid-active");
  }, []);

  return <div>Covid</div>;
};

export default Covid;
