import Image from "next/image";
import React, { forwardRef, LegacyRef, useRef, useState } from "react";
import img from "../../../images/abount-heading.png";

interface AboutUsProps {
  themeColor: string;
}

const AboutUs: React.FunctionComponent<AboutUsProps> = ({ themeColor }) => {
  const [expandedView, setExpandedView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const onReadLessClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="font-lato relative mt-[-90px] flex w-screen flex-col rounded-lg p-4  text-[#0E204E]"
      ref={ref}
    >
      <Image src={img} alt="About Us" className="self-center" />
      {!expandedView ? (
        <p className="mb-6 text-center">
          It is well known now that the Cardiological Society of India was
          conceived in a dramatic fashion during a 12-hour train ride in 1946
          and revealed itself as the first cardiological body in Asia on 4th
          April 1948 in Calcutta, one year before the formation of the American
          College of Cardiology, with none other than Dr. Bidhan Chandra Roy at
          the helm of affairs.
        </p>
      ) : (
        <p className="mb-6 text-center">
          Warmest greetings from Cardiological Society of India, West Bengal
          Branch. In keeping with the aphorism of yesteryears, “What Bengal
          thinks today, India thinks tomorrow”, the Cardiological Society of
          Bengal was born on 11th April, 1946 with the legendary Physician,
          Bharatratna Dr. B.C. Roy as its first President. Two years passed by
          and on 11th January 1948, eminent physicians of India met in Calcutta
          and decided to form a National Society of Cardiologists. A few months
          later, the Cardiological Society of India (CSI) was born on the 4th
          April, 1948 at Calcutta and thus march to a glorious future was
          flagged off one year earlier than formation of American College of
          Cardiology. The CSI-West Bengal Branch (CSI-WB) came into being in
          1977 with Dr. J.C. Banerjea as the first President. The branch grew in
          stature with time so much so that it contributed the fund that was
          required for construction of CSI-Head Quarters Building, currently
          located in Kankurgachi, Kolkata which also houses CSI-WB Office. In
          its own right, CSI-WB nurtured an intense desire to host the Platinum
          Jubilee Conference of CSI in 2023 in Kolkata, but undesirable
          circumstances deprived it from the glory. Out of sheer love and sense
          of belonging to the mother Society i.e. CSI, the CSI-WB branch is
          organizing a “Tribute function” to celebrate 75 years of CSI on 21st,
          22nd 23rd June 2024 at Hotel Oberoi Grand, Kolkata. This is a humble
          endeavour to make up for the lost opportunity. Please join us actively
          and whole-heartedly in this celebration of bonhomie and academic
          feast. We will leave no stone unturned to make this a memorable
          occasion.
        </p>
      )}
      {!expandedView ? (
        <div className="text-center">
          <button
            className="rounded bg-[#560303] px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            onClick={() => {
              setExpandedView(true);
            }}
          >
            Read More
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            className="rounded bg-[#560303] px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            onClick={() => {
              setExpandedView(false);
              onReadLessClick();
            }}
          >
            Read Less
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
