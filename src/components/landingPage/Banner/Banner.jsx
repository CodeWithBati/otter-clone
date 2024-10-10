import React from 'react';
import Image from 'next/image';
import image from './img/Banner.png';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#E9E0FF] to-[#D3C7FF] flex justify-center h-24 overflow-hidden">
      <div className="w-full p-4 rounded-lg flex items-center justify-between overflow-hidden  sm:text-center sm:space-y-4">

        {/* Image only visible on screens medium (md) and larger */}
        <div className="md:pl-44 flex-shrink-0 overflow-hidden hidden md:block">
          <Image 
            src={image} 
            alt="Sales Insights" 
            width={200} 
            height={200} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text section */}
        <div className="ml-4 flex flex-col sm:ml-0">
          <h1 className="text-2xl font-bold text-[#5B27FA] pr-4">OtterPilot™ for Sales</h1>
          <h2 className="text-2xl font-bold">The #1 AI Tool for Sales Meetings</h2>
        </div>

        {/* Button */}
        <button className="md:mr-36 bg-[#7000FF] text-white font-semibold py-2 px-4 rounded-full hover:bg-black sm:mt-4">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Banner;
