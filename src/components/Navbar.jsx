import { useState } from "react";
import logo from "../assets/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = ({ handleOverflow }) => {
  const navItems = [
    "Home",
    "About",
    "Practice Areas",
    "Industry Experience",
    "Case Studies",
    "Contact us",
  ];

  // const isMobile = useMediaQuery("(max-width:640px)");
  const isMobile = useMediaQuery("(max-width:768px)");
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <div className="flex px-5 py-10 lg:px-0 lg:py-0 justify-between lg:justify-around items-center h-[37.42px] text-[14px] relative">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex gap-10">
        {!isMobile &&
          navItems.map((item, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "text-[#FF8A00] cursor-pointer"
                  : "hover:opacity-70 cursor-pointer"
              }
            >
              {item}
            </li>
          ))}
      </ul>
      {isMobile && !openMobileNav && (
        <button
          className="w-12"
          onClick={() => {
            setOpenMobileNav(true);
            handleOverflow(true);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 12H20M4 8H20M4 16H12"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      )}
      {isMobile && openMobileNav && (
        <div className="flex justify-center z-50 w-2/3 h-screen bg-black opacity-85 absolute top-0 right-0 text-center">
          <ul className="absolute top-10 text-[18px] flex flex-col gap-6">
            {navItems.map((item, index) => (
              <li key={index} className={index === 0 ? "text-[#FF8A00]" : ""}>
                {item}
              </li>
            ))}
          </ul>
          <button
            className="w-12 absolute right-0"
            onClick={() => {
              setOpenMobileNav(false);
              handleOverflow(false);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16 8L8 16M8.00001 8L16 16"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
