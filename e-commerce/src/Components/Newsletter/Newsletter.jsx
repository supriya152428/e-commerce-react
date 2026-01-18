import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-2/3 flex flex-col items-center justify-center mx-auto px-24 py-24 mb-36 gap-8 bg-slate-100">

      <h1 className="text-gray-700 text-4xl font-semibold text-center">
        Get Exclusive Offers On Your Email
      </h1>

      <p className="text-gray-700 text-lg">
        Subscribe to our newsletter and stay updated
      </p>

      <div className="flex items-center bg-white w-full max-w-2xl h-16 rounded-full border border-gray-400">
        <input
          type="email"
          placeholder="Your Email Id"
          className="flex-1 ml-6 outline-none text-gray-600 text-sm"
        />

        <button className="h-full px-10 rounded-full bg-black text-white text-sm">
          Subscribe
        </button>
      </div>

    </div>
  )
}

export default Newsletter