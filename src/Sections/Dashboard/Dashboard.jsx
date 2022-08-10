import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import {
  SectionName,
  Dashboardgrp,
  DashBoardLinks,
  Options,
} from "../../Components/Components";

import { dataFlowContext } from "../../App";
import Assets from "../../Assets/Assets";

const Dashboard = () => {
  const title = {
    main: "Dashboard",
    sub: "A quick data overview of the inventory",
  };

  const { dataGroup, dataGroup2, setActiveTab } = useContext(dataFlowContext);

  useEffect(() => {
    setActiveTab("dashboard-active");
  }, []);

  return (
    <div className="Dashboard__container">
      <div className="Dashboard__top ">
        <div className="Dashboard__top-name flex">
          <SectionName title={title} />
          <DownloadReport />
        </div>
        <div className="Dashboard__top-boxes flex">
          {dataGroup.slice(0, 4).map((data) => (
            <Dashboardgrp data={data} key={data.name} />
          ))}
        </div>
      </div>
      <div className="Dashboard__bottom flex">
        {dataGroup2.map((data) => {
          return <DashBoardLinks data={data} key={data.groupTitle} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;

export function DownloadReport() {
  const ProfileData = {
    context: "dashboard",
    sectionA: {
      image: Assets.Excel,
      text: "Excel",
    },
    sectionB: {
      image: Assets.AdobeReader,
      text: "PDF",
    },
  };

  const [downloadOptions, setDownloadOptions] = useState(false);

  return (
    <div
      className="download-report flex space-around cursor"
      onClick={() => setDownloadOptions((prevState) => !prevState)}
    >
      <p>Download Report</p>
      <img src={Assets.ArrowBlack} alt="Arrow" />
      {downloadOptions && <Options data={ProfileData} />}
    </div>
  );
}
