import React from "react";
import tableimg from "../../assets/tableimg.png";

const TableSection = () => {
  return (
    <>
      {/* Comparison Table Section */}
      <div className="w-full max-w-7xl mx-auto px-4   sm:px-6 lg:px-8 overflow-x-auto mt-25">
        <div className="text-2xl max-sm:text-2xl max-sm:px-3  text-center pb-6 sm:pb-10 font-extrabold text-[#2D3958]">
          <p className="text-[#2D3958] md:text-5xl md:leading-14 lg:text-5xl font-semibold gresco-bolder">
            Side by Side Comparison with a Typical eDiscovery Vendor
          </p>
        </div>

        <div className="overflow-x-auto -mt-4.5  sm:mb-12 mx-2 ">
          <table className="w-full lg:min-w-[800px] max-sm:hidden  border border-[#BBBBBB] ">
            <thead className="bg-[linear-gradient(90deg,#0db14b_50%,#39138f_60%)] text-white  ">
              <tr>
                <th className="border  border-[#7A7A7A] px-4  py-4 font-black text-base sm:text-lg lg:text-xl text-left font-['Segoe_UI']">
                  Feature
                </th>
                <th className="border border-[#7A7A7A] px-4 py-4  font-black text-lg sm:text-lg lg:text-xl text-left font-['Segoe_UI']">
                  A Typical eDiscovery Vendor
                </th>
                <th className="border border-[#7A7A7A] px-4 py-4  font-bold text-left text-lg">
                  <img
                    src={tableimg}
                    className="w-16 sm:w-20 h-6 sm:h-8"
                    alt="DocumentReview.Law"
                  />
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#7A7A7A]">
              {/* Data Storage Fees */}
              <tr>
                <td className=" border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#7A7A7A] font-['Segoe_UI']">
                  Data Storage Fees
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                  Pay by the gigabyte, can be $100s or more per month depending
                  on volume.
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                  <span className="underline">No data storage fees</span>{" "}
                  because documents are stored on your local computer, hard
                  drive, or your own trusted cloud service.
                </td>
              </tr>

              {/* Privacy */}
              <tr className="bg-[rgb(122,122,122,0.12)] hover:bg-[rgb(122,122,122,0.18)]">
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#7A7A7A] font-['Segoe_UI']">
                  Privacy
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                  Work product (in the form of document tagging and notes) is
                  stored remotely on a vendor's system.
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                  Work product is stored locally. We never collect or store your
                  documents or work product.
                </td>
              </tr>

              {/* Access */}
              <tr>
                <td className="border border-[#7A7A7A]  px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#7A7A7A] font-['Segoe_UI']">
                  Access
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                  Requires contract negotiation and costly onboarding with
                  eDiscovery vendor. Once you start using, you are locked in.
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                  Start TODAY, no onboarding required. Stop your subscription
                  any time and resume later at the prevailing rate
                  <span className="underline font-['Segoe_UI']">
                    {" "}
                    Export your work product.
                  </span>
                </td>
              </tr>

              {/* Compatible Devices */}
              <tr className="bg-[rgb(122,122,122,0.12)] hover:bg-[rgb(122,122,122,0.18)]">
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#7A7A7A] font-['Segoe_UI']">
                  Compatible Devices
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                  Only works on desktops; typically requires Chrome.
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                  Lightweight, fast-loading, and secured by Sectigo DV Positive
                  SSL, all operating systems and browsers are supported,
                  including tablets.
                </td>
              </tr>
              {/* Use  */}
              <tr>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#7A7A7A] font-['Segoe_UI']">
                  Usability
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                  Typically requires full-time or on-demand technical support
                  for setting up, configuring, and updating the review platform.
                </td>
                <td className="border border-[#7A7A7A] px-4 py-4 sm:px-6 sm:py-8 align-top text-[14px] leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                  No tech support required. Intuitive to use and free of
                  complicated and less-than-useful features.
                </td>
              </tr>
            </tbody>
          </table>

          {/*  just sm screen code is here*/}

          {/* Data Storage Fees */}
          <div>
            <div>
              <table className="sm:hidden border   border-[#7A7A7A] w-full">
                <thead className=" text-white">
                  <tr>
                    <th className="border  bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A]  leading-[22px]  py-5 text-white text-sm text-center font-['Segoe_UI']">
                      Feature
                    </th>
                    <td className="border border-[#7A7A7A]  py-5 align-top   text-[14px]  leading-[22px] font-bold text-center text-[#7A7A7A] font-['Segoe_UI']">
                      Data Storage Fees
                    </td>
                  </tr>

                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 text-white font-black text-sm text-center font-['Segoe_UI']">
                      A Typical eDiscovery Vendor
                    </th>
                    <td className="border border-[#7A7A7A] px-4 py-3 align-top   text-[14px]  leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                      Pay by the gigabyte, can be $100s or more per month
                      depending on volume.
                    </td>
                  </tr>

                  <tr>
                    <td className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 font-bold  text-sm">
                      <img
                        src={tableimg}
                        className="w-15 h-6 ml-5 "
                        alt="DocumentReview.Law"
                      />
                    </td>
                    <td className="border border-[#7A7A7A] px-4 py-3 align-top   text-[14px]  leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                      <span className="underline">No data storage fees</span>{" "}
                      because documents are stored on your local computer, hard
                      drive, or your own trusted cloud service.
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <hr className="h-2 block md:hidden lg:hidden  bg-[linear-gradient(90deg,#0db14b_50%,#39138f_100%)]" />

            {/* Privacy */}
            <div>
              <table className="sm:hidden border  border-[#7A7A7A] w-full">
                <thead className=" text-white">
                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 font-black text-sm text-center font-['Segoe_UI']">
                      Feature
                    </th>
                    <td className="border border-[#7A7A7A] bg-[#F7F5F1] px-4 py-5 align-top   text-[14px] text-center  leading-[22px] font-bold text-[#7A7A7A] font-['Segoe_UI']">
                      Privacy
                    </td>
                  </tr>

                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)]  border-[#7A7A7A] px-4 py-5 text-white font-black text-sm text-center font-['Segoe_UI']">
                      A Typical eDiscovery Vendor
                    </th>
                    <td className="border border-[#7A7A7A] bg-[#F7F5F1] px-4 py-3 align-top   text-[14px]  leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                      Work product (in the form of document tagging and notes)
                      is stored remotely on a vendor’s system.
                    </td>
                  </tr>

                  <tr>
                    <td className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 font-bold text-center text-sm">
                      <img
                        src={tableimg}
                        className="w-15 h-6 ml-5"
                        alt="DocumentReview.Law"
                      />
                    </td>
                    <td className="border border-[#7A7A7A] bg-[#F7F5F1] px-4 py-3 align-top   text-[14px]  leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                      No data storage fees because documents are stored on your
                      local computer, hard drive, or your own trusted cloud
                      service.
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <hr className="h-2 block md:hidden lg:hidden   bg-[linear-gradient(90deg,#0db14b_50%,#39138f_100%)]" />

            {/* Access */}
            <div>
              <table className="sm:hidden border  border-[#7A7A7A] w-full">
                <thead className=" text-white">
                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 font-black text-sm text-center font-['Segoe_UI']">
                      Feature
                    </th>
                    <td className="border border-[#7A7A7A] px-4 py-5 align-top   text-[14px] text-center  leading-[22px] font-bold text-[#7A7A7A] font-['Segoe_UI']">
                      Access
                    </td>
                  </tr>

                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 text-white font-black text-sm text-center font-['Segoe_UI']">
                      A Typical eDiscovery Vendor
                    </th>
                    <td className="border border-[#7A7A7A] px-4 py-3 align-top   text-[14px]  leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                      Requires contract negotiation and costly onboarding with
                      eDiscovery vendor. Once you start using, you are locked
                      in.
                    </td>
                  </tr>

                  <tr>
                    <td className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 font-bold  text-sm">
                      <img
                        src={tableimg}
                        className="w-15 h-6 ml-5"
                        alt="DocumentReview.Law"
                      />
                    </td>
                    <td className="border border-[#7A7A7A] px-4 py-3 align-top   text-[14px]  leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                      Start TODAY, no onboarding required. Stop your
                      subscription any time and resume later at the prevailing
                      rate. Export your work product.
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <hr className="h-2 block md:hidden lg:hidden  bg-[linear-gradient(90deg,#0db14b_50%,#39138f_100%)]" />

            {/* Compatible Devices */}
            <div>
              <table className="sm:hidden border  border-[#7A7A7A] w-full">
                <thead className=" text-white">
                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)] font-semibold border-[#7A7A7A] px-4 py-5  text-sm text-center font-['Segoe_UI']">
                      Feature
                    </th>
                    <td className="border border-[#7A7A7A] bg-[#F7F5F1] px-4 py-5 align-top   text-[14px]  leading-[22px] font-bold text-center text-[#7A7A7A] font-['Segoe_UI']">
                      Compatible Devices
                    </td>
                  </tr>

                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)]  border-[#7A7A7A] px-4 py-5 text-white font-black text-sm text-center font-['Segoe_UI']">
                      A Typical eDiscovery Vendor
                    </th>
                    <td className="border border-[#7A7A7A] bg-[#F7F5F1] px-4 py-3 align-top   text-[14px]  leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                      Only works on desktops; typically requires Chrome.
                    </td>
                  </tr>

                  <tr>
                    <td className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 font-bold text-left text-sm">
                      <img
                        src={tableimg}
                        className="w-15 h-6 ml-5"
                        alt="DocumentReview.Law"
                      />
                    </td>
                    <td className="border border-[#7A7A7A] bg-[#F7F5F1] px-4 py-3 align-top   text-[14px]  leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                      Lightweight, fast-loading, and secured by Sectigo DV
                      Positive SSL, all operating systems and browsers are
                      supported, including tablets.
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <hr className="h-2 block md:hidden lg:hidden  bg-[linear-gradient(90deg,#0db14b_50%,#39138f_100%)]" />

            {/* Usability */}
            <div>
              <table className="sm:hidden border  border-[#7A7A7A] w-full">
                <thead className=" text-white">
                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 font-black text-sm text-center font-['Segoe_UI']">
                      Feature
                    </th>
                    <td className="border border-[#7A7A7A] px-4 text-center py-5 align-top   text-[14px]  leading-[22px] font-bold text-[#7A7A7A] font-['Segoe_UI']">
                      Usability
                    </td>
                  </tr>

                  <tr>
                    <th className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 text-white font-black text-sm text-center font-['Segoe_UI']">
                      A Typical eDiscovery Vendor
                    </th>
                    <td className="border border-[#7A7A7A] px-4 py-3 align-top   text-[14px]  leading-[22px] font-normal text-[#7A7A7A] font-['Segoe_UI']">
                      Typically requires full-time or on-demand technical
                      support for setting up, configuring, and updating the
                      review platform.
                    </td>
                  </tr>

                  <tr>
                    <td className="border bg-[linear-gradient(#39138f_60%)] border-[#7A7A7A] px-4 py-5 font-bold text-left text-sm">
                      <img
                        src={tableimg}
                        className="w-15 h-6 ml-5"
                        alt="DocumentReview.Law"
                      />
                    </td>
                    <td className="border border-[#7A7A7A] px-4 py-3 align-top   text-[14px]  leading-[22px] font-bold text-[#0DB14B] font-['Segoe_UI']">
                      No tech support required. Intuitive to use and free of
                      complicated and less-than-useful features.
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableSection;
