import React from "react";
import updatesHeading from "../../../images/updates-heading.png";
import heartIcon from "../../../images/heart-icon.png";
import Image from "next/image";
const Updates: React.FunctionComponent = () => {
  return (
    <div className="bg flex h-64 w-full justify-center font-lato">
      <div className="flex w-3/5 flex-col self-center">
        <Image
          src={updatesHeading}
          alt="Updates"
          className="mb-4 h-fit w-fit self-center"
        />
        <div className="flex flex-col space-y-4 self-center">
          <div className="flex   space-x-4">
            <Image src={heartIcon} alt="Heart Icon" className="h-6 w-6 " />
            <span className="self-start text-xl">
              21, 22 & 23 June, 2024 Oberoi Grand | Kolkata
            </span>
          </div>
          <div className="flex items-center  space-x-4">
            <Image src={heartIcon} alt="Heart Icon" className="h-6 w-6" />
            <span className="text-xl">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
