import React, { useEffect, useContext } from "react";
import "./ContactManagement.css";
import { dataFlowContext } from "../../App";

const ContactManagement = () => {
  const { setSmallScreen, setActiveTab } = useContext(dataFlowContext);
  useEffect(() => {
    setSmallScreen(false);
    setActiveTab("contact-management-active");
  }, []);

  return <div>ContactManagement</div>;
};

export default ContactManagement;
