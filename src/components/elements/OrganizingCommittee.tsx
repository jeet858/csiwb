import Image from 'next/image';
import dr from "/Users/Biswajit/Desktop/csiwb/images/Soumitra_kr.png"
import React from 'react';

const OrganizingCommittee: React.FunctionComponent = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
      <div className="flex flex-col">
        <div className="md:flex-shrink-0 w-full bg-[#303791] h-96 flex justify-center items-center">
          <Image className="h-64 object-cover w-64" src={dr} alt="Dr. Soumitra Kumar" />
        </div>
        <div className="p-8 text-center">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Organizing Committee</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Dr. Soumitra Kumar</a>
          <p className="mt-2 text-gray-500">President, CSI-WB Branch, Chairman Organizing Committee</p>
          <p className="mt-4 text-gray-500">
            The CSI-West Bengal Branch (CSI-WB) came into being in 1977 with Dr. J.C. Banerjee as the first President. The branch grew in stature with time so much so that it contributed the fund that was required for construction of CSI-Head Quarters Building, currently located in Kankurgachi, Kolkata which also houses CSI-WB Office.
          </p>
          <div className="mt-4">
            <button className="text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizingCommittee;
