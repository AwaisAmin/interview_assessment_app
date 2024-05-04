// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { Cart, DownArrow, RightArrow } from "../assets/icons";
import { MenuItems } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="py-3 md:py-5 px-5 md:px-20 flex items-center font-medium justify-between relative">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="md:flex hidden items-center gap-8 font-open-sans text-16 ">
          {MenuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-1 text-[#212121] font-open-sans text-base font-semibold"
            >
              <Link to={item.href}>{item.text}</Link>
              {index === 0 && <DownArrow />}
              {index === 2 && <RightArrow />}
            </li>
          ))}
          <button className="py-2 px-[35px] bg-[#EBAD1E] rounded-[40px]">
            <span className="text-[#0F1337] font-montserrat text-14 font-semibold">
              Book Service
            </span>
          </button>
          <Cart />
        </ul>
        <div
          className="md:hidden index-[100px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menu} alt="" className="w-8" />
        </div>
        {/* Mobile */}
        {isOpen ? (
          <>
            <div className="fixed inset-x-0 top-24 bottom-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur"></div>
            <ul
              className={`md:hidden absolute font-open-sans text-sm h-full top-[70px] bottom-0 py-10 pl-4`}
            >
              {MenuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 py-5 text-[#212121] font-open-sans text-base font-semibold"
                >
                  <Link to={item.href}>{item.text}</Link>
                  {index === 0 && <DownArrow />}
                  {index === 2 && <RightArrow />}
                </li>
              ))}
              <button className="py-2 mt-3 mb-5 px-[35px] bg-[#EBAD1E] rounded-[40px]">
                <span className="text-[#0F1337] font-montserrat text-14 font-semibold">
                  Book Service
                </span>
              </button>
              <Cart />
            </ul>
          </>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
