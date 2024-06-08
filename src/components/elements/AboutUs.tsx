import Image from "next/image";
import React, { forwardRef, LegacyRef } from "react";
import img from "../../../images/abount-heading.png";

interface AboutUsProps {
  themeColor: string;
}

const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>(
  ({ themeColor }, ref) => {
    return (
      <div
        className="relative top-[-90px] flex w-screen flex-col rounded-lg p-4 font-sans text-[#0E204E]"
        ref={ref}
      >
        <Image src={img} alt="About Us" className="self-center" />
        <p className="mb-6 text-center">
          It is well known now that the Cardiological Society of India was
          conceived in a dramatic fashion during a 12-hour train ride in 1946
          and revealed itself as the first cardiological body in Asia on 4th
          April 1948 in Calcutta, one year before the formation of the American
          College of Cardiology, with none other than Dr. Bidhan Chandra Roy at
          the helm of affairs.
        </p>
        <div className="text-center">
          <button className="rounded bg-[#560303] px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Read More
          </button>
        </div>
      </div>
    );
  },
);

export default AboutUs;
