import React from "react";
import founderimg from "../../assets/founderimg.jpg";

const Founder = () => {
  return (
    <>
      {/* founder section */}
      <div className=" bg-[#F8FAFC] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-8 max-sm:px-4 mt-4 gap-6 grid grid-col-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="lg:ml-7 lg:mr-10 md:ml-4 md:mr-5 order-2 md:order-1 max-sm:px-1.5 ">
            <h1 className="text-4xl gresco-500 leading-9 font-gresco-bolde  text-[#2D3958] mb-4">
              Meet Our Founder
            </h1>
            <p className="text-[#999999]  font-roboto font-normal font-roboto  leading-[26px] mb-3 text-sm sm:text-base">
              Adam J Schwartz, Esq., founded DocumentReview.Law to address a
              frustration he encountered firsthand: finding a fast, affordable,
              and  intuitive app for reviewing large volumes of PDFs on
              his iPad. When no suitable tool existed, Adam set out to
              create one himself, learning JavaScript  and developing the
              first version of the app in his converted  garage. Through
              hours of testing and refining, Adam laid the groundwork  for
              a streamlined, user-friendly review platform tailored specifically
              to the needs of busy legal professionals
            </p>
            <p className="text-[#999999]   font-roboto font-normal leading-6 mb-3 text-sm sm:text-base">
              With close to two decades of legal experience, Adam provides
              general counsel services to several small creative
              businesses and freelance  litigation services to attorneys
              across Southern California, focusing on
              copyright, trade secrets, employment, and complex business
              litigation. As a litigation  associate in the Washington,
              D.C. office of a leading global law firm, Adam spent the
              first five years of his career defending antitrust,
              securities fraud, FCPA, and other white collar matters. Adam
              graduated with honors from The George Washington University
              Law School, and he  is licensed to practice in California
              and the District of Columbia.
            </p>

            <p className="text-[#999999] font-roboto font-normal  lg:mt-5 leading-6 mb-5 text-sm sm:text-base">
              Experience the solution Adam designed from the ground up —
              DocumentReview.Law — built to simplify document review with
              secure, immediate access and a straightforward, attorney- focused
              design.
              <span className="text-green-600 underline font-medium cursor-pointer hover:text-[rgb(57,19,143)]">
                Sign up today for a free trial  
              </span>
                 and discover a tool crafted by an attorney, for  attorneys.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 max-sm:px-1.5">
            <img
              src={founderimg}
              alt="Founder"
              className="
      md:w-[400px] 
      md:h-[230px]
      lg:w-[580px] 
      lg:h-[390px]
      mr-9
      transform transition-transform duration-1100
      hover:scale-85
      rounded-3xl  object-cover border-0  border-black shadow-xl
    "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
 