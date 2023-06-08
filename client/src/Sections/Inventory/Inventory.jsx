import React, { useContext, useEffect } from "react";
import { SectionName, Dashboardgrp } from "../../Components/Components";
import "./Inventory.css";
import { dataFlowContext } from "../../App";
import { useUpdateLogger } from "../../Utilities/UpdateLogger";

const Inventory = () => {
  const { dataGroup, setActiveTab, setSmallScreen } =
    useContext(dataFlowContext);
  useUpdateLogger(dataGroup);

  const title = {
    main: "Inventory",
    sub: "List of medicines available for sales.",
  };

  useEffect(() => {
    setActiveTab("inventory-active");
    setSmallScreen(false);
  }, []);

  return (
    <div className="Inventory__container padding-around">
      <SectionName title={title} />
      <div className="Inventory__body flex__container">
        {dataGroup.slice(3, 6).map((data) => (
          <Dashboardgrp data={data} key={data.name} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
