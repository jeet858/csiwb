import React, { useEffect, useState } from "react";
import CarouselTextOnly from "./CarouselTextOnly";
interface ScientificProgramProps {
  themeColor: string;
}
const ScientificProgram: React.FunctionComponent<ScientificProgramProps> = ({
  themeColor,
}) => {
  const itemsText = [
    { text: "Practice-oriented Case Discussions" },
    { text: "Didactic talks on Contemporary Topics" },
    { text: "Cardiology Quiz with Prizes" },
    { text: "CD Presentation on Challenging Cases" },
    { text: "Competitive CD and Poster Presentations by PDTs" },
    { text: "National Panel Discussion on NCD" },
  ];

  const [backgroundImage, setBackgroundImage] = useState<string>("slider-bg");
  // const images: string[] = ["slider-bg", "slider-bg2"];
  // useEffect(() => {
  //   const intervalId = () => {
  //     if (backgroundImage === "slider-bg") {
  //       console.log("changes");
  //       setBackgroundImage("slider-bg2");
  //     } else if (backgroundImage === "slider-bg2") {
  //       console.log("changes2");

  //       setBackgroundImage("slider-bg");
  //     } else {
  //       console.log("in else");
  //     }
  //   }; // Change every 5 seconds
  //   setTimeout(intervalId, 5000);
  // }, []);
  return (
    <div className="mb-8 flex flex-col text-center">
      <div className={`${backgroundImage} flex h-[909px] w-full`}>
        <CarouselTextOnly
          items={itemsText}
          indicator={true}
          autoPlay={true}
          arrows={true}
          drag={true}
          indicatorColor="#7C0202"
        />
      </div>
    </div>
  );
};

export default ScientificProgram;
