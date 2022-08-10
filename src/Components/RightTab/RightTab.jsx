import React, { useContext } from "react";
import "./RightTab.css";
import Assets from "../../Assets/Assets";
import { Link } from "react-router-dom";
import { dataFlowContext } from "../../App";

const RightTab = () => {
  const {
    activeTab,
    activeChildTab,
    inventoryOn,
    setInventoryOn,
    setActiveChildTab,
    setReportsOn,
    reportsOn,
  } = useContext(dataFlowContext);
  return (
    <>
      <Link to="dashboard" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex dashboard ${activeTab}`}
          onClick={() => {
            setInventoryOn(false);
            setReportsOn(false);
          }}
        >
          <img
            src={Assets.Dashboard}
            alt="Dashboard icon"
            className="tab-icon"
          />
          <p className="tab-name">Dashboard</p>
        </div>
      </Link>
      <Link to="inventory" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex inventory ${activeTab} ${activeChildTab}`}
          onClick={() => {
            setInventoryOn((prevState) => !prevState);
            setActiveChildTab("none");
            setReportsOn(false);
          }}
        >
          <img
            src={Assets.Inventory}
            alt="Inventory icon"
            className="tab-icon"
          />
          <p className="tab-name">Inventory</p>
          <img
            src={Assets.Arrow}
            alt="Arrow"
            className={`drop-down-icon inventory-arrow ${inventoryOn}`}
          />
        </div>
      </Link>
      {inventoryOn === true ? (
        <>
          <Link
            to="/inventory/listofmedicines"
            style={{ textDecoration: "none" }}
          >
            <div
              className={`tab child-tab list-of-meds ${activeChildTab}`}
              onClick={() => {
                setActiveChildTab("listofmedicine");
              }}
            >
              <p className="tab-name">List Of Medicines</p>
            </div>
          </Link>
          <Link
            to="/inventory/medicineGroups"
            style={{ textDecoration: "none" }}
          >
            <div
              className={`tab child-tab medicine-groups ${activeChildTab}`}
              onClick={() => {
                setActiveChildTab("medicinegroups");
              }}
            >
              <p className="tab-name">Medicine Groups</p>
            </div>
          </Link>
        </>
      ) : null}
      <Link to="reports" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex reports ${activeTab} ${activeChildTab}`}
          onClick={() => {
            setReportsOn((prevState) => !prevState);
            setActiveChildTab("none");
            setInventoryOn(false);
          }}
        >
          <img src={Assets.Reports} alt="Reports icon" className="tab-icon" />
          <p className="tab-name">Reports</p>
          <img
            src={Assets.Arrow}
            alt="Arrow"
            className={`drop-down-icon reports-arrow ${reportsOn}`}
          />
        </div>
      </Link>
      {reportsOn === true ? (
        <>
          <Link to="/reports/salesreport" style={{ textDecoration: "none" }}>
            <div
              className={`tab child-tab sales-reports ${activeChildTab}`}
              onClick={() => {
                setActiveChildTab("sales-report");
              }}
            >
              <p className="tab-name">Sales Report</p>
            </div>
          </Link>
          <Link to="/reports/paymentreport" style={{ textDecoration: "none" }}>
            <div
              className={`tab child-tab payment-reports ${activeChildTab}`}
              onClick={() => {
                setActiveChildTab("payment-report");
              }}
            >
              <p className="tab-name">Payments Report</p>
            </div>
          </Link>
        </>
      ) : null}
      <Link to="configuration" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex configuration ${activeTab}`}
          onClick={() => {
            setInventoryOn(false);
            setReportsOn(false);
          }}
        >
          <img
            src={Assets.Configuration}
            alt="Configuration icon"
            className="tab-icon"
          />
          <p className="tab-name">Configuration</p>
          <div className="tab-splitter" />
        </div>
      </Link>
      <Link to="contactmanagement" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex contact-management ${activeTab}`}
          onClick={() => {
            setInventoryOn(false);
            setReportsOn(false);
          }}
        >
          <img
            src={Assets.ContactIco}
            alt="Contact Management icon"
            className="tab-icon"
          />
          <p className="tab-name">Contact Management</p>
          <img src={Assets.Arrow} alt="Arrow" className="drop-down-icon" />
        </div>
      </Link>
      <Link to="notifications" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex notification ${activeTab}`}
          onClick={() => {
            setInventoryOn(false);
            setReportsOn(false);
          }}
        >
          <img src={Assets.Bell} alt="Notification icon" className="tab-icon" />
          <p className="tab-name">Notification</p>
          <p className="notification-counter">01</p>
        </div>
      </Link>
      <Link to="chatwithothers" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex chat ${activeTab}`}
          onClick={() => {
            setInventoryOn(false);
            setReportsOn(false);
          }}
        >
          <img src={Assets.ChatIco} alt="Chat icon" className="tab-icon" />
          <p className="tab-name">Chat With Others</p>
          <div className="tab-splitter" />
        </div>
      </Link>
      <Link to="applicationSettings" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex settings ${activeTab}`}
          onClick={() => {
            setInventoryOn(false);
            setReportsOn(false);
          }}
        >
          <img
            src={Assets.SettingsIco}
            alt="Settings icon"
            className="tab-icon"
          />
          <p className="tab-name">Application Settings</p>
        </div>
      </Link>
      <Link to="covid-19" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex covid ${activeTab}`}
          onClick={() => {
            setInventoryOn(false);
            setReportsOn(false);
          }}
        >
          <img src={Assets.CovidIco} alt="Covid-19 icon" className="tab-icon" />
          <p className="tab-name">Covid-19</p>
        </div>
      </Link>
      <Link to="getTechnicalHelp" style={{ textDecoration: "none" }}>
        <div
          className={`tab flex technical ${activeTab}`}
          onClick={() => {
            setInventoryOn(false);
            setReportsOn(false);
          }}
        >
          <img
            src={Assets.QuestionIco}
            alt="Get Technical Help icon"
            className="tab-icon"
          />
          <p className="tab-name">Get Technical Help</p>
        </div>
      </Link>
    </>
  );
};

export default RightTab;
