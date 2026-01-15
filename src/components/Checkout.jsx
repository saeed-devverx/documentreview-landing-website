import React from "react";
import { useState } from "react";
import downarrow from "../assets/downarrow.svg";
import heroimage from "../assets/heroimage.png";

export default function Checkout() {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);
  const [showCoupon, setShowCoupon] = useState(false);
  const [zipCode, setZipCode] = useState("");

  const toggleCoupon = () => setShowCoupon(!showCoupon);
  return (
    <div
      className="
        w-full flex flex-col lg:flex-row justify-between lg:justify-around gap-2 sm:gap-4 
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 
        py-6 sm:py-8 md:py-10 mt-16 sm:mt-20 md:mt-24 mx-auto 
      "
    >
      {/* LEFT SECTION — FORM */}
      <div className="w-full lg:w-2/4 space-y-6 sm:space-y-8 md:space-y-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Checkout</h1>

        {/* Contact Information */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Contact information
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            We'll use this email to send you details and updates about your
            order.
          </p>

          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base"
          />

          <input
            type="password"
            placeholder="Create a password"
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base"
          />
        </div>

        {/* Billing Address */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Billing address
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Enter the billing address that matches your payment method.
          </p>

          <select className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base">
            <option>United States (US)</option>
            <option>United Kingdom (UK)</option>
            <option>Pakistan</option>
            <option>India</option>
          </select>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full sm:w-1/2 border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full sm:w-1/2 border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base"
            />
          </div>

          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base"
          />

          <p className="text-gray-600 cursor-pointer text-xs sm:text-sm">
            + Add apartment, suite, etc.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="City"
              className="w-full sm:w-1/2 border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base"
            />

            <select className="w-full sm:w-1/2 border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base">
              <option>California</option>
              <option>New York</option>
              <option>Texas</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full sm:w-1/2 border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Phone (optional)"
              className="w-full sm:w-1/2 border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base"
            />
          </div>
          <div className="flex gap-4 sm:gap-5 items-center mt-6 sm:mt-8 md:mt-10">
            <input
              type="checkbox"
              className="w-5 h-5 sm:w-6 sm:h-6 border border-gray-400 rounded accent-black bg-white cursor-pointer"
            />

            <p className="text-sm sm:text-base">Add a note to your order</p>
          </div>
          <hr className="border-gray-300 sm:border-gray-500 mt-8 sm:mt-10 md:mt-14" />
          <div className="flex gap-4 sm:gap-5 items-center mt-10 sm:mt-16 md:mt-20">
            <input
              type="checkbox"
              className="w-5 h-5 sm:w-6 sm:h-6 border border-gray-400 rounded accent-black bg-white cursor-pointer"
            />

            <p className="text-xs sm:text-sm">
              You must accept our{" "}
              <u className="text-green-500 sm:text-green-400 cursor-pointer ">
                Terms and Conditions
              </u>{" "}
              and{" "}
              <u className="text-green-500 sm:text-green-400 cursor-pointer ">Privacy Policy </u>
              to continue with your purchase.
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-10 sm:mt-12 md:mt-14">
            <div className="flex gap-2 cursor-pointer text-green-500 sm:text-green-400 items-center w-full sm:w-auto justify-center sm:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
                className="text-green-500 sm:text-green-400"
              >
                <path
                  d="M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-sm sm:text-base">
                <u>Return to Cart</u>
              </span>
            </div>

            <div className="w-full sm:w-auto">
              <button className="w-full cursor-pointer text-center px-6 sm:px-8 md:px-24 py-3 sm:py-4 text-pink-700 border border-pink-700 hover:bg-pink-700 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION — ORDER SUMMARY */}
      <div className="w-full lg:w-1/3 lg:self-start sticky top-0 mt-8 lg:mt-0">
        <div className="lg:sticky lg:top-0">
          <div className="border border-gray-300 rounded-xl p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Order summary
            </h2>

            <div className="flex gap-3 sm:gap-4">
              <img
                src={heroimage}
                alt="Product"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between flex-col sm:flex-row gap-1 sm:gap-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    Document Review Tool
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-through">$30.00</p>
                </div>
                <p className="text-purple-700 font-bold text-base sm:text-lg">
                  $30.00 every month
                </p>

                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Modern and sleek UI template for document review app...
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mt-1">
                  Free trial: 30 days
                </p>
              </div>
            </div>
            {/*  */}
            <div className="border-t pt-3 sm:pt-4 space-y-2">
              {/* Main clickable row */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleCoupon}
              >
                <p className="text-gray-700 font-medium text-sm sm:text-base">Add coupons</p>
                <img
                  src={downarrow}
                  className={`transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${
                    showCoupon ? "rotate-180" : ""
                  }`}
                  alt="Arrow"
                />
              </div>

              {/* Collapsible section */}
              {showCoupon && (
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="flex-1 text-pink-300 py-2 sm:py-3 rounded-lg border border-pink-700 hover:bg-pink-50 text-sm sm:text-base">
                    Apply
                  </button>
                </div>
              )}
            </div>

            <div className="border-t pt-3 sm:pt-4 space-y-2">
              <div className="flex justify-between text-gray-900 text-sm sm:text-base">
                <p>Subtotal</p>
                <p>$0.00</p>
              </div>

              <div className="flex justify-between text-base sm:text-lg font-bold text-gray-900">
                <p>Total due today</p>
                <p>$0.00</p>
              </div>
            </div>

            <div className="border-t pt-3 sm:pt-4 space-y-2">
              <div className="flex justify-between">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  Monthly recurring total
                </p>
                <p className="text-gray-800 text-sm sm:text-base">$30.00</p>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm">Starting: January 7, 2026</p>

              {/* Details toggle */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleDetails}
              >
                <p className="text-gray-700 text-sm sm:text-base">Details</p>
                <img
                  src={downarrow}
                  className={`transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 ${
                    showDetails ? "rotate-180" : ""
                  }`}
                  alt="Arrow"
                />
              </div>

              {/* Collapsible section */}
              {showDetails && (
                <div className="mt-2 space-y-3 sm:space-y-5  ">
                  <div className="flex justify-between text-gray-700 text-sm sm:text-base border-b pb-2 sm:pb-3">
                    <p>Subtotal</p>
                    <p>$25.00</p>
                  </div>
                  <div className="flex justify-between text-gray-700 text-sm sm:text-base border-b pb-2 sm:pb-3">
                    <p>Taxes</p>
                    <p>$5.00</p>
                  </div>
                  <div className="flex justify-between font-semibold text-gray-900 text-sm sm:text-base">
                    <p>Total</p>
                    <p>$30.00</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}