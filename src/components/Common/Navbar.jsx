import { Link, useNavigate } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";
import Hamburger from "../../assets/Hamburger.svg";
import Close from "../../assets/Close.svg";
import { useState } from "react";

const NavigationOptions = [
  {
    buttonName: "Storage Houses",
    buttonUrl: "/storage-house",
  },
  {
    buttonName: "Crops",
    buttonUrl: "/crops",
  },
  {
    buttonName: "About Us",
    buttonUrl: "/about-us",
  },
  {
    buttonName: "Contact",
    buttonUrl: "/contact-us",
  },
];

export default function Navbar() {
  return (
    <div className="bg-yellow-200/30 px-[5%] py-0.5 flex justify-between items-center">
      <div>
        <Link to="/">
          <div className="relative overflow-hidden w-32 h-20 ">
            <img
              src={LOGO}
              alt="Fasal Sathi"
              className="absolute inset-0 w-full h-full transition-transform transform-gpu hover:scale-110 "
            />
          </div>
        </Link>
      </div>
      <div className="flex gap-2 sm:hidden">
        {NavigationOptions.map((nav, idx) => (
          <NavigationButton
            key={idx}
            buttonName={nav.buttonName}
            buttonUrl={nav.buttonUrl}
          />
        ))}
        <button className="px-3 py-2 font-semibold hover:shadow-md rounded-md hover:outline-2 bg-sky-200/70 text-gray-900 hover:bg-sky-200/90 transition">
          Login
        </button>
      </div>
    </div>
  );
}

function NavigationButton({ buttonName, buttonUrl }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(buttonUrl);
  }
  return (
    <button
      onClick={handleClick}
      className="px-2 py-2 font-semibold hover:shadow-md rounded-md hover:outline-2 transition hover:bg-gray-300/20"
    >
      {buttonName}
    </button>
  );
}
