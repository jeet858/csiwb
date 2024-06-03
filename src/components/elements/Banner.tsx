import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "../../../images/banner.png";
import banner2 from "../../../images/banner2.png";

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
    { img: banner2, themeColor: "#DA0D6A" },
  ];
  const [currentItem, setCurrentItem] = useState<string>(
    items[0]?.themeColor as string,
  );

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
        autoPlay={true}
        autoPlayInterval={transitionInterval}
        indicator={false}
        arrows={false}
        drag={true}
        onCurrentItemChange={handleCurrentItemChange}
      />
    </div>
  );
};

export default Banner;
