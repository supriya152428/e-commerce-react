import React from 'react'

const DescriptionBox = () => {
  return (
    <div className="my-30 mx-44">

      {/* Tabs */}
      <div className="flex gap-6">
        <div className="flex items-center justify-center text-base font-semibold w-44 h-18 border border-[#dedede] bg-white">
          Description
        </div>
        <div className="flex items-center justify-center text-base font-semibold w-44 h-18 border border-[#dedede] text-gray-500">
          Reviews (122)
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 border border-[#dedede] p-8">
        <p className="text-gray-600 leading-relaxed mb-6">
          This e-commerce website presents products in a clear and well-structured manner,
          displaying essential details such as images, pricing, ratings, descriptions,
          categories, and size options. The layout is designed to keep information easy to
          understand while maintaining a visually pleasing appearance.
        </p>

        <p className="text-gray-600 leading-relaxed">
          The overall design emphasizes simplicity and consistency, ensuring that product
          information stands out without clutter. Attention has been given to spacing,
          alignment, and content hierarchy to create a balanced and professional look
          suitable for an online shopping platform.
        </p>
      </div>

    </div>
  )
}

export default DescriptionBox
