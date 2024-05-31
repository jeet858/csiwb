import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLinks: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-gray-500 font-semibold mb-4">Get In Touch</h2>
      <ul>
        <li className="flex items-center mb-2">
            <IoLogoFacebook className='text-blue-600'/>
          <a href="https://www.facebook.com" className="text-blue-600">Facebook</a>
        </li>
        <li className="flex items-center mb-2">
            <FaSquareXTwitter  className='text-blue-600'/>
          <a href="https://www.twitter.com" className="text-blue-600">Tweeter</a>
        </li>
        <li className="flex items-center mb-2">
            <FaInstagram  className='text-blue-600'/>
          <a href="https://www.instagram.com" className="text-blue-600">Instagram</a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
