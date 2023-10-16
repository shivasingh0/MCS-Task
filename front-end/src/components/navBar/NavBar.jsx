import React from "react";
import DropDown from "./DropDown";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const NavigateHome = () => {
    navigate('/')
  }

  return (
    <div className="flex relative justify-around my-10">
      <div className="flex ">
        <img
          className="w-25 cursor-pointer h-19"
          src={Logo}
          alt="logo.png"
          onClick={NavigateHome}
        />
        <DropDown className=" text-2xl" />
      </div>
      <div className="">
        <span className="mx-5 inline-flex items-center bg-blue-50 border-2 rounded-xl border-blue-700 px-4 py-2 text-2xl font-medium text-blue-700 ring-1 ring-inset">
          Login
        </span>
        <span className="inline-flex items-cente bg-blue-800 px-5 py-2.5 text-2xl rounded-xl font-medium text-white ring-1 ring-inset ring-blue-700/10">
          Register
        </span>
      </div>
    </div>
  );
}

export default NavBar;
