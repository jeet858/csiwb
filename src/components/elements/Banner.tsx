import Image from "next/image";
import React from "react";
import banner from "../../../images/banner.png";

const Banner: React.FunctionComponent = () => {
  return (
    <div>
      <Image src={banner} alt="" className="w-full" />
    </div>
  );
};

export default Banner;
