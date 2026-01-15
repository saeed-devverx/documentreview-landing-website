import React, { useState } from "react";
import thumbnail from "../../assets/thumbnail.png";
import playIcon from "../../assets/play.svg";
import VideoPopup from "../VideoPopup";
import video from "../../assets/video.mp4";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#F8FAFC]">
        <h1 className="text-center text-[#2D3958] text-3xl sm:text-4xl md:text-[48px] md:leading-14 lg:font-semibold lg:leading-14 lg:text-5xl gresco-bolder pt-20 max-sm:pt-20">
          Here's how it works
        </h1>

        {/* Thumbnail */}
        <div className="relative flex justify-center px-4    py-2 pb-20 max-sm:mt-10">
          {/* Thumbnail Image */}
          <div className="relative lg:w-[1300px] max-w-5xl">
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="w-full rounded-xl sm:rounded-2xl shadow-lg border-2 border-blue-800 hover:border-green-400 transition-colors duration-300 hover:opacity-90 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />

            {/* Play Button Overlay */}
            <img
              src={playIcon}
              alt="Play Button"
              className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 m-auto cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        {/* Video Popup */}
        <VideoPopup
          videoSrc={video}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
};

export default Video;
