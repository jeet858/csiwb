import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex w-full flex-col bg-gray-100 p-4 text-lg font-light">
      <h2 className="mb-4 font-semibold text-gray-500">Get In Touch</h2>
      <div className=" flex space-x-4">
        <span className="mb-2 flex items-center space-x-4">
          <FaFacebook className="h-8 w-8 text-[#280101]" />
          {/* <a href="https://www.facebook.com" className="text-[#280101]">
            Facebook
          </a> */}
        </span>
        <span className="mb-2 flex items-center space-x-4">
          <FaSquareXTwitter className="h-8 w-8 text-[#280101]" />
          {/* <a href="https://www.twitter.com" className="text-[#280101]">
            Tweeter
          </a> */}
        </span>
        <span className="mb-2 flex items-center space-x-4">
          <FaInstagram className="h-8 w-8 text-[#280101]" />
          {/* <a href="https://www.instagram.com" className="text-[#280101]">
            Instagram
          </a> */}
        </span>
      </div>
    </div>
  );
};

export default SocialLinks;
