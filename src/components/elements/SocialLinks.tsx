import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 text-lg font-light">
      <h2 className="mb-4 font-semibold text-gray-500">Get In Touch</h2>
      <ul>
        <li className="mb-2 flex items-center space-x-4">
          <IoLogoFacebook className="h-8 w-8 text-blue-600" />
          <a href="https://www.facebook.com" className="text-blue-600">
            Facebook
          </a>
        </li>
        <li className="mb-2 flex items-center space-x-4">
          <FaSquareXTwitter className="h-8 w-8 text-blue-600" />
          <a href="https://www.twitter.com" className="text-blue-600">
            Tweeter
          </a>
        </li>
        <li className="mb-2 flex items-center space-x-4">
          <FaInstagram className="h-8 w-8 text-blue-600" />
          <a href="https://www.instagram.com" className="text-blue-600">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
