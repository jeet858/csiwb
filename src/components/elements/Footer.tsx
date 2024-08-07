import React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="flex w-screen justify-center bg-[#1F0101] font-lato text-white">
      <div className="flex w-full flex-col">
        <div className="flex h-60 w-full flex-col bg-[#280101] p-6">
          <div className="flex h-full w-full flex-col justify-start ">
            <h2 className="mb-4 text-lg font-bold">Information</h2>
            <div className="grid h-full w-full grid-cols-2 grid-rows-3 font-light">
              <p>CSI WB and Committees</p>
              <p className="flex justify-end ">Who We Are</p>
              <p>Who Are we</p>
              <p className="flex justify-end ">Our Offices</p>
              <p>CSI Policies</p>
              <p className="flex justify-end text-end">Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className="mb-6 border-t  pt-4 text-center">
          <p>&copy; 2024 CSI of West Bengal, All Rights Reserved.</p>
        </div>
        <div className="mb-4 border-t  pt-4 text-center text-xs">
          Managed and Developed by -{" "}
          <a href="https://mindsstar.com/" target="_blank">
            MindStar Technologies Pvt. Ltd.
          </a>
        </div>
        {/* <a
          className="mb-4 border-t  pt-4 text-center text-xs"
          href="https://mindsstar.com/"
          target="_blank"
        >
          Managed and Developed by - MindStar Technologies Pvt. Ltd.
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
