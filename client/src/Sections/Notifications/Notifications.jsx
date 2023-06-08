import React, { useEffect, useContext } from "react";
import "./Notifications.css";
import { dataFlowContext } from "../../App";

const Notifications = () => {
  const { setActiveTab, setSmallScreen } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("notification-active");
    setSmallScreen(false);
  }, []);
  return <div>Notifications</div>;
};

export default Notifications;
