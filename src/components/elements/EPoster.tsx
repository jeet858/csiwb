import React from "react";
import b from "../../../images/Beach-House.jpeg";
import eposterHeading from "../../../images/eposter-heading.png";
import eposter from "../../../images/eposter.png";
import Image from "next/image";
import Carousel from "./Carousel";

const SubmitPoster: React.FunctionComponent = () => {
  const items = [
    { img: eposter },
    { img: eposter },
    { img: eposter },
    { img: eposter },
  ];
  return (
    <div className="flex w-full flex-col bg-white py-6">
      {/* <h2 className="mb-2 text-center text-2xl font-semibold text-blue-700">
        Submit E-Poster
      </h2>
      <div className="mb-4 flex h-1 w-20 self-center rounded-full bg-[#DA2128]"></div> */}
      <Image
        src={eposterHeading}
        alt="Submit E-Poster"
        className="self-center"
      />
      {/* <div className="mb-6 flex flex-col">
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
      </div> */}
      <div className="eposter-bg my-12 flex  h-fit w-full items-center justify-center pt-8 ">
        <div className="flex h-fit w-4/5">
          <Carousel
            items={items}
            arrows={false}
            autoPlay={false}
            indicator={true}
            indicatorColor="#FFFFFF"
          />
        </div>
      </div>
      <button className="w-60 self-center rounded-md bg-[#5F0404] py-2 font-semibold text-white hover:bg-blue-700">
        Upload Poster
      </button>
    </div>
  );
};

export default SubmitPoster;
