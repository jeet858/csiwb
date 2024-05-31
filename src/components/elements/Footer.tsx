import React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="flex w-screen justify-center bg-[#303791] text-white ">
      <div className="flex w-full flex-col">
        <div className="flex h-60 w-full flex-col bg-[#1849C6] p-6">
          <div className="flex h-full w-full flex-col justify-start ">
            <h2 className="mb-4 text-lg font-bold">Information</h2>
            <div className="grid w-full grid-cols-2 grid-rows-3 ">
              <p>CSI WB and Committees</p>
              <p>Who We Are</p>
              <p>Who Are we</p>
              <p>Our Offices</p>
              <p>CSI Policies</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className="mb-6 border-t border-blue-700 pt-4 text-center">
          <p>&copy; 2024 CSI of West Bengal, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
