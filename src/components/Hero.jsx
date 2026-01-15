import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="w-full  bg-linear-to-r to-[#0DAD4C] via-[#38198D] via-25% from-[#38198D] py-25.5">
      <div className="text-center">
        <h1 className="lg:text-[50px] lg:leading-[50px] max-sm:text-5xl md:text-5xl gresco-bolder text-white mb-5">
          {title}
        </h1>

        <p className="text-[#FFFFFF]      text-[16px] outfit">
          <Link to="/" className=" underline    ">
            Home
          </Link>
          <span className="px-0.5">/</span>
          <span className="text-white ">{subtitle}</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
