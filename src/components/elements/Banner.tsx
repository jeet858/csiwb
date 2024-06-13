import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "../../../images/Group 81.png";
import banner1 from "../../../images/CSI-ban-3-1.png";
import banner2 from "../../../images/CSI-ban-3-2.png";

import Carousel from "./Carousel";
interface BannerPops {
  transitionInterval: number;
  onCurrentItemChange: (themeColor: string) => void;
}
const Banner: React.FunctionComponent<BannerPops> = ({
  transitionInterval,
  onCurrentItemChange,
}) => {
  const items = [
    { img: banner, themeColor: "#1849C6" },
    { img: banner1, themeColor: "#DA0D6A" },
    { img: banner2, themeColor: "#DA0D6A" },
  ];
  const [currentItem, setCurrentItem] = useState(items[0]!.themeColor);

  const handleCurrentItemChange = (item: string) => {
    setCurrentItem(item);
  };
  useEffect(() => {
    onCurrentItemChange(currentItem);
  }, [currentItem, onCurrentItemChange]);
  // console.log(currentItem);
  return (
    <div>
      <Carousel
        items={items}
        autoPlay={false}
        autoPlayInterval={transitionInterval}
        indicator={false}
        arrows={false}
        drag={true}
        indicatorColor="#7C0202"
        onCurrentItemChange={handleCurrentItemChange}
      />
    </div>
  );
};

export default Banner;
