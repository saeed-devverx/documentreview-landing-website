import React from "react";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        {/* Red Cancel Icon */}
        <div className="text-red-500 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Cancelled</h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your action has been cancelled successfully.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")} // Go back home
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Cancel;
