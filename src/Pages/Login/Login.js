import React from "react";
import { FcGoogle } from "react-icons/fc";
import Header from "./../Home/Header/Header";

const Login = () => {
  return (
    <>
      <Header></Header>
      <section className="bg-gray-100">
        <div className="flex justify-center items-center w-full h-screen">
          <div className="bg-white shadow flex justify-start pt-4 items-center flex-col md:w-96 w-full lg:w-96  lg:h-72 md:h-72 h-72 rounded">
            <h1 className="text-2xl my-4">Login</h1>
            <div className="flex border p-4 rounded-full justify-center space-x-4 items-center my-4 cursor-pointer hover:scale-110 transform transition-all">
              <FcGoogle className="text-3xl" />
              <p className="text-lg">Connect with Google</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
