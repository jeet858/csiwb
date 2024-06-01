import Image from "next/image";
import dr from "../../../images/Soumitra_kr.png";
import React from "react";

const OrganizingCommittee: React.FunctionComponent = () => {
  return (
    <div className="mt-5 max-w-md self-center  overflow-hidden bg-white  md:max-w-2xl">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="self-center  pb-2 text-lg font-bold uppercase tracking-wide text-[#303791]">
            Organizing Committee
          </div>
          <div className="mb-8 flex h-1 w-20 self-center rounded-full bg-[#DA2128]"></div>
        </div>
        <div className="flex w-full items-center justify-center bg-[#303791] sm:h-96 md:h-fit md:flex-shrink-0 lg:h-fit">
          <Image
            className="h-full w-full object-cover"
            src={dr}
            alt="Dr. Soumitra Kumar"
          />
        </div>
        <div className="p-8 text-center">
          <p className="mt-4 text-[#0E204E]">
            The CSI-West Bengal Branch (CSI-WB) came into being in 1977 with Dr.
            J.C. Banerjea as the first President. The branch grew in stature
            with time so much so that it contributed the fund that was required
            for construction of CSI-Head Quarters Building, currently located in
            Kankurgachi, Kolkata which also houses CSI-WB Office.
          </p>
          <div className="mt-4">
            <button className="rounded bg-[#1849C6] px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;
