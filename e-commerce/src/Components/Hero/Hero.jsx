import React from 'react';
import hand_icon from '../../assets/Assets/hand_icon.png';
import arrow_icon from '../../assets/Assets/arrow.png';
import hero_image from '../../assets/Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gray-100 gap-10">
      
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-gray-700">
          New Arrivals Only
        </h2>

        <div className="text-6xl font-bold leading-tight text-gray-800 space-y-2">
          <div className="flex items-center gap-4">
            <p>new</p>
            <img src={hand_icon} alt="hand" className="w-16" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>

        <button className="flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-full w-fit hover:bg-red-600 transition">
          <span>Latest Collections</span>
          <img src={arrow_icon} alt="arrow" className="w-5 h-5" />
        </button>
      </div>

      {/* RIGHT */}
      <div className='flex items-center justify-center'>
        <img src={hero_image} alt="hero" className="w-64 md:w-80 lg:w-96" />
      </div>

    </div>
  );
};

export default Hero;
