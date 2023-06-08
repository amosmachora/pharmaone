import React from "react";
import "./SearchBar.css";
import Assets from "../../Assets/Assets";

const SearchBar = ({ data }) => {
  return (
    <div
      className="Searchbar flex__container"
      id="SearchMedicineInventoryContainer"
    >
      <input
        type="search"
        name={data.name}
        id={data.name}
        placeholder={data.placeholder}
        className="p__poppins"
      />
      <img src={Assets.Search} alt="Search Icon" />
    </div>
  );
};

export default SearchBar;
