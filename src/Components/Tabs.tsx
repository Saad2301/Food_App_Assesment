import React from "react";

const Tabs = () => {
  const tabs = ["Home", "Explore", "Help", "Profile"];
  return (
    <div className="mt-[32px] w-[725px] m-auto border-t border-t-[#D0C5C580]  border-b-[#D0C5C580]  border-b py-3">
      <div className="flex justify-evenly text-[#84BD00] font-semibold text-[20px] leading-[24.38px] font-Montserrat">
        {tabs.map((tab) => (
          <span className="cursor-pointer ">{tab}</span>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
