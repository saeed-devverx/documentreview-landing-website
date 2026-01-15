import React from "react";
import reviewfile from "../../assets/reviewfile.svg";
import twoperson from "../../assets/twoperson.png";
import { Blocks } from "lucide-react";

const ReviewTool = () => {
  return (
    <div className="font-sans py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto mb-4 px-4 max-sm:px-4 lg:px-2">
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-[#2E3A58] text-center mb-10 lg:-mt-5 px-1">
          <h1 className="text-xl max-sm:text-[22px] md:px-46 lg:px-0 text-[29px] gresco-bolder font-semibold   pb-8 underline leading-[29px]">
            Check out our User Guide for more information on using the{" "}
            <br className=" hidden lg:block " />
            REVIEW TOOL
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2  md:flex gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-8 pl-2">
            <h2 className="text-2xl max-sm:text-6 lg:mr-13  md:text-4xl  lg:text-4xl gresco-500 text-center font-medium text-[#2E3A58] max-sm:leading-6 lg:leading-9">
              DocumentReview.Law can help you <br hidden /> work smarter and
              save money.
            </h2>

            {/* Feature Item */}
            {[
              "DocumentReview.Law will get you to the end of document  productions and depositions faster, more accurately, with  fewer technical headaches, and at a price clients can afford.",
              "Stop negotiating with vendors for each case and instead pay just one low flat monthly fee, without data storage fees or the need for third-party technical support.",
              "With the downloadable record of your document tagging, preparing for document productions or depositions has never been easier or more efficient.",
              "Our tool isn't bloated with overpromised features that don't actually help working litigators get to the end of their cases.",
              "We have decluttered the interface so you can focus on the review, removing confusing menus, unintuitive functions, and toolbars that take up half your laptop screen.",
            ].map((text, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center 
               md:flex-row md:items-start md:text-left 
               md:space-x-4"
              >
                <div className="w-9 h-9 lg:mt-4 md:mt-10 bg-[#E4DCF5] ml-5 p-2 rounded-full font-segeo-ui flex items-center justify-center shrink-0">
                  <img src={reviewfile} alt="tool" className="w-4 h-4" />
                </div>
                <p className="text-[#7B88A8] lg:mr-15 font-roboto text-sm md:text-base max-sm:text-base max-sm:mt-6 lg:text-lg leading-[22px]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center w-full   lg:pt-5 ">
            <img
              src={twoperson}
              alt="User Guide"
              className="lg:w-full max-w-none max-sm:p-3 max-sm:w-[400px] lg:mr-20  md:w-[350px] rounded-3xl transition-transform duration-700 ease-out hover:scale-85"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTool;
