import React, { useEffect, useContext } from "react";
import "./Notifications.css";
import { dataFlowContext } from "../../App";

const Notifications = () => {
  const { setActiveTab } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("notification-active");
  }, []);
  return <div>Notifications</div>;
};

export default Notifications;
