import React, { useContext, useEffect } from "react";
import "./Reports.css";
import { SectionName } from "../../Components/Components";
import { Dashboardgrp } from "../../Components/Components";
import { dataFlowContext } from "../../App";

const Reports = () => {
  const { dataGroup3, setActiveTab, setSmallScreen } =
    useContext(dataFlowContext);
  const title = {
    main: "Reports",
    sub: "Overall reports related to the pharmacy",
  };

  useEffect(() => {
    setActiveTab("reports-active");
    setSmallScreen(false);
  }, []);

  return (
    <div className="padding-around Salesreport__container">
      <SectionName title={title} />
      <div className="flex__container">
        {dataGroup3.map((data) => (
          <Dashboardgrp data={data} key={data.name} />
        ))}
      </div>
    </div>
  );
};

export default Reports;
