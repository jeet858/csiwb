import Image from "next/image";
import React from "react";
import banner from "../../../images/banner.png";
import banner2 from "../../../images/banner2.png";

import Carousel from "./Carousel";
interface BannerPops {
  transitionInterval: number;
}
const Banner: React.FunctionComponent<BannerPops> = ({
  transitionInterval,
}) => {
  const items = [banner, banner2];
  return (
    <div>
      <Carousel
        items={items}
        autoPlay={true}
        autoPlayInterval={transitionInterval}
        indicator={false}
        arrows={false}
        drag={false}
      />
    </div>
  );
};

export default Banner;
