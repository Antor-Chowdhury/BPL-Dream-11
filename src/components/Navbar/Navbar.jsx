import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/DoubleDollar.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-11/12 mx-auto">
      <div className="flex-1">
        <a className=" text-xl">
          <img className="w-[70px] h-[70px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <span>{availableBalance}</span>
        <span className="mx-1">Coin</span>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
