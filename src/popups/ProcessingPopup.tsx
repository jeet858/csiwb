import React from "react";
import loading from "../../images/loading.png";
import Image from "next/image";

const ProcessingPopup: React.FunctionComponent = () => {
  return (
    <div className="flex h-2/5 w-2/5 flex-col items-center justify-evenly rounded bg-white font-lato md:m-4 md:w-full">
      <div className=" flex w-full items-center justify-center">
        <Image src={loading} alt="" className="h-24 w-24 animate-spin" />
      </div>
      <p className="font-bold">Loading</p>
    </div>
  );
};

export default ProcessingPopup;
