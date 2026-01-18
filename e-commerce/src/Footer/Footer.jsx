import React from 'react';
import footer_logo from '../assets/Assets/logo_big.png';
import instagram_icon from '../assets/Assets/instagram_icon.png';
import pintester_icon from '../assets/Assets/pintester_icon.png';
import whatsapp_icon from '../assets/Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 bg-white py-10'>

      {/* Logo Section */}
      <div className='flex items-center gap-3'>
        <img src={footer_logo} alt="Shopper Logo" className='w-12 h-12' />
        <p className='text-gray-800 text-3xl font-bold'>SHOPPER</p>
      </div>

      {/* Links Section */}
      <ul className='flex list-none gap-8 text-gray-600 text-lg'>
        <li className='cursor-pointer hover:text-gray-800 transition'>Company</li>
        <li className='cursor-pointer hover:text-gray-800 transition'>Products</li>
        <li className='cursor-pointer hover:text-gray-800 transition'>Offices</li>
        <li className='cursor-pointer hover:text-gray-800 transition'>About</li>
        <li className='cursor-pointer hover:text-gray-800 transition'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='flex gap-4'>
        <div className='p-2 bg-[#fbfbfb] border border-[#ebebeb] rounded-lg flex items-center justify-center'>
          <img src={instagram_icon} alt="Instagram" className='w-6 h-6'/>
        </div>
        <div className='p-2 bg-[#fbfbfb] border border-[#ebebeb] rounded-lg flex items-center justify-center'>
          <img src={pintester_icon} alt="Pinterest" className='w-6 h-6'/>
        </div>
        <div className='p-2 bg-[#fbfbfb] border border-[#ebebeb] rounded-lg flex items-center justify-center'>
          <img src={whatsapp_icon} alt="WhatsApp" className='w-6 h-6'/>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='flex flex-col items-center gap-4 w-full text-gray-700 text-base mt-10'>
        <hr className='w-4/5 border-0 rounded-lg h-1 bg-[#c7c7c7]'/>
        <p>Copyright © 2025 - All Rights Reserved</p>
      </div>

    </div>
  );
};

export default Footer;