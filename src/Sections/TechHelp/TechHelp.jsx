import React, { useEffect, useContext } from "react";
import "./TechHelp.css";
import { dataFlowContext } from "../../App";

const TechHelp = () => {
  const { setActiveTab } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("technical-active");
  }, []);
  return <div>TechHelp</div>;
};

export default TechHelp;
