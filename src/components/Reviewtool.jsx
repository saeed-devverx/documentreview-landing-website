import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero1 from "../assets/heroimage.png";
import hero2 from "../assets/logo.png";
import reviewtools from "../assets/reviewtools.png";
import revone from "../assets/revone.png";
import revtwo from "../assets/revtwo.png";
import revthree from "../assets/revthree.png";

export default function DocumentReviewPreview() {



  const [activeTab, setActiveTab] = useState("description");


  const navigate = useNavigate();

  return (
    <div className="w-full bg-white flex flex-col items-center  max-sm:px-3 md:px-16 lg:px-16 xl:px-24 py-6 sm:py-8 md:py-10 mt-16 sm:mt-20 md:mt-24 gap-6 sm:gap-8">
      {/* Flex container for Image + Text */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-6 sm:gap-8 md:gap-14">

        {/* Left: Image Preview */}
        <div className="flex-1 flex flex-col items-center w-full">
          <div
            onMouseMove={(e) => {
              const img = e.currentTarget.querySelector("img");
              const rect = e.currentTarget.getBoundingClientRect();

              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;

              img.style.transform = `translate(${-x / 3}px, ${-y / 3}px) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              img.style.transform = "translate(0, 0) scale(1)";
            }}
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] 
             bg-black  overflow-hidden 
             flex items-center justify-center cursor-pointer"
          >
            <img
              src={reviewtools}
              alt="Preview"
              className="w-full h-full object-contain sm:object-cover
               transition-transform duration-300 ease-out"
            />
          </div>


          {/* Thumbnails */}
          <div className="grid grid-cols-4   lg:w-full ">
            {/* Main / Active Image */}
            <img
              src={reviewtools}
              alt=""
              className="lg:h-25 max-sm:h-20  md:w-[200px] md:h-40 max-sm:w-[150px]  lg:w-[138px] object-cover cursor-pointer 
                 transition  
               opacity-100 "
            />

            {/* Other Images */}
            {[revone, revtwo, revthree].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="lg:h-25 max-sm:h-20   max-sm:w-[150px]  lg:w-[138px] object-cover cursor-pointer 
                  transition 
                 opacity-30 
                 hover:opacity-100 "
              />
            ))}
          </div>

        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col pt-2 max-sm:pt-4  lg:mt-0 md:-mt-10   space-y-3 sm:space-y-4 px-2 sm:px-4 md:px-0">
          <h1 className="text-[40px]  lg:leading-12  font-base text-gray-900 ">
            Document Review Tool
          </h1>

          <div className="flex lg:flex-row  max-sm:flex-row sm:items-center gap-2 sm:gap-3">
            <div className="flex items-center  text-[20px] leading-[30px] font-normal gap-2">
              <s className="text-[#B5B052] text-lg ">$100.00</s>
              <span className="text-yellow-600 underline   font-bold">
                $50.00
              </span>
            </div>
            <span className="text-[#B5B052] text-sm max-sm:mt-2 sm:text-base md:text-lg">
              / month with a 30-day free trial
            </span>
          </div>

          <p className="text-gray-600  text-4 leading-6 font-normal ">
            <span className="font-bold text-black">  DocumentReview.Law  </span>is a purpose-built legal document review tool designed to make discovery and litigation support simple, fast, and affordable. Built by lawyers, it focuses on what matters most: speed, clarity, and control.
          </p>

          {/* PLACE ORDER BUTTON */}
          <button
            onClick={() => navigate("/checkout")}
            className=" w-30 py-2 bg-purple-700 text-white rounded-sm cursor-pointer text-4 font-semibold hover:bg-purple-800 transition"
          >
            Place Order
          </button>

          <p className="text-gray-700 font-medium text-sm sm:text-base"> Category:{" "} <button onClick={() => navigate("/drl")} className="text-purple-600 font-semibold hover:underline" > DRL Tool </button> </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full max-w-6xl lg:mt-0  sm:mt-6 md:mt-2">
        <div className="flex overflow-x-auto sm:overflow-visible border-b pb-1">
          <button
            className={`px-3 sm:px-4 py-2 lg:text-sm max-sm:text-base md:text-lg font-medium whitespace-nowrap rounded-t-lg transition-colors duration-300 ${activeTab === "description"
                ? "bg-gray-300 border-t border-l border-r "
                : "text-gray-600 hover:text-gray-900"
              }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          <button
            className={`px-3 sm:px-4 py-2 lg:text-sm max-sm:text-base md:text-lg font-medium whitespace-nowrap rounded-t-lg transition-colors duration-300 ${activeTab === "reviews"
                ? "bg-gray-300 border-t border-l border-r"
                : "text-gray-600 hover:text-gray-900"
              }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (0)
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          {activeTab === "description" && (
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <h1 className="font-bold lg:text-xl max-sm:text-2xl md:text-[29px] leading-tight sm:leading-[35px] text-[#333333]">
                Description
              </h1>

              <p className="text-4 sm:text-base md:text-[16px] lg:leading-6 font-normal sm:leading-[22px] text-[#666666]">
                <span className="font-bold text-black">  DocumentReview.Law  </span>is a purpose-built legal document review tool designed to make discovery and litigation support simple, fast, and affordable. Built by lawyers, it focuses on what matters most: speed, clarity, and control. With a clean browser-based interface, you can upload, review, and tag thousands of documents PDFs, Word, Excel, images, and more without the burden of expensive storage fees or complex eDiscovery platforms.
              </p>

              <p className="lg:leading-6 font-normal text-4">Your documents and work product stay fully under your control, whether stored locally or on your trusted cloud. Custom tagging, color coding, and exportable reports let you organize evidence, prepare productions, and collaborate with ease. Backed by strong security and transparent pricing, DocumentReview.Law delivers professional-grade review power at a fraction of the cost helping lawyers and firms of any size handle discovery efficiently, privately, and confidently.</p>
            </div>
          )}

          {activeTab === "reviews" && (

            <div>
              <p className="font-bold text-[29px] leading-[35px] arone">Reviews</p>
              <div className="  text-[#333333]
  mt-5">

                <p className="text-4 leading-6  ">There are no reviews yet.</p>
                <p className="">
                  Only logged inss customers who have purchased this product may leave a review.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}