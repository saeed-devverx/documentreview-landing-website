import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Fineprint = ({ isOpen, onClose }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow re-triggering
      offset: 10,
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Re-initialize AOS when modal opens to trigger animations
      AOS.refresh();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex  mt-24  items-center justify-center z-50 bg-black/70 bg-opacity-50">
      <div
        data-aos="zoom-in-down"
        data-aos-duration="3000"
        className="bg-white py-8 border-3 border-green-500 p-8 rounded-2xl  shadow-xl max-w-xl w-full mx-4"
      >
        <div className="flex justify-between items-center mb-5 relative">
          {/* Spacer to balance the close button */}
          <div className="w-10"></div>

          {/* Centered Title */}
          <h2 className="text-4xl font-bold text-[#39138F] absolute left-1/2 transform -translate-x-1/2">
           The Fine Print
          </h2>

          {/* Close Button on the right */}
          <button
            onClick={onClose}
            className="text-green-700  text-4xl  ml-auto"
          >
            &times;
          </button>
        </div>
        <div className="text-gray-500 border text-md border-gray-600 rounded-3xl p-4 mt-5">
          <p>
           * $50/month limited to 12 months (unless cancelled earlier), following your FREE trial. If you cancel before the end of 12 months, you forfeit all remaining months at the promotional rates.
          </p>
          <p className="mt-4">
         * For tablet support, access DocumentReview.Law via your web browser of choice. Mobile phones not currently supported, but mobile support is coming in early 2025.
          </p>
          <p className="mt-4">
            * We work great with Dropbox, iCloud, Google Drive, OneDrive, and
            other top cloud-based file management services <span className="underline">that are integrated
            into your computer or tablet’s file system.</span> Direct cloud service
            integration is coming in early 2025.
          </p>
          <p className="mt-4">
            * <span className="text-green-500 underline">CONTACT US</span> for any technical support issues, and we will respond
            within one business day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fineprint;
