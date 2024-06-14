import Link from "next/link";
import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import logo from "../../../images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
interface HeaderProps {
  onAboutUsClick: () => void;
  onScientificProgramClick: () => void;
  onOurMembersClick: () => void;
  onSubmitEposterClick: () => void;
  onUpdatesClick: () => void;
  onContactUsClick: () => void;
}
const Header: React.FunctionComponent<HeaderProps> = ({
  onAboutUsClick,
  onScientificProgramClick,
  onOurMembersClick,
  onSubmitEposterClick,
  onUpdatesClick,
  onContactUsClick,
}) => {
  const [menu, setMenu] = useState(false);
  const [previouslySelected, setPreviouslySelected] = useState("");
  const HeaderArr = [
    { name: "Home", onClick: onAboutUsClick },
    { name: "About Us", onClick: onAboutUsClick },
    { name: "Scientific Program", onClick: onScientificProgramClick },
    { name: "Our Members", onClick: onOurMembersClick },
    { name: "Submit E-Poster", onClick: onSubmitEposterClick },
    { name: "Updates", onClick: onUpdatesClick },
    { name: "Contact Us", onClick: onContactUsClick },
  ];
  const router = useRouter();
  // const handelMenu = () => {
  //   setMenu(!menu);
  // };

  return (
    <header className="absolute z-10 flex h-20 w-full items-center justify-center bg-[#FFFF]">
      <div className="m-[1%] flex w-full justify-between">
        <Image src={logo} alt="CSI West Bengal" className="h-16 w-16" />
        <span className="font-sansita self-center  text-xl font-bold text-[#6B2323] md:mr-5">
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
          <nav
            className="absolute left-0 top-20 z-10 w-full bg-white font-lato"
            onMouseEnter={() => {
              setPreviouslySelected("");
            }}
          >
            <ul className="flex flex-col">
              {HeaderArr.map((item, index) => (
                <li
                  key={index}
                  className={`flex h-16 w-full border-b border-[#868DA0] text-gray-600 hover:bg-[#FFB701] hover:text-[#560303] ${item.name === previouslySelected ? "bg-[#6b2323] text-white" : ""} cursor-pointer`}
                  onClick={() => {
                    setMenu(false);
                    setPreviouslySelected(item.name);
                    item.onClick();
                  }}
                >
                  <button key={index} className="block px-4 py-2  ">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col">
              <li
                className="flex h-16 w-full cursor-pointer border-b border-[#868DA0] text-gray-600 hover:bg-[#FFB701] hover:text-[#560303]"
                onClick={async () => {
                  await router.push("admin-panel");
                }}
                onMouseEnter={() => {
                  setPreviouslySelected("");
                }}
              >
                <button className="block px-4 py-2 ">Login</button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
