import React from 'react';

const Loginsignup = () => {
  return (
    <div className="w-full h-[120vh] bg-[#fce3fe] pt-24 flex justify-center">
      <div className="w-140 h-140 bg-white p-10">
        <h1 className="m-5 text-xl font-bold">Sign up</h1>

        <div className="flex flex-col gap-7 mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="h-12 w-full pl-5 border border-gray-300 outline-none text-gray-600 text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-12 w-full pl-5 border border-gray-300 outline-none text-gray-600 text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-12 w-full pl-5 border border-gray-300 outline-none text-gray-600 text-base"
          />
        </div>

        <button className="mt-6 w-full bg-red-400 text-white py-2 rounded">Continue</button>

        <p className="mt-4 text-sm text-gray-500 font-semibold">
          Already have an account? <span className="text-red-500 cursor-pointer font-semibold">Login here</span>
        </p>

        <div className="mt-4 flex items-center font-semibold  gap-2 text-xs text-gray-500">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
