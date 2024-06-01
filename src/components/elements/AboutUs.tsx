import React, { useEffect, useState } from "react";
interface AboutUsPops {
  themeColor: string;
}
const AboutUs: React.FC<AboutUsPops> = ({ themeColor }) => {
  return (
    <div className=" flex w-screen flex-col rounded-lg  p-4 font-sans text-[#0E204E]">
      <h2
        className="mb-4 text-center text-2xl font-bold"
        style={{ color: themeColor }}
      >
        About Us
      </h2>
      <div className="mb-4 flex h-1 w-20 self-center rounded-full bg-[#DA2128]"></div>
      <p className="mb-6 text-center">
        It is well known now that the Cardiological Society of India was
        conceived in a dramatic fashion during a 12-hour train ride in 1946 and
        revealed itself as the first cardiological body in Asia on 4th April
        1948 in Calcutta, one year before the formation of the American College
        of Cardiology, with none other than Dr. Bidhan Chandra Roy at the helm
        of affairs.
      </p>
      <div className="text-center">
        <button
          className="rounded px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          style={{ backgroundColor: themeColor }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
