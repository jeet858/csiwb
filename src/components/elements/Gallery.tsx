import Carousel from "./Carousel";
import React from "react";
import Image from "next/image";
import img1 from "../../../images/image1.jpg";
import img2 from "../../../images/image2.jpg";
import img3 from "../../../images/image3.jpg";
import img4 from "../../../images/image4.jpg";
import img5 from "../../../images/image5.jpg";
import highlights from "../../../images/hightlights.png";
const Gallery: React.FunctionComponent = () => {
  const items = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];
  return (
    <div className="eposter-bg my-12 flex  h-fit w-full items-center justify-center pt-8 ">
      <div className="flex h-fit w-4/5 flex-col gap-y-6">
        <Image src={highlights} alt="Submit E-Poster" className="self-center" />
        <Carousel
          items={items}
          arrows={false}
          autoPlay={false}
          indicator={true}
          indicatorColor="#FFFFFF"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
export default Gallery;
