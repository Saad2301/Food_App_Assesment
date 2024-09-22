import React from "react";
import RegistrationIcon from "../assests/icons/profile.svg";
import logout from "../assests/icons/logout.svg";

const Header = () => {
  const listItems = ["Community", "Books", "Recipe Index", "Popular"];
  return (
    <div>
      <nav className="bg-black text-white font-bold leading-[12.19px] flex items-center mt-[-1px] h-[37px]">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6 text-sm">
            {listItems.map((item) => (
              <li className='className="hover:text-green-400 cursor-pointer"'>
                {item}
              </li>
            ))}
          </ul>

          <ul className="flex space-x-6 text-sm">
            <li className="hover:text-green-400 cursor-pointer flex items-center">
              <img
                src={logout}
                alt="Register"
                className=" w-[13px] h-[20px]  mr-2"
              />
              Register
            </li>
            <li className="hover:text-green-400 cursor-pointer flex items-center">
              <img
                src={RegistrationIcon}
                alt="Register"
                className=" w-[13px] h-[20px]  mr-2"
              />
              Login
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
