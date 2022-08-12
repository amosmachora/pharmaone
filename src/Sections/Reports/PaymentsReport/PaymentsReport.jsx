import React, { useContext, useEffect } from "react";
import { dataFlowContext } from "../../../App";
import "./PaymentsReport.css";

const PaymentsReport = () => {
  const { setSmallScreen } = useContext(dataFlowContext);
  useEffect(() => {
    setSmallScreen(false);
  }, []);
  return <div>PaymentsReport</div>;
};

export default PaymentsReport;
