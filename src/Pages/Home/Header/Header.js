import React from "react";
import { BiQuestionMark } from "react-icons/bi";
import { BsMegaphone, BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-blue-500 shadow-md">
      <div className="lg:container lg:mx-auto max-w-6xl mx-2">
        <nav className="flex justify-between items-center py-2 ">
          {/* left side */}
          <div>
            <h4 className="text-white font-semibold">To Do</h4>
          </div>
          {/* middle search */}
          <div className="lg:w-96 w-1/2">
            <div className="relative">
              <BsSearch className="absolute inset-y-2 inset-x-2 text-blue-500" />
              <input
                type="text"
                className="w-full rounded pl-7 py-1 bg-blue-300 hover:bg-white focus:bg-white cursor-pointer focus:border-none border-none"
              />
            </div>
          </div>

          {/* right side mini profile*/}
          <div className="flex items-center space-x-6 flex-wrap">
            <FiSettings className="header-icons" />
            <BiQuestionMark className="header-icons" />
            <BsMegaphone className="header-icons" />

            {/* mini profile */}
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/76396442?v=4"
                alt=""
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
