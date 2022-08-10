import React, { useEffect, useContext } from "react";
import "./ContactManagement.css";
import { dataFlowContext } from "../../App";

const ContactManagement = () => {
  const { setActiveTab } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("contact-management-active");
  });
  return <div>ContactManagement</div>;
};

export default ContactManagement;
