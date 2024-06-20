import React, { useEffect, useState } from "react";
import CarouselTextOnly from "./CarouselTextOnly";
import { FiDownload } from "react-icons/fi";
interface ScientificProgramProps {
  themeColor: string;
}
const ScientificProgram: React.FunctionComponent<ScientificProgramProps> = ({
  themeColor,
}) => {
  const itemsText = [
    {
      text: "Preventing ASCVD throughout the Life-course - From the Heart to the Population",
      speaker: "Prof. Kaushik Ray",
    },
    {
      text: "Are we putting Indian ASCVD Patients at Higher Risk for CV Events if we follow American or European Lipid",
      speaker: "Dr Raman Puri",
    },
    {
      text: "Left Main Disease - When to and not to Stent",
      speaker: "Dr Sunip Banerjee",
    },
    {
      text: "Assessment of Myocardial Viability- When & How?",
      speaker: "Dr Priya Jagia",
    },
    {
      text: "Management of Obesity in Cardiometabolic Disease",
      speaker: "Dr V.K. Katyal",
    },
    { text: "CV Imaging", speaker: "Dr G. N. Mohapatra" },
    { text: "Upcoming Treatment in Lipidology", speaker: "Dr Sandip Bansal" },
    {
      text: "Contemporary Approach to Patient with Chest Pain",
      speaker: "Dr Debabrata Mukherjee",
    },
    { text: "Antiplatelet Controversy", speaker: "Dr P.P. Mohanan" },
    { text: "CTO Update", speaker: "Dr Anil Dhall" },
    { text: "STEMI CARE- Where are we in 2024", speaker: "Dr Sundeep Mishra" },
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
    <div className="flex h-fit w-full flex-col items-center justify-center">
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
      <a
        href="/Scientific Program - 75 Years of CSI - A Tribute from CSI WB.pdf"
        download
        className="h-fit w-fit"
      >
        <button className="flex items-center rounded bg-[#560303] px-4 py-2 font-lato text-white hover:bg-[#280101]">
          <FiDownload className="mr-2 h-6 w-6 text-white" />
          Download Brochure
        </button>
      </a>
    </div>
  );
};

export default ScientificProgram;
