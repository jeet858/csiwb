import Image from "next/image";
import sk from "../../../images/Soumitra_kr.png";
import rs from "../../../images/ranjan_sharma.png";
import sb from "../../..//images/sunip_banerjee.png";
import pk from "../../../images/pk_hazra.png";
import sbv from "../../../images/suvro_banerjee.png";
import React, { useState } from "react";
import Carousel from "./Carousel";

const OrganizingCommittee: React.FunctionComponent = () => {
  const caraouserItems = [
    { img: sk },
    { img: rs },
    { img: sb },
    { img: sbv },
    { img: pk },
  ];
  const [expandedView, setExpandedView] = useState(false);

  return (
    <div className="mt-5 max-w-md self-center  overflow-hidden bg-white  md:max-w-2xl">
      <div className="flex flex-col">
        {/* <div className="flex flex-col">
          <div className="self-center  pb-2 text-lg font-bold uppercase tracking-wide text-[#303791]">
            Organizing Committee
          </div>
          <div className="mb-8 flex h-1 w-20 self-center rounded-full bg-[#DA2128]"></div>
        </div> */}
        <div className="flex w-full items-center justify-center  sm:h-96 md:h-fit md:flex-shrink-0 lg:h-fit">
          <Carousel
            indicatorColor=""
            items={caraouserItems}
            arrows={false}
            indicator={true}
            autoPlay={false}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;
