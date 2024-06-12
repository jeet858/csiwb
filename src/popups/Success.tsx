import React from "react";
import checkImg from "../../images/success_icon.png";
import Image from "next/image";
interface SuccessPopupProps {
  onClick: () => void;
}
const SuccessPopup: React.FunctionComponent<SuccessPopupProps> = (props) => {
  return (
    <div className="popup-bg flex h-2/5 w-2/5 flex-col items-center justify-evenly rounded bg-white font-lato md:m-4 md:w-full">
      <div className=" flex w-full items-center justify-center">
        <Image src={checkImg} alt="" className="h-24 w-24" />
      </div>
      <p className="font-bold">Success Message</p>
      <p className="text-center">
        We are delighted to inform that the file has been successfully uploaded!
      </p>
      <button
        className="h-10 w-32 rounded bg-[#60C33F] text-[#2E2E2E]"
        onClick={props.onClick}
      >
        Continue
      </button>
    </div>
  );
};

export default SuccessPopup;
