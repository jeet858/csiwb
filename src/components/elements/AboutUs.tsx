import Image from "next/image";
import React, { forwardRef, LegacyRef, useRef, useState } from "react";
import img from "../../../images/abount-heading.png";
import heart_icon from "../../../images/heart_icon.png";
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
      className="relative mt-[-90px] flex w-screen flex-col rounded-lg p-4 font-lato  text-[#0E204E]"
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
        <div className="flex h-fit w-full flex-col">
          {/* <p className="mb-6 text-center">
            Warmest greetings from Cardiological Society of India, West Bengal
            Branch. In keeping with the aphorism of yesteryears, “What Bengal
            thinks today, India thinks tomorrow”, the Cardiological Society of
            Bengal was born on 11th April, 1946 with the legendary Physician,
            Bharatratna Dr. B.C. Roy as its first President. Two years passed by
            and on 11th January 1948, eminent physicians of India met in
            Calcutta and decided to form a National Society of Cardiologists. A
            few months later, the Cardiological Society of India (CSI) was born
            on the 4th April, 1948 at Calcutta and thus march to a glorious
            future was flagged off one year earlier than formation of American
            College of Cardiology. The CSI-West Bengal Branch (CSI-WB) came into
            being in 1977 with Dr. J.C. Banerjea as the first President. The
            branch grew in stature with time so much so that it contributed the
            fund that was required for construction of CSI-Head Quarters
            Building, currently located in Kankurgachi, Kolkata which also
            houses CSI-WB Office. In its own right, CSI-WB nurtured an intense
            desire to host the Platinum Jubilee Conference of CSI in 2023 in
            Kolkata, but undesirable circumstances deprived it from the glory.
            Out of sheer love and sense of belonging to the mother Society i.e.
            CSI, the CSI-WB branch is organizing a “Tribute function” to
            celebrate 75 years of CSI on 21st, 22nd 23rd June 2024 at Hotel
            Oberoi Grand, Kolkata. This is a humble endeavour to make up for the
            lost opportunity. Please join us actively and whole-heartedly in
            this celebration of bonhomie and academic feast. We will leave no
            stone unturned to make this a memorable occasion.
          </p> */}
          <p className="mb-6">
            It is well known now that the Cardiological Society of India was
            conceived in a dramatic fashion during a 12-hour train ride in 1946
            and revealed itself as the first cardiological body in Asia on 4th
            April 1948 in Calcutta, one year before the formation of the
            American College of Cardiology, with none other than Dr. Bidhan
            Chandra Roy at the helm of affairs.
          </p>
          <p className="mb-6">
            Advancement of scientific knowledge and research in relation to the
            Cardiovascular system in all its aspects to improve our basic
            understanding and to find better preventive measures and treatment
            of all types of Cardiovascular diseases. To achieve these aims and
            objectives, the Society shall:
          </p>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Hold periodical meetings, conferences and social gatherings.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Arrange clinical discourses, discussions and demonstrations on any
            subject of interest to the Society.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Actively encourage research, teaching and training programmes at
            various centers and expand knowledge base through Library and use of
            Computer and Internet.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Engage in public education and training with the objective of
            improved preventive programmes for the welfare of all.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Publish, distribute or otherwise circulate records, transactions and
            proceedings of the various meetings and conferences of the Society.
            Publish and circulate a Journal which shall be a character specially
            related to the cardiovascular sciences.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Co-ordinate as necessary and as such seen fit with other Societies
            or Organizations having similar and allied objectives.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Raise and borrow money and invest any sum belonging to the Society
            not immediately required in such a manner as the Society may think
            fit.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Erect, maintain, improve or alter and keep in repair any building
            occupied by the Society.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            Do all other things as are cognate to e objectives of the Society or
            are incidental or conducive to the attainment of the above
            objectives.
          </div>
          <div className="flex w-full">
            <Image alt="" src={heart_icon} className="mr-2 mt-[3px] h-4 w-4" />
            To serve the underprivileged people and run the free heart clinic.
          </div>
        </div>
      )}
      {!expandedView ? (
        <div className="text-center">
          <button
            className="rounded bg-[#560303] px-4 py-2 text-white hover:bg-[#280101]  "
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
            className="rounded bg-[#560303] px-4 py-2 text-white hover:bg-[#280101]  "
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
