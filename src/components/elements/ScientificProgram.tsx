import React, { useState } from "react";
import Carousel from "./Carousel";
import img from "../../../images/caraousel.png";
import img2 from "./../../../images/scientific-program.png";
interface ScientificProgramProps {
  themeColor: string;
}
const ScientificProgram: React.FunctionComponent<ScientificProgramProps> = ({
  themeColor,
}) => {
  const items = [
    { img: img2 },
    { img: img2 },
    { img: img2 },
    { img: img2 },
    { img: img2 },
  ];
  // const [currentItem, setCurrentItem] = useState<string>("");

  // const handleCurrentItemChange = (item: string) => {
  //   setCurrentItem(item);
  // };
  // console.log(currentItem);
  return (
    <div className="mb-8 flex flex-col text-center">
      {/* <h2
        className="mb-2 text-2xl font-semibold "
        style={{ color: themeColor }}
      >
        Scientific Program
      </h2>
      <div className="mb-8 flex h-1 w-20 self-center rounded-full bg-[#DA2128]"></div> */}

      <Carousel
        items={items}
        indicator={true}
        autoPlay={false}
        arrows={true}
        drag={true}
        indicatorColor="#7C0202"
      />
    </div>
  );
};

export default ScientificProgram;
