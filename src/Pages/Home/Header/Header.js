import React from "react";
import { BiQuestionMark } from "react-icons/bi";
import { BsMegaphone, BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFirebase from "./../../Hooks/useFirebase";
import { selectUser } from "./../../userSlice/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const { logout } = useFirebase();
  console.log(user);
  const handelLogout = () => {
    logout();
  };
  return (
    <header className="bg-blue-500 shadow-md">
      <div className="lg:container lg:mx-auto max-w-6xl mx-2">
        <nav className="flex justify-between items-center py-2 ">
          {/* left side */}
          <div>
            <Link to="/home">
              <h4 className="text-white font-semibold">To Do</h4>
            </Link>
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

            {user?.user.displayName ? (
              <>
                <div>
                  <img
                    src={user?.user?.photoURL}
                    alt=""
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                </div>
                <div>
                  <button
                    onClick={handelLogout}
                    className="py-2 px-4 bg-blue-300 text-gray-800 text-sm font-semibold hover:bg-blue-400 rounded"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="py-2 px-4 bg-blue-300 text-gray-800 text-sm font-semibold hover:bg-blue-400 rounded">
                  Login
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
