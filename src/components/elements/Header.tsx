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

  const handelMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative flex h-40 w-full flex-row sm:h-20 md:h-20 lg:h-40">
      <div className="flex h-full w-[10%] items-center justify-center sm:hidden md:hidden lg:flex">
        <Image src={logo} alt="" className="h-[80%] w-[80%]" />
      </div>
      <div className="h-full w-[90%] sm:w-screen md:w-screen lg:w-[90%]">
        <div className="h-[50%] w-full ">
          <div className="h-[50%] w-full bg-sky-600 sm:h-full md:h-full lg:h-[50%]"></div>
          <div className="h-[50%] w-full bg-gray-50 sm:hidden md:hidden lg:block"></div>
        </div>
        <div className="flex h-[50%] w-full items-center justify-evenly  sm:justify-between md:justify-between lg:items-center lg:justify-evenly">
          <div className="flex h-full w-[8%] items-center justify-center ">
            <img src="/logo.png" alt="" className="h-[80%] w-[70%]" />
          </div>
          <div className="flex h-full w-full  items-center justify-evenly sm:hidden sm:w-[90%] md:hidden md:w-[90%] lg:flex lg:w-full">
            {HeaderArr.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.name}
              </Link>
            ))}
            <button className="rounded-sm bg-sky-600 px-[1%] py-[0.5%] font-bold uppercase text-white">
              Login
            </button>
            <button className="rounded-sm bg-sky-600 px-[1%] py-[0.5%] font-bold uppercase text-white">
              Registration
            </button>
          </div>
          <div className="hidden p-[2%] " onClick={handelMenu}>
            <SlMenu />
          </div>
        </div>
      </div>
      <div
        className={`absolute z-[100] h-fit w-screen flex-col bg-white ${menu ? "flex" : "hidden"}  top-[106%]`}
      >
        {HeaderArr.map((item, index) => (
          // console.log(item.link)
          <Link
            key={index}
            className="flex h-10 w-screen items-center pl-[2%] hover:text-sky-600"
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
        <button className="flex h-10 w-screen items-center bg-sky-600 pl-[2%] text-start font-bold uppercase text-white">
          Login
        </button>
        <button className="flex h-10 w-screen items-center bg-sky-600 pl-[2%] text-start font-bold uppercase text-white">
          registration
        </button>
      </div>
    </div>
  );
};

export default Header;
