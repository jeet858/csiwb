import Link from "next/link";
import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import logo from "../../../images/logo.png";
import Image from "next/image";

const Header: React.FunctionComponent = () => {
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
    <header className="flex w-screen h-20 items-center justify-center bg-[#FFFF]">
      <div className="w-full flex justify-between m-[1%]">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="CSI West Bengal" className="w-10 h-10" />
        <span className="text-xl font-bold text-blue-700">CSI West Bengal</span>
      </div>
      <div className="flex items-center">
        <button 
          className="text-gray-600 hover:text-blue-700 focus:outline-none" 
          onClick={() => setMenu(!menu)}
        >
          <SlMenu/>
        </button>
      </div>
      {menu && (
        <nav className="absolute w-full z-10 top-[8%] bg-white">
          <ul className="flex flex-col">
            {HeaderArr.map((item,index) => (
              <li key={index} className="h-16">
                <Link 
                  href={item.link} 
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-700 hover:text-white"
                >
                  {item.name}
                </Link>
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
