import React from "react";
import Hero from "../Hero";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="pt-22 bg-white">
      {/* FULL-WIDTH HERO */}
      <Hero title="Contact Us" subtitle="Contact Us" />

      {/* PAGE CONTENT */}
      <div className="min-h-screen bg-white py-16">
        <div className="text-center mb-18 ">
          <h1 className="text-[50px] leading-[50px] max-sm:text-[38px] max-sm:leading-9 gresco-bolder lg:mt-1.5 text-[#2E3A58] ">
            Questions? Issues? Comments?
          </h1>
          <p className="text-gray-600 mt-5 font-medium sm:text-4 sm-leading-6 max-sm:px-10 text-base outfit max-w-4xl mx-auto px-4">
            Reach out and send us an email using the form provided below. We endeavor to respond within 1 business day.
          </p>
        </div>

        {/* RESPONSIVE GRID: Form (Left) + Info (Right) */}
        <div className="max-w-7xl mx-auto   max-sm:px-6 md:px-5 lg:px-11">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-10">
            {/* LEFT COLUMN - FORM */}
            <div className="bg-[#F8FAFC] lg:w-[600px] rounded-2xl shadow px-6 py-10 lg:px-11.5 lg:mt-0.5 lg:py-12">
              <p className=" mt-4 lg:mt-20 text-gray-800 mb-6 outfit text-base font-medium">
                Email Support
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 text-gray-500 border border-[#e8e8e8] bg-white rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none outfitinput"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 text-gray-500 border bg-white border-[#e8e8e8] rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none outfitinput"
                      placeholder=" Last Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="affiliation"
                      name="affiliation"
                      className="w-full px-4 py-3 text-gray-500 border bg-white border-[#e8e8e8] rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none outfitinput"
                      placeholder="Firm/Employer/Affiliation"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 text-gray-500 py-3 border bg-white border-[#e8e8e8] rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none outfitinput"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    className="w-full px-4 py-3  text-gray-500 border bg-white border-[#e8e8e8] rounded  resize-none outline-none outfitinput"
                    placeholder="Messages "
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#39138F] hover:bg-[#0DB14B] text-white font-medium py-3 px-11 rounded  "
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN - INFO CARDS */}
            <div className="flex flex-col justify-center max-sm:mt-10  md:ml-10 lg:ml-10 gap-12">
              <div className="bg-[#39138F] py-12 lg:py-17 flex flex-col items-center justify-center text-center text-white px-8 rounded-3xl shadow-md">
                <h2 className="text-[22px] leading-[26px] font-semibold mb-4 outfit">Contact Us</h2>
                <p className="text-lg outfit font-normal">c/o Adam J Schwartz, Attorney at Law</p>
                <p  className="text-lg outfit font-normal">8383 Wilshire Blvd., Suite 800</p>
                <p  className="text-lg outfit font-normal">Beverly Hills, CA 90211</p>
              </div>

              <div className="bg-green-500 text-white text-center md:px-5 max-sm:px-5 px-15 py-10 rounded-3xl shadow-md">
                <h2 className="text-[22px] leading-[26px] font-semibold mb-4 outfit">Help & Support</h2>
                <p className="mb-6 text-lg outfit leading-[26px] font-normal">
                 If you are having a technical issue with the review tool or trouble logging in, please send us a message and we'll get back to you as soon as possible.
                </p>
                <p className="text-lg outfit font-normal">
                 We'd also love to talk about how we might work together. Please feel free to reach out with inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;