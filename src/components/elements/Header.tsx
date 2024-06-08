import Link from "next/link";
import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import logo from "../../../images/logo.png";
import Image from "next/image";
interface HeaderProps {
  onAboutUsClick: () => void;
}
const Header: React.FunctionComponent<HeaderProps> = ({ onAboutUsClick }) => {
  const [menu, setMenu] = useState(false);
  const HeaderArr = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Our Members", link: "/" },
    { name: "Organization", link: "/" },
    { name: "Membership", link: "/" },
    { name: "News & Events", link: "/" },
    { name: "Gallery", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  // const handelMenu = () => {
  //   setMenu(!menu);
  // };

  return (
    <header className="absolute z-10 flex h-20 w-full items-center justify-center bg-[#FFFF]">
      <div className="m-[1%] flex w-full justify-between">
        <Image src={logo} alt="CSI West Bengal" className="h-16 w-16" />
        <span className="self-center font-sans text-xl font-bold text-[#6B2323]">
          CSI West Bengal
        </span>

        <div className="flex items-center">
          <button
            className="text-gray-600  focus:outline-none"
            onClick={() => setMenu(!menu)}
          >
            <SlMenu />
          </button>
        </div>
        {menu && (
          <nav className="absolute left-0 top-20 z-10 w-full bg-white">
            <ul className="flex flex-col">
              {HeaderArr.map((item, index) => (
                <li key={index} className="h-16">
                  <button
                    key={index}
                    onClick={onAboutUsClick}
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-700 hover:text-white"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
