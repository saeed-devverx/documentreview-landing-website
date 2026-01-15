import heroImage from "../../assets/heroimage.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Fineprint from "./../Fineprint";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section className="overflow-x-hidden bg-[linear-gradient(140deg,#39138f_0%,#0db14b_100%)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 max-sm:px-7 max-sm:mt-20 lg:px-12.5 md:px-7.5 py-14 lg:py-24 flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between ">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-white space-y-4 max-sm:space-y-3 pr-1">
          <p className="text-[25px]  sm:text-[25px] md:text-[30px] md:leading-[30px]  leading-[25px] font-bold text-[#0db14b] montserrat  montserrat-medium pt-6">
            Made by a lawyer for lawyers
          </p>

          <h1 className="lg:text-[50px] md:text-[50px] text-[30px] pt-1  md:text-3xl lg:leading-[60px] leading-9 md:leading-[60px] font-semibold gresco-500">
            Fast, Secure & Affordable <br className="hidden lg:block " />
            Legal Document Review tools
          </h1>

          <p className="text-medium max-sm:text-xl lg:text-[18px] md:text-[18px] leading-8 font-normal font-roboto pt-1.5">
            Review legal documents on your computer. It's faster and easier with
            our browser-based tools. No cloud, no IT team, and no third-party
            support needed. Designed for attorneys, small law firms, and
            litigation teams. This secure eDiscovery option saves time and cuts
            legal tech costs.
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row md:flex-row gap-2.5 pt-4">
            <button
              onClick={() => navigate("/chooseplan")}
              className="lg:px-8 lg:py-4.5 md:px-8 md:py-3.5 max-sm:px-8 max-sm:py-5.5   cursor-pointer rounded-xs gresco-bold gresco-400 bg-[#0DB14B] hover:bg-[#2F3680] text-white font-medium text-[15px] font-gresco transition leading-[15px] duration-700 border-black border-0.5"
            >
              {/* CHOOSE YOUR TOOL */}  CHOOSE YOUR Plan
            </button>

            <div>
              <button
                onClick={openModal}
                className="lg:px-7.5 lg:py-4.5  md:px-7.5 md:py-3.5 max-sm:px-8 max-sm:py-4  border-2 rounded-xs gresco-bold gresco-400 lg:leading-[15px] border-white text-white hover:bg-white hover:text-[#3E35A2] font-medium text-[15px] font-gresco transition duration-700"
              >
                FINE PRINT
              </button>
              <Fineprint isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 lg:pl-20 mt-8 lg:mt-0 flex justify-center items-center"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <div
            className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl overflow-hidden"
            onMouseMove={(e) => {
              const img = e.currentTarget.querySelector("img");
              const rect = e.currentTarget.getBoundingClientRect();

              const x = e.clientX - rect.left - rect.width / 150;
              const y = e.clientY - rect.top - rect.height / 150;

              img.style.transform = `translate(${-x / 20}px, ${
                -y / 20
              }px) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              img.style.transform = "translate(0,0) scale(1)";
            }}
          >
            <img
              src={heroImage}
              alt="Legal Document Review"
              className="w-full h-auto object-contain transition-transform duration-700 transform max-sm:scale-100 md:scale-105 lg:scale-128"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
 