import React, { useEffect, useContext } from "react";
import "./Settings.css";
import { dataFlowContext } from "../../App";

const Settings = () => {
  const { setActiveTab } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("settings-active");
  }, []);

  return <div>Settings</div>;
};

export default Settings;
