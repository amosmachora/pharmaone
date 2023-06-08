import React from "react";
import "./Options.css";

/*This Component will contain links to profile section and log out page 
using react router to render them components
*/

const Options = ({ data }) => {
  return (
    <div className={`Profile__on ${data.context}`}>
      <div className="section my-profile flex">
        <img src={data.sectionA.image} alt="Profile icon" />
        <p>{data.sectionA.text}</p>
      </div>
      <div className="profile-tab-splitter" />
      <div className="section Logout flex">
        <img src={data.sectionB.image} alt="Log Out" />
        <p>{data.sectionB.text}</p>
      </div>
      <div className="circle" />
    </div>
  );
};

export default Options;
