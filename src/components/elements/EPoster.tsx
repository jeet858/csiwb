import React from 'react';
import b from "../../../images/Beach-House.jpeg"
import Image from 'next/image';

const SubmitPoster: React.FunctionComponent = () => {
  return (
    <div className="w-screen bg-white p-6">
      <h2 className="text-2xl font-semibold text-center text-blue-700 mb-2">Submit E-Poster</h2>
      <div className="border-t-2 border-red-600 w-12 mx-auto mb-6"></div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <Image src={b} alt="Placeholder" className="w-full h-40 object-cover rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">Place Holder</div>
        </div>
        <div className="relative">
        <Image src={b} alt="Placeholder" className="w-full h-40 object-cover rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">Place Holder</div>
        </div>
        <div className="relative">
        <Image src={b} alt="Placeholder" className="w-full h-40 object-cover rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">Place Holder</div>
        </div>
        <div className="relative">
        <Image src={b} alt="Placeholder" className="w-full h-40 object-cover rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">Place Holder</div>
        </div>
      </div>
      <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Upload Poster</button>
    </div>
  );
}

export default SubmitPoster;
