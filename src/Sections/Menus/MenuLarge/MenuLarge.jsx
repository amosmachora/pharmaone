import React, { useState } from "react";
import "./MenuLarge.css";
import Assets from "../../../Assets/Assets";
import Options from "../../../Components/Options/Options";
import RightTab from "../../../Components/RightTab/RightTab";

const MenuLarge = ({ setMenuLarge }) => {
  const [profileTab, setProfileTab] = useState(false);

  const ProfileData = {
    context: "profile",
    sectionA: {
      image: Assets.Profile,
      text: "My Profile",
    },
    sectionB: {
      image: Assets.Logout,
      text: "Logout",
    },
  };

  return (
    <aside className="Pharmacy__sidebar">
      <div className="Logo__container flex">
        <img src={Assets.Logo} alt="Logo" />
        <p className="logo__name">Pharma One</p>
      </div>
      <div className="Pharmacy__sidebar-body">
        <div className="User__details flex">
          <div className="User__details-right flex">
            <div className="User__details-img">
              <img src={Assets.Photo} alt="Profile Picture" />
              <img src={Assets.OnlineIcon} alt="Online /Offline" />
            </div>
            <div className="User__details-names">
              <p>Subash</p>
              <p>Super Admin</p>
            </div>
          </div>
          <div
            className="User__details-icons"
            onClick={() => setProfileTab((prevState) => !prevState)}
          >
            <img src={Assets.ThreeDots} alt="Dots Icon" />
            {profileTab && <Options data={ProfileData} />}
          </div>
        </div>
        <RightTab />
        <div className="Pharmacy__powered flex space-between">
          <p>Powered by Saludos © 2022 </p>
          <p>v1.12</p>
        </div>
        <img
          src={Assets.ToggleMenu}
          alt="Toggle Menu"
          className="toggle-button cursor"
          onClick={() => setMenuLarge(false)}
        />
      </div>
    </aside>
  );
};

export default MenuLarge;

export const ProfilePicture = () => {
  return (
    <div className="User__details-img">
      <img src={Assets.Photo} alt="Profile Picture" />
      <img src={Assets.OnlineIcon} alt="Online /Offline" />
    </div>
  );
};
