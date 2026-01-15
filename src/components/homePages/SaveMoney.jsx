
import React from "react";
import platform from "../../assets/platform.svg";
import pdf from "../../assets/images/pdf.svg";
import lock from "../../assets/images/lock.svg";
import search from "../../assets/images/search.svg";
import flag from "../../assets/images/flag.svg";
import checkIcon from "../../assets/images/checkicon.svg";

const SaveMoney = () => {
  const pricingBenefits = [
    {
      text: (
        <>
          Easy pricing model $10: <span className="text-[#0DB14B]"> $50</span>{" "}
          /user for 1 month of access. No hidden fees.
        </>
      ),
    },
    { text: "No credit card required." },
    { text: "No tiered plans, no commitments." },
    {
      text: "Cancel anytime, your subscription remains active until it expires.",
    },
    { text: "Sign up again anytime. No reactivation fees." },
    {
      text: "Our half-off introductory offer won't last long. Lock in your discounted $30/mo rate now!",
    },
  ];

  const platformFeatures = [
    {
      img: platform,
      text: "Review documents stored on your computer or cloud service faster and without the hassle and expense of third party vendors.",
    },
    {
      img: pdf,
      text: "Quickly review just a few, or very many, documents of any format, including .pdf, .docx, .xlsx, .txt, .rtf, .jpg, .png, .tiff, etc.",
    },
    {
      img: lock,
      text: "All documents remain securely stored on your local computer or own trusted cloud account.",
    },
    {
      img: search,
      text: "Search within a document and across all loaded documents.",
    },
    {
      img: flag,
      text: "Pin key docs, apply color-coded tags, and download a sortable list of tagged docs to preserve your work product.",
    },
  ];

  return (
    <>
      {/* Fine Print Button */}
      <div className="mb-95">
        <div className="flex justify-center md:mt-4 mt-8">
          <button
            className="
  border-2 border-[#0DB14B] text-[#0DB14B]
  py-2.5 sm:py-3.5 px-4 sm:px-6 font-normal 
  text-[15px] mx-auto mb-20
  transition-all duration-600 transform
  hover:bg-[#39138F] hover:text-white hover:border-[#39138F] 
  hover:scale-90
  gresco-400
"
          >
            FINE PRINT
          </button>
        </div>

        {/* Sign Up Section */}
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center md:px-4 max-sm:px-2.5 ">
          <h1 className="text-[24px] leading-9 lg:text-5xl md:text-[38px] md:leading-[57px] font-bold text-[#2D3958] lg:leading-[65px] gresco-bolds">
            <span className="text-[#0db14b] underline ">Sign Up</span> to save
            money on doc review with a FREE{" "}
            <span className="font-robots">30</span>-day trial, then{" "}
            <s className="text-[#888888] font-robots">
              {" "}
              <span className="gresco-bolds">$</span>100
            </s>{" "}
            <span className="text-[#3F0071] ">
              <span className="gresco-bolds">$</span>
              <span className="font-robots">50/</span>
              <span className="gresco-bolds">mo</span>
            </span>
          </h1>

          <p className="text-[#7b88a8] lg:text-[22px] md:text-[22px] max-sm:px-1 font-normal lg:mb-6 md:mb-8  pt-4  font-roboto">
            Half-Off Introductory Offer for 12 Months (Limited Time)
          </p>
        </div>
      </div>
      {/* Gradient Background Section */}
      <div className="w-full bg-[linear-gradient(145deg,#0db14b_0%,#39138f_100%)] pt-43  z-50 mt-8 relative ">
        {/* Pricing Box */}
        <div className="w-full  lg:max-w-[1240px] mx-auto px-4 absolute md:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
          <div className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
            <div className="p-8 sm:p-10 md:p-12">
              <h3 className="text-center text-[#0DB14B] font-medium mb-4 text-[18px] leading-[18px] md:text-lg">
                Our Pricing Model
              </h3>

              <div className="text-center text-3xl sm:text-4xl md:text-5xl  text-[#3F0071] my-8 font-roboto">
                <s className="text-[#888888] text-[30px] leading-[65px] md:text-3xl mr-2 font-bold">
                  $100
                </s>{" "}
                <span className="font-bold text-[48px] leading-[65px]">$50/mo</span>
              </div>

              <p className="hidden md:block text-center text-gray-600  text-sm sm:text-base mt-3 mb-3 font-normal font-roboto">
                Limited-Time Half-Off Offer for 12 months.
                <span className="text-green-600 underline ml-1 cursor-pointer hover:text-green-700">
                  Get Started Today. 
                </span >
                 With a Free 30 - <br className="block lg:hidden"/>Day Trial
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 max-sm:px-2  md:px-12 ml-4 md:ml-20">
                {pricingBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left max-sm:gap-5 md:space-y-2 md:gap-5 lg:gap-2  my-5"
                  >
                    <img
                      src={checkIcon}
                      alt="Platform feature"
                      className="w-9 h-9 bg-purple-100 p-2 max-sm:mt-4 rounded-3xl"
                    />
                    <span className="text-[#a3a4a8] text-[18px] md:text-lg font-normal hover:text-[#2D3958] font-roboto leading-[22px] max-w-md">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Purple Strip */}
            <div className="bg-[#3F0071] text-center py-4  sm:py-6 text-white text-[15px] leading-[15px]  cursor-pointer hover:bg-[#2d0055] transition-colors font-roboto">
              <span className="font-bold ">START YOUR FREE TRIAL</span>
            </div>
          </div>
        </div>

        {/* Platform at a Glance */}
        <div className="  mx-auto lg:px-80 md:px-40 max-sm:mt-30 max-sm:px-3 pt-136 sm:pt-40 md:pt-70">
          <div className=" border-2 border-white rounded-xl p-6 sm:p-8 md:p-10 text-white">
            <h2 className=" text-4xl mb-6 gresco-500 leading-9 sm:mb-8 text-center font-medium">
              Platform at a Glance
            </h2>

            <ul className="space-y-3 px-1 sm:px-6 md:px-12 ">
              {platformFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-x-3 my-8 gap-4"
                >
                  <img
                    src={feature.img}
                    alt="Platform feature"
                    className="w-9 h-9 bg-purple-100 p-2 lg:mt-1  md:mt-8 rounded-3xl mb-2 md:mb-0"
                  />
                  <span className="text-[18px] md:text-lg font-normal leading-[22px] text-white font-roboto">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="w-full px-1  lg:max-w-[1250px] mx-auto  text-center mt-20">
          <h1 className="md:text-[44px] md:px-20 text-[30px] leading-9 font-bold text-white gresco-bold md:leading-11 font-robots">
            Start your <span className="font-roboto">30</span>-day FREE trial
            today, and unlock affordable document management for cases of all
            sizes!
          </h1>
          <div className="pt-14">
            <button
              onClick={() =>
                (window.location.href =
                  "https://documentreview.devverx.us/checkout/?add-to-cart=270")
              }
              className="
    bg-white text-[#39138F]
    py-4 px-7 font-semibold
    text-[15px] mx-auto mb-20 rounded
    transition-all duration-500 ease-in-out transform
    hover:bg-[#39138F] hover:text-white hover:border-[#39138F]
    hover:scale-90
    hover:shadow-[inset_0_0_12px_rgba(0,0,0,0.25)]
    gresco-400
  "
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveMoney;
 