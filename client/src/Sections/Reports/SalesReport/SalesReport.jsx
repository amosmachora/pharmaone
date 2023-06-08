import React, { useContext, useEffect, useState } from "react";
import "./SalesReport.css";
import { SectionName } from "../../../Components/Components";
import LineChart from "../Linechart/Linechart";
import { dataFlowContext } from "../../../App";
import { useUpdateLogger } from "../../../Utilities/UpdateLogger";
import { DownloadReport } from "../../Dashboard/Dashboard";

const SalesReport = () => {
  const title = {
    main: "Sales Report",
    sub: "Sales related report of the pharmacy.",
    complex: "level1",
    source: "Reports",
  };

  const { usersList, salesList, groupsList, setSmallScreen } =
    useContext(dataFlowContext);
  const [selectedUserName, setSelectedUserName] = useState("All Users");
  const [selectedGroup, setSelectedGroup] = useState("All Groups");

  useUpdateLogger(salesList);
  useEffect(() => {
    setSmallScreen(false);
  }, []);

  return (
    <div className="padding-around">
      <div className="sales-report__top flex space-between">
        <SectionName title={title} />
        <DownloadReport />
      </div>
      <div className="sales-report__mid flex space-between">
        <div className="date-range-picker">
          <p>Date Range</p>
          <span className="h-38">DATE RANGE PICKER!</span>
        </div>
        <div>
          <p>Medicine Group</p>
          <select
            id="select-sales-group"
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="border-color"
          >
            <option value="" defaultValue hidden>
              -Select Group-
            </option>
            <option value="All Groups">All Groups</option>
            {groupsList.map((group) => (
              <option value={group.groupName}>{group.groupName}</option>
            ))}
          </select>
        </div>
        <div>
          <p>User Name</p>
          <select
            id="select-username"
            onChange={(e) => setSelectedUserName(e.target.value)}
            className="border-color"
          >
            <option value="" defaultValue hidden>
              -Select User Name-
            </option>
            <option value="All Users">All Users</option>
            {usersList.map((user) => (
              <option value={user.userName}>{user.userName}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="sales-report__bottom flex space-between">
        <div className="sales-report__bottom-chart border-radius-4 border-color">
          <p>Sales Made(Last 10)</p>
          <div className="Configuration__container-splitter" />
          <LineChart
            selectedUserName={selectedUserName}
            selectedGroup={selectedGroup}
          />
        </div>
        <div className="sales-report__bottom-orders border-radius-4 border-color">
          <div className="Orders__title flex space-between">
            <p>Order Id</p>
            <p>Date & Time</p>
          </div>
          <div className="Configuration__container-splitter" />
          <div className="Orders__body">
            {salesList.map((sale) => (
              <div className="flex">
                <p>{sale.salesId}</p>
                <div className="flex">
                  <p>{sale.saleDate.substring(0, 10)}</p>
                  <p>{sale.saleDate.substring(12, 19)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
