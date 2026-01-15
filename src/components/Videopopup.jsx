import React from 'react'

const VideoPopup =({ videoSrc, isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="relative w-full h-full">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Full-screen Video */}
        <video
          className="w-full h-full object-contain"
          controls
          autoPlay
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup
