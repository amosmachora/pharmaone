import React, { useEffect, useContext } from "react";
import "./Configuration.css";
import { SectionName } from "../../Components/Components";
import Assets from "../../Assets/Assets";
import { dataFlowContext } from "../../App";

const Configuration = () => {
  const { setActiveTab } = useContext(dataFlowContext);

  const title = {
    main: "Configurations",
    sub: "Configure your pharmacy application.",
  };

  useEffect(() => {
    setActiveTab("configuration-active");
  }, []);
  return (
    <div className="padding-around">
      <SectionName title={title} />
      <div className="Configuration__mid flex__container">
        <div className="Configuration__branding Configuration__container ">
          <div className="Configuration__container-top flex__container">
            <p>Branding</p>
            <img src={Assets.PenBlue} alt="Edit" />
          </div>
          <div className="Configuration__container-splitter" />
          <div className="Configuration__container-bottom flex__container">
            <div className="Container__bottom-left">
              <input
                type="text"
                placeholder="Enter Name"
                className="configuration-inputs"
              />
              <p>Pharmacy Name</p>
            </div>
            <div className="Container__bottom-right">
              <p>PH349TY228</p>
              <p>Pharmacy ID</p>
            </div>
          </div>
        </div>
        <div className="Configuration__Owner Configuration__container ">
          <div className="Configuration__container-top flex__container">
            <p>Owner</p>
            <img src={Assets.PenBlue} alt="Edit" />
          </div>
          <div className="Configuration__container-splitter" />
          <div className="Configuration__container-bottom flex__container">
            <div className="Container__bottom-left">
              <input
                type="text"
                placeholder="Enter Name"
                className="configuration-inputs"
              />
              <p>Owner Name</p>
            </div>
            <div className="Container__bottom-right">
              <p>user@mail.com</p>
              <p>Email ID</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
