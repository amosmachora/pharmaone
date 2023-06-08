import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Dashboardgrp.css";
import Assets from "../../Assets/Assets";
import { dataFlowContext } from "../../App";
import Select from "../Select/Select";

const Dashboardgrp = ({ data }) => {
  const {
    amountSold,
    setReportsOn,
    setActiveTab,
    setInventoryOn,
    setActiveChildTab,
  } = useContext(dataFlowContext);

  const handleTabChange = (tabToBeSet) => {
    if (tabToBeSet === "medslist") {
      setInventoryOn(true);
      setActiveChildTab("listofmedicine");
      setActiveTab("inventory-active");
    } else if (tabToBeSet === "groups") {
      setInventoryOn(true);
      setActiveChildTab("medicinegroups");
      setActiveTab("inventory-active");
    } else if (tabToBeSet === "inventory-active") {
      setActiveTab(tabToBeSet);
      setInventoryOn(true);
    } else if (tabToBeSet === "reports-active") {
      setReportsOn(true);
      setActiveTab(tabToBeSet);
    } else if (tabToBeSet === "sales-report") {
      setReportsOn(true);
      setActiveChildTab(tabToBeSet);
    } else if (tabToBeSet === "payment-report") {
      setReportsOn(true);
      setActiveChildTab(tabToBeSet);
    } else {
      setActiveTab(tabToBeSet);
    }
  };

  return (
    <div
      className="Dashboardgrp__container flex__container-v"
      style={{ border: `1px solid ${data.accentColor}` }}
    >
      <img src={data.icon} alt="Icon" />
      {data.rs === true ? <p>Ksh. {amountSold}</p> : <p>{data.status}</p>}
      {data.select === true ? (
        <div className="flex revenue">
          <p>{data.name}</p>
          <Select />
        </div>
      ) : (
        <p>{data.name}</p>
      )}

      <Link to={`/${data.linkTo}`}>
        <div
          className="Dashboardgrp__btm flex__container"
          style={{
            backgroundColor: data.bgColor,
            borderTop: `1px solid ${data.accentColor}`,
          }}
          onClick={() => {
            handleTabChange(data.activeTab);
          }}
        >
          {data.linkTo === "reports" ? <p>View Detailed Report</p> : null}
          {data.linkTo === "reports/salesreport" ? (
            <p>View Detailed Report</p>
          ) : null}
          {data.linkTo === "reports/paymentreport" ? (
            <p>View Detailed Report</p>
          ) : null}
          {data.linkTo === "inventory" ? <p>Visit Inventory</p> : null}
          {data.linkTo === "listofmeds" ? <p>Resolve Now</p> : null}
          {data.linkTo === "inventory/groups" ? <p>View Groups</p> : null}
          {data.linkTo === "inventory/listofmedicines" ? (
            <p>View Full List</p>
          ) : null}

          <img src={Assets.DirectionArrows} alt="Direction Arrows" />
        </div>
      </Link>
    </div>
  );
};

export default Dashboardgrp;
