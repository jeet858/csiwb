import React from "react";
import Carousel from "./Carousel";

const ScientificProgram: React.FunctionComponent = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="my-8 flex flex-col text-center">
      <h2 className="mb-2 text-2xl font-semibold text-blue-700">
        Scientific Program
      </h2>
      <div className="mb-8 flex h-1 w-20 self-center rounded-full bg-[#DA2128]"></div>

      <Carousel items={items} />
    </div>
  );
};

export default ScientificProgram;
