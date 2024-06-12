import React, { useState } from "react";
import Carousel from "./Carousel";
import CarouselTextOnly from "./CarouselTextOnly";
import img from "../../../images/caraousel.png";
import img2 from "./../../../images/scientific-program.png";
import keynote1 from "../../../images/keynote_1.png";
import keynote2 from "../../../images/keynote_2.png";
import keynote3 from "../../../images/keynote_3.png";
import keynote4 from "../../../images/keynote_4.png";
import keynote5 from "../../../images/keynote_5.png";
import keynote6 from "../../../images/keynote_6.png";
import keynote7 from "../../../images/keynote_7.png";
interface ScientificProgramProps {
  themeColor: string;
}
const ScientificProgram: React.FunctionComponent<ScientificProgramProps> = ({
  themeColor,
}) => {
  const itemsImage = [
    { img: keynote1 },
    { img: keynote2 },
    { img: keynote3 },
    { img: keynote4 },
    { img: keynote5 },
    { img: keynote6 },
    { img: keynote7 },
  ];
  const itemsText = [
    { text: "Practice-oriented Case Discussions" },
    { text: "Didactic talks on Contemporary Topics" },
    { text: "Cardiology Quiz with Prizes" },
    { text: "CD Presentation on Challenging Cases" },
    { text: "Competitive CD and Poster Presentations by PDTs" },
    { text: "National Panel Discussion on NCD" },
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

      <div className="slider-bg flex h-[909px] w-full">
        <CarouselTextOnly
          items={itemsText}
          indicator={true}
          autoPlay={false}
          arrows={true}
          drag={true}
          indicatorColor="#7C0202"
        />
      </div>
    </div>
  );
};

export default ScientificProgram;
