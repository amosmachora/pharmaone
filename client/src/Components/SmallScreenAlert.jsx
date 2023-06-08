import React from 'react';
import { Assets } from '../Assets/Assets';

export const SmallScreenAlert = () => {
  return (
    <div className="sm:hidden px-7 relative z-50 text-white pt-20 text-center flex flex-col">
      Looks Like you are on small screen 😞 unfortunately this app is only
      available for desktop.
      <img src={Assets.Logo} alt="Logo" className="object-cover mx-auto my-4" />
    </div>
  );
};
