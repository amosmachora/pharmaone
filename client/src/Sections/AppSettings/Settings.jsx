import React, { useEffect, useContext } from "react";
import "./Settings.css";
import { dataFlowContext } from "../../App";

const Settings = () => {
  const { setActiveTab, setSmallScreen } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("settings-active");
    setSmallScreen(false);
  }, []);

  return <div>Settings</div>;
};

export default Settings;
