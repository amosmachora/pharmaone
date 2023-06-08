import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Assets from "../../Assets/Assets";
import { dataFlowContext } from "../../App";
import Select from "../Select/Select";
import "./DashBoardLinks.css";

const DashBoardLinks = ({ data }) => {
  const { setActiveTab } = useContext(dataFlowContext);

  return (
    <div className="DashBoardLinks__container">
      <div className="Dashboard__links-top flex__container">
        <p>{data.groupTitle}</p>

        {data.select === true ? (
          <Select />
        ) : (
          <Link to={`/${data.linkTo}`} style={{ textDecoration: "none" }}>
            <div
              className="Dashboard__links-link flex__container"
              onClick={() => {
                setActiveTab(data.activeTab);
              }}
            >
              <p>Go to {data.linkTo}</p>
              <img src={Assets.DirectionArrows} alt="Direction Arrows" />
            </div>
          </Link>
        )}
      </div>
      <div className="splitterlinks" />
      <div className="Dashboard__links-bottom flex__container">
        <div className="links-bottomleft">
          <p>{data.value1}</p>
          <p>{data.text1}</p>
        </div>
        <div className="links-bottomright">
          <p>{data.value2}</p>
          <p>{data.text2}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLinks;
