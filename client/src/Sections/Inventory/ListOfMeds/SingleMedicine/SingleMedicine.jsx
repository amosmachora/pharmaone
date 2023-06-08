import React from "react";
import { Link } from "react-router-dom";
import Assets from "../../../../Assets/Assets";
import "./SingleMedicine.css";
/***
 * This component is the horizontal data on the list of meds component
 * don't confuse
 */

const SingleMedicine = ({ data }) => {
  return (
    <div className="SingleMedicine__container flex__container-v">
      <div className="SingleMedicine__body flex__container">
        <p>{data.medicineName}</p>
        <p>{data.medicineId}</p>
        {data.medicineGroup === null ? (
          <p>Unset</p>
        ) : (
          <p>{data.medicineGroup.groupName}</p>
        )}

        <p>{data.inStock}</p>
        <Link to={data.medicineId} style={{ textDecoration: "none" }}>
          <div className="SingleMedicine__body-link flex__container">
            <p>View Full Detail</p>
            <img src={Assets.DirectionArrows} alt="Directions" />
          </div>
        </Link>
      </div>
      <div className="medicine-splitter" />
    </div>
  );
};

export default SingleMedicine;
