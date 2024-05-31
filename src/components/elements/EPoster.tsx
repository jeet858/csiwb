import React from "react";
import b from "../../../images/Beach-House.jpeg";
import Image from "next/image";

const SubmitPoster: React.FunctionComponent = () => {
  return (
    <div className="w-screen bg-white p-6">
      <h2 className="mb-2 text-center text-2xl font-semibold text-blue-700">
        Submit E-Poster
      </h2>
      <div className="mx-auto mb-6 w-12 border-t-2 border-red-600"></div>
      <div className="mb-6 flex flex-col">
        <div className="relative flex flex-row">
        <Image
            src={b}
            alt="Placeholder"
            className="h-40 z-0 relative w-full m-[2%] rounded-md object-cover"
          />
          <Image
            src={b}
            alt="Placeholder"
            className="h-40 z-0 relative w-full m-[2%] rounded-md object-cover"
          />
          <div className="z-1 w-full h-[39px] absolute self-center flex justify-center justify-self-center">
            <div className="w-[90%] h-full justify-center font-medium text-[16px]/[19.2px] flex items-center bg-[#ffffffb2]">Place Holder</div>
          </div>
        </div>
        <div className="relative flex flex-row">
          <Image
            src={b}
            alt="Placeholder"
            className="h-40 z-0 relative w-full m-[2%] rounded-md object-cover"
          />
          <Image
            src={b}
            alt="Placeholder"
            className="h-40 z-0 relative w-full m-[2%] rounded-md object-cover"
          />
          <div className="z-1 w-full h-[39px] absolute self-center flex justify-center justify-self-center">
            <div className="w-[90%] h-full justify-center font-medium text-[16px]/[19.2px] flex items-center bg-[#ffffffb2]">Place Holder</div>
          </div>
        </div>
      </div>
      <button className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
        Upload Poster
      </button>
    </div>
  );
};

export default SubmitPoster;
