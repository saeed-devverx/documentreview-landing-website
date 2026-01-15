import React from "react";

const Forgetpass = () => {
  return (
    <div className=" bg-white mt-20 pb-10  max-sm:px-15  md:px-15 lg:px-20 pt-24">
      <div className="max-w-2xl">
        {/* Description */}
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Lost your password? Please enter your username or email address.
          You will <br className="hidden lg:block" /> receive a link to create a new password via email.
        </p>

        {/* Label */}
        <label className="block text-sm font-medium mb-2">
          Username or email <span className="text-red-600">*</span>
        </label>

        {/* Input */}
        <input
          type="text"
          className="lg:w-[550px] max-sm:w-[320px] md:w-[640px] h-12 border rounded-sm border-gray-300 hover:border-black  lg:px-4 outline-none mb-8"
          required
        />

        {/* Button */}
        <button className="bg-[#5BC0EB] text-sm text-white px-6 py-2 rounded-sm font-semibold hover:opacity-90 transition">
          Reset password
        </button>
      </div>
    </div>
  );
};

export default Forgetpass;
