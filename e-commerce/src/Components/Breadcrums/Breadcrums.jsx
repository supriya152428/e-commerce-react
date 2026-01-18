import React from 'react';
import arrow_icon from '../../assets/Assets/breadcrum_arrow.png';

const Breadcrums = ({ product }) => {
  if (!product) return null;

  return (
    <div className="flex items-center gap-2 text-[#5e5e5e] text-base font-semibold my-15 mx-44 capitalize">
      Home <img src={arrow_icon} alt="arrow" className="w-3 h-3" />
      Shop <img src={arrow_icon} alt="arrow" className="w-3 h-3" />
      {product.category} <img src={arrow_icon} alt="arrow" className="w-3 h-3" />
      {product.name}
    </div>
  );
};

export default Breadcrums;
