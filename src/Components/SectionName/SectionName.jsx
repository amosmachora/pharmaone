import React from "react";
import "./SectionName.css";
import Assets from "../../Assets/Assets";
import { Link } from "react-router-dom";

/* This component takes in an object as a prop that contains the name and subtitle and any other relevant data*/

const SectionName = ({ title }) => {
  if (title.complex === "level1") {
    return (
      <div className="section-name">
        <div className="level1__top flex__container">
          <Link
            to={`/${title.source.toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <p className="title-source cursor">{title.source}</p>
          </Link>
          <img
            className=""
            src={Assets.LeftDirectionArrow}
            alt="Points to the left"
          />
          {title.main === "Sales Report" ? (
            <p className="title-main cursor">{title.main}</p>
          ) : (
            <p className="title-main cursor">
              {title.main} ({title.meds})
            </p>
          )}
        </div>
        <p className="sub">{title.sub}</p>
      </div>
    );
  } else if (title.complex === "level2") {
    return (
      <div className="section-name">
        <div className="level2__top flex__container">
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <p className="title-source">{title.source1}</p>
          </Link>
          <img src={Assets.LeftDirectionArrow} alt="Points to the left" />
          <Link
            to={`/inventory/${title.source2.toLowerCase().split(" ").join("")}`}
            style={{ textDecoration: "none" }}
          >
            <p className="title-source">{title.source2}</p>
          </Link>
          <img src={Assets.LeftDirectionArrow} alt="Points to the left" />
          <p className="title-main">{title.main}</p>
        </div>
        <p className="sub">{title.sub}</p>
      </div>
    );
  } else {
    return (
      <div className="section-name">
        <p className="title-main">{title.main}</p>
        <p className="sub">{title.sub}</p>
      </div>
    );
  }
};

export default SectionName;
