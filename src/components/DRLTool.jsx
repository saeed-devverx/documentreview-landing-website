import React from 'react';
import drl from '../assets/images/drl.png';

const DLRTool = () => {
  return (
    <div className="mb-4 py-12 px-4 sm:px-6 lg:px-24 pt-24">
      
      {/* Main container */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:mx-35">

        {/* LEFT CONTENT */}
        <div>
          <div className="mb-4">
            <div className="text-[15px] text-[#767676] font-normal mb-2">
              Home / DRL Tool
            </div>

            <h1 className="text-[32px] sm:text-[36px] lg:text-[40px] font-medium text-[#333] mb-3">
              DRL Tool
            </h1>

            <p className="text-[16px] text-[#333] font-normal">
              Showing the single result
            </p>
          </div>

          <a href="" className="hover:text-[#39138f] block">
            <img
              src={drl}
              alt="sale images"
              className="w-[220px] sm:w-[250px] lg:w-[270px]"
            />

            <p className="text-green-700 text-[16px] font-bold pb-2 hover:text-[#39138f]">
              Document Review Tool
            </p>
          </a>

          <p className="text-[#958e09] text-sm font-normal pb-6">
            <s>$60.00</s> <u className="font-bold">$30.00</u> / month with a
            30-day <br /> free trial
          </p>

          <button className="text-[#515151] text-[16px] font-bold bg-[#e3e3e3] py-1.5 px-4 rounded">
            Place Order
          </button>
        </div>

        {/* RIGHT SORTING */}
        <div className="lg:mt-16">
          <div className="relative w-full sm:w-60">
            <select
              className="block appearance-none w-full bg-white border border-[#767676] text-black text-[16px] font-normal py-2.5 rounded px-4 pr-8 leading-tight outline-none"
              defaultValue="default"
            >
              <option value="default">Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DLRTool;
