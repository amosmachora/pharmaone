import React from "react";
import Assets from "../../Assets/Assets";
import Date from "../Date/Date";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="Pharmacy__topbar flex">
      <div className="Topbar__input flex">
        {/* TODO Make this search work */}
        <input
          type="search"
          name="Search"
          id="Search"
          placeholder="Search for anything here..."
        />
        <img src={Assets.Search} alt="Search Icon" />
      </div>

      <div className="Topbar__change-lang flex ">
        <img src={Assets.Lang} alt="Language Translate Icon" />
        <select name="ChangeLang" className="ChangeLang">
          <optgroup className="optgroup ">
            <option value="English" className="Option">
              English (US)
            </option>
            <option value="French" className="Option">
              French
            </option>
          </optgroup>
        </select>
      </div>
      <div className="Topbar__date">
        <Date />
      </div>
    </div>
  );
};

export default NavBar;
