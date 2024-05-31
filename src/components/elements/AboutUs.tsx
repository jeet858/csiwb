import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="w-screen mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">About Us</h2>
      <p className="text-center mb-6">
        It is well known now that the Cardiological Society of India was conceived in a dramatic fashion during a 12-hour train ride in 1946 and revealed itself as the first cardiological body in Asia on 4th April 1948 in Calcutta, one year before the formation of the American College of Cardiology, with none other than Dr. Bidhan Chandra Roy at the helm of affairs.
      </p>
      <div className="text-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Read More</button>
      </div>
    </div>
  );
}

export default AboutUs;