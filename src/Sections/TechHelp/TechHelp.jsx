import React, { useEffect, useContext } from "react";
import "./TechHelp.css";
import { dataFlowContext } from "../../App";

const TechHelp = () => {
  const { setActiveTab, setSmallScreen } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("technical-active");
    setSmallScreen(false);
  }, []);
  return <div>TechHelp</div>;
};

export default TechHelp;
