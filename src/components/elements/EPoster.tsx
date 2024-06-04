import React from "react";
import b from "../../../images/Beach-House.jpeg";
import eposter from "../../../images/eposter-heading.png";
import Image from "next/image";

const SubmitPoster: React.FunctionComponent = () => {
  return (
    <div className="flex w-full flex-col bg-white py-6">
      {/* <h2 className="mb-2 text-center text-2xl font-semibold text-blue-700">
        Submit E-Poster
      </h2>
      <div className="mb-4 flex h-1 w-20 self-center rounded-full bg-[#DA2128]"></div> */}
      <Image src={eposter} alt="Submit E-Poster" className="self-center" />
      <div className="mb-6 flex flex-col">
        <div className="relative flex flex-row">
          <div className="flex w-full justify-evenly">
            {" "}
            <Image
              src={b}
              alt="Placeholder"
              className="relative z-0 m-[2%] h-40 w-[45%] object-cover"
            />
            <Image
              src={b}
              alt="Placeholder"
              className="relative z-0 m-[2%] h-40 w-[45%] object-cover"
            />
          </div>
          <div className="z-1 absolute flex h-[39px] w-full justify-center self-center justify-self-center">
            <div className="flex h-full w-[90%] items-center justify-center bg-[#ffffffb2] text-[16px]/[19.2px] font-medium">
              Place Holder
            </div>
          </div>
        </div>
        <div className="relative flex flex-row">
          <div className="flex w-full justify-evenly">
            {" "}
            <Image
              src={b}
              alt="Placeholder"
              className="relative z-0 m-[2%] h-40 w-[45%] object-cover"
            />
            <Image
              src={b}
              alt="Placeholder"
              className="relative z-0 m-[2%] h-40 w-[45%] object-cover"
            />
          </div>
          <div className="z-1 absolute flex h-[39px] w-full justify-center self-center justify-self-center">
            <div className="flex h-full w-[90%] items-center justify-center bg-[#ffffffb2] text-[16px]/[19.2px] font-medium">
              Place Holder
            </div>
          </div>
        </div>
      </div>
      <button className="w-60 self-center rounded-md bg-[#5F0404] py-2 font-semibold text-white hover:bg-blue-700">
        Upload Poster
      </button>
    </div>
  );
};

export default SubmitPoster;
