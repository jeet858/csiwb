import React from "react";
import errorImg from "../../images/error-icon.png";
import Image from "next/image";
interface ErrorPopupProps {
  onClick: () => void;
}
const LoginFailedPopup: React.FunctionComponent<ErrorPopupProps> = (props) => {
  return (
    <div className="flex h-2/5 w-2/5 flex-col items-center justify-evenly rounded bg-white font-lato md:m-4 md:w-full">
      <div className=" flex w-full items-center justify-center">
        <Image src={errorImg} alt="" className="h-24 w-24" />
      </div>
      <p className="font-bold">Failed Message</p>
      <p className="text-center">Incorrect username or password</p>
      <button
        className="h-10 w-32 rounded bg-[#DA2128] text-white"
        onClick={props.onClick}
      >
        Continue
      </button>
    </div>
  );
};

export default LoginFailedPopup;
