import React from 'react'

const Footer:React.FunctionComponent = () => {
  return (
    <footer className="bg-blue-900 flex justify-center w-screen text-white ">
      <div className="flex flex-col w-full">
        <div className="flex justify-evenly bg-[#1849C6] py-6">
          <div>
            <h2 className="text-lg font-bold mb-2">Information</h2>
            <ul>
              <li><a href="#!" className="text-white hover:underline">CSI WB and Committees</a></li>
              <li><a href="#!" className="text-white hover:underline">Who We Are</a></li>
              <li><a href="#!" className="text-white hover:underline">CSI Policies</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">&nbsp;</h2>
            <ul>
              <li><a href="#!" className="text-white hover:underline">Who Are we</a></li>
              <li><a href="#!" className="text-white hover:underline">Our Offices</a></li>
              <li><a href="#!" className="text-white hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mb-6 border-t border-blue-700 pt-4">
          <p>&copy; 2024 CSI of West Bengal, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
