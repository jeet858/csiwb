import React from "react";
import Carousel from "./Carousel";
import img from "../../../images/caraousel.png";
interface ScientificProgramProps {
  themeColor: string;
}
const ScientificProgram: React.FunctionComponent<ScientificProgramProps> = ({
  themeColor,
}) => {
  const items = [img, img, img, img, img];

  return (
    <div className="my-8 flex flex-col text-center">
      <h2
        className="mb-2 text-2xl font-semibold "
        style={{ color: themeColor }}
      >
        Scientific Program
      </h2>
      <div className="mb-8 flex h-1 w-20 self-center rounded-full bg-[#DA2128]"></div>

      <Carousel items={items} indicator={true} autoPlay={false} arrows={true} />
    </div>
  );
};

export default ScientificProgram;
