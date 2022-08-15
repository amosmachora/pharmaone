import React, { useContext, useState } from "react";
import { dataFlowContext } from "../../App";
import Assets from "../../Assets/Assets";
import Date from "../Date/Date";
import RightTab from "../RightTab/RightTab";
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions";
import "./NavBar.css";

const NavBar = ({ smallScreen, setSmallScreen }) => {
  const [suggestions, setSuggestions] = useState(false);
  const { medicineList, groupsList } = useContext(dataFlowContext);

  const searchMedicines = medicineList.map((medicine) => {
    return {
      title: medicine.medicineName,
      link: `/inventory/listofmedicines/${medicine.medicineId}`,
      in: "medicines",
    };
  });

  const searchGroups = groupsList.map((group) => {
    return {
      title: group.groupName,
      link: `inventory/groups/${group.groupName}`,
      in: "groups",
    };
  });

  const searchItems = [
    {
      title: "Dashboard",
      link: "dashboard",
      in: "sections",
    },
    {
      title: "Inventory",
      link: "inventory",
      in: "sections",
    },
    {
      title: "Reports",
      link: "reports",
      in: "sections",
    },
    {
      title: "Configuration",
      link: "configuration",
      in: "sections",
    },
    {
      title: "Contact Management",
      link: "contactmanagement",
      in: "sections",
    },
    {
      title: "Notification",
      link: "notifications",
      in: "sections",
    },
    {
      title: "Chat",
      link: "chatwithothers",
      in: "sections",
    },
    {
      title: "Application Settings",
      link: "applicationSettings",
      in: "sections",
    },
    {
      title: "Covid-19",
      link: "covid-19",
      in: "sections",
    },
    {
      title: "Get technical help",
      link: "getTechnicalHelp",
      in: "sections",
    },
    {
      title: "List Of Medicines",
      link: "inventory/listofmedicines",
      in: "sections",
    },
    {
      title: "Medicine Groups",
      link: "inventory/medicineGroups",
      in: "sections",
    },
    {
      title: "Sales Report",
      link: "reports/salesreport",
      in: "sections",
    },
    {
      title: "Payments Report",
      link: "reports/paymentreport",
      in: "sections",
    },
  ]
    .concat(searchMedicines)
    .concat(searchGroups);

  const [searchItemsArray, setSearchItemsArray] = useState(searchItems);

  const onChange = (e) => {
    const filtered = searchItems.filter((searchItem) =>
      searchItem.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchItemsArray(filtered);
  };

  return (
    <>
      <div className="Pharmacy__topbar flex">
        <img
          src={Assets.Hamburger}
          alt="Hamburger Icon"
          className="hamburger"
          onClick={() => setSmallScreen((prevState) => !prevState)}
        />
        <div className="Topbar__input flex">
          {/* TODO Make this search work */}
          <input
            type="search"
            name="Search"
            id="Search"
            placeholder="Search for anything here..."
            onFocus={() => setSuggestions(true)}
            onChange={(e) => onChange(e)}
          />
          <img src={Assets.Search} alt="Search Icon" />
          {suggestions && (
            <div
              className="search-suggestions"
              onBlur={() => setSuggestions(false)}
            >
              <img
                src={Assets.CloseBlue}
                alt="Close"
                className="close-suggestions cursor"
                onClick={() => setSuggestions(false)}
              />
              {searchItemsArray.map((searchItem) => (
                <SearchSuggestions
                  element={searchItem}
                  key={searchItem.title}
                />
              ))}
            </div>
          )}
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
      {smallScreen && (
        <div className="small-screen-menu">
          <RightTab />
        </div>
      )}
    </>
  );
};

export default NavBar;
