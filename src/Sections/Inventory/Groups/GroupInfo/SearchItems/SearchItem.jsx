import React, { useState } from "react";
import Assets from "../../../../../Assets/Assets";
import "./SearchItem.css";

const SearchItem = ({ medicine, medicinesToBeChanged }) => {
  const [image, setImage] = useState(Assets.PlusTwo);
  const [imageClass, setImageClass] = useState("");

  const addMedicineToChangeList = () => {
    medicinesToBeChanged.push(medicine);
    setImage(Assets.TickBox);
    setImageClass("plus-icon-tick-box");
  };

  return (
    <div className="flex search-item space-between">
      <p>{medicine.medicineName}</p>
      <img
        src={image}
        alt="Plus"
        className={`cursor ${imageClass}`}
        onClick={addMedicineToChangeList}
      />
    </div>
  );
};

export default SearchItem;
