import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import footerlogo from "../assets/footerlogo.png";
import Fineprint from "./Fineprint";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
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
  return (
      
        <footer className="text-white bg-linear-to-r from-[#0DB14B] via-[#0DB14B] via-25% to-[#38198D]">
      {/* Main Footer Section */}
      <div className="max-w-7xl  mx-auto  sm:px-5 max-sm:px-5  md:px-5  lg:px-10    ">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[2.5fr_1fr_1fr_1fr] max-sm:gap-12 lg:gap-12  py-18 ">
          {/* Brand Column */}
          {/* Brand Column */}
<div className="space-y-4 lg:mr-2 ">
  <div className="flex items-center   font-roboto justify-center overflow-visible  md:w-40 sm:w-62  max-sm:w-62 lg:w-62 relative">
    <img
      src={footerlogo}
      alt="Review.Law Logo"
      className="w-full object-contain -translate-y-1  relative"
      data-aos="zoom-in"
    />
  </div>

  <p className="text-white text-base md:w-[250px]  lg:w-[400px] font-roboto  sm:text-lg leading-6.5 ">
  DocumentReview.Law is designed and operated <br className="hidden lg:block" />
by Adam J Schwartz, Attorney at Law, 8383<br className="hidden lg:block" />
Wilshire Blvd., Suite 800, Beverly Hills, CA 90211

  </p>
</div>

 
          {/* Support Column */}
          <div className=" lg:-ml-3 md:ml-20">
            <h3 className="text-2xl gresco-500  leading-[22px] text-[22px] mb-4 ">Support</h3>
            <ul className="space-y-5">
              <li>
                <Link
                  to="/user-guide"
                  className="text-white font-medium text-sm hover:text-gray-100 transition duration-200"
                >
                  User Guide
                </Link>
              </li>
              <li>  
                <Link
                  to="/contact"
                  className="text-white -mt-2 font-medium text-sm hover:text-gray-100 transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
 
            <div className="mt-4">
              <h3 className="text-2xl leading-[22px] text-[22px] gresco-400  font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                 <Link
  to="/terms"
  className='text-white text-[14px]  font-medium
             hover:text-gray-100 transition duration-200
             font-segoe-ui'
>
  Terms Of Use
</Link>

                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-white font-medium text-sm hover:text-gray-100 transition duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
 
          {/* Quick Links Column */}
          <div className="lg:ml-3 md:ml-12">
            <h3 className="text-2xl gresco-400  leading-[22px] text-[22px]   mb-2  pb-2">Quick Links</h3>
            <ul className="space-y-5">
              <li>
                <Link
                  to="/"
                  className="text-white font-medium text-sm hover:text-gray-100 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-white font-medium text-sm hover:text-gray-100 transition duration-200"
                >
                  Pricing Plan
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-white font-medium text-sm hover:text-gray-100 transition duration-200"
                >
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>
 
          {/* Follow Us Column */}
          <div className="pr-23  ">
            <h3 className="text-2xl gresco-500   leading-[22px] text-[22px] mb-4 pb-2">Follow Us</h3>
            <div className="flex space-x-1 " data-aos="fade-left">
  {/* Instagram */}
  <a
    href="#"
    className="group bg-white rounded-full p-3.5 sm:p-3.5 hover:bg-green-600 transition-colors duration-300"
  >
    <svg
      aria-hidden="true"
      className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    className="group bg-white rounded-full p-3.5 sm:p-3.5 hover:bg-green-600 transition-colors duration-300"
  >
    <svg
      aria-hidden="true"
      className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="#"
    className="group bg-white rounded-full  p-3.5 sm:p-3.5  hover:bg-green-600 transition-colors duration-300"
  >
    <svg
      aria-hidden="true"
      className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
    </svg>
  </a>
</div>
            <div>
              {/* Your existing homepage content */}
 
              <div>
                <button
                  onClick={openModal}
                  className="mt-4 rounded-md leading-4 gresco-semibold border-white border-2 hover:bg-white hover:text-green-400 py-4.5 px-7.5 font-normal"
                >
                  FINE PRINT  
                </button>
              </div>
 
              {/* The modal component */}
              <Fineprint isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
         {/* Bottom Copyright */}
       <div className="border-t border-[#72AA9F] py-4 mt-2"></div>
<div className="flex py-0.5 justify-center items-center mx-auto px-4 text-center">
  <p className="text-white font-roboto text-base leading-3 font-normal sm:text-medium mb-8">
    © 2026 Adam J Schwartz - All Rights Reserved
  </p>
</div>


      </div>
 
     
    </footer>
  );
};

export default Footer;
