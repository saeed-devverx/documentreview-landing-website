import React, { useState } from "react";
import Hero from "../../components/Hero";
import downarrow from "../../assets/downarrow.svg";
import userone from "../../assets/Userguideimages/userone.png";
import usertwo from "../../assets/Userguideimages/usertwo.png";
import userthree from "../../assets/Userguideimages/userthree.png";
import userfour from "../../assets/Userguideimages/userfour.png";
import userfive from "../../assets/Userguideimages/userfive.png";
import usersix from "../../assets/Userguideimages/usersix.png";
import userseven from "../../assets/Userguideimages/userseven.png";
import usereight from "../../assets/Userguideimages/usereight.png";
import usernine from "../../assets/Userguideimages/usernine.png";
import userten from "../../assets/Userguideimages/userten.png";
import userelleven from "../../assets/Userguideimages/userelleven.png";
import usertwellve from "../../assets/Userguideimages/usertwellve.png";
import userthirteen from "../../assets/Userguideimages/userthirteen.png";
import userfourteen from "../../assets/Userguideimages/userfourteen.png";
import userfifteen from "../../assets/Userguideimages/userfifteen.png";
import usersixteen from "../../assets/Userguideimages/usersixteen.png";
import userseventeen from "../../assets/Userguideimages/userseventeen.png";
import usereighteen from "../../assets/Userguideimages/usereighteen.png";

const User = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Table of contents items
  const tocItems = [
    "Add Files to the Review Tool",
    "Navigate and view documents",
    "Pin Documents",
    "Make custom tags",
    "Tag pinned documents",
    "Delete tags, pins, and documents",
    "Search within and across documents",
  ];

  const sections = [
    {
      id: 1,
      title: "ADD FILES TO THE REVIEW TOOL",
      description:
        "Add documents to the reviewer by clicking add file and selecting files from your computer. The reviewer will accept files with the following extensions: .pdf, .doc(x), .xls(x), .txt, .gif, .jpeg, .png., .tiff. If you select an entire folder, the reviewer will exclude any documents in incompatible file formats. To access cloud documents, the cloud service must be integrated into your computer's file system. Select cloud documents just like documents stored on your computer. We recommend that if you have more than 500 documents to review at one time, consider conducting the review in several smaller batches.",
      img: "",
    },
    {
      id: 2,
      title: "NAVIGATE AND VIEW DOCUMENTS",
      description:
        "Use the buttons, dropdown menu, or keyboard shortcuts to navigate between documents. Use the buttons or keyboard shortcuts (Windows devices only) to flip between pages. Use the buttons or keyboard shortcuts to zoom and rotate pdfs and image files. Zoom and rotate are not functional when a Word doc or Excel spreadsheet is in the reviewer.",
      img: "",
    },
    {
      id: 3,
      title: "Pin Documents",
      description:
        "Pin hot docs to keep track of them. (See Tag Pinned Documents, infra, for adding tags to pinned documents.) The reviewer lists pinned documents in the sidebar. Download a list of pinned documents along with your tagging by clicking the purple download pinned button on the righthand side of the toolbar. Your browser will generate a .csv file which you can easily open in Excel, allowing you to sort and analyze your document review work product.",
      img: "",
    },
    {
      id: 4,
      title: "Make custom tags",
      description:
        "Apply custom tags to pinned documents. Click the manage tags button to create tags with your own labels. Click the color button to choose from over 16 million colors for each tag, and then click the check mark to save the tag. To edit a tag, select it, change the label or color, and click the check mark again. Your pinned documents list will be updated with the amended tag.",
      img: "",
    },
    {
      id: 5,
      title: "Tag pinned documents",
      description:
        "Apply your tags to pinned documents using the dropdown menus that appear on the pinned documents list. Select the tag you want to add from the drop-down menu. You can add multiple tags to each document.",
      img: "",
    },
    {
      id: 6,
      title: "Delete tags, pins, and documents",
      description:
        "Delete pins and tags individually by clicking the delete icon, or en masse by using the check boxes or clicking 'select all.' Deleting pins or tags does not delete the document from the reviewer. To delete one document from the reviewer, click the delete document button and confirm your choice. Delete all documents from the reviewer by clicking the red delete all button and confirming your choice. Documents are never deleted from your computer or cloud service.",
      img: "",
    },
    {
      id: 7,
      title: "Search within and across documents",
      description:
        "Enter a discrete term in the search box and then search within a document by clicking the 'within doc' button. Search across all documents loaded into the reviewer by clicking 'across doc' button. (Boolean searching is not currently supported.) Click on a search result to load that page or document.",
      img: "",
    },
  ];

  // Function to handle TOC item click
  const handleTocClick = (index) => {
    const sectionId = index + 1;
    const sectionElement = document.getElementById(`section-${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-white pt-22">
      {/* HERO */}
      <Hero title="User Guide" subtitle="User Guide" />

      {/* MAIN LAYOUT - Responsive grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 md:gap-4 md:px-4 md:mt-4 sm:grid-cols-1 md:grid-cols-7 lg:grid-cols-7 gap-4 sm:gap-4  max-sm:mt-10 lg:gap-2 lg:mt-7">
        {/* TABLE OF CONTENTS - Full width on mobile/tablet, sidebar on desktop */}
        <aside className="col-span-1  sm:col-span-1 md:col-span-2 lg:col-span-2 sticky lg:top-25 top-30 md:top-25 w-full sm:w-full md:w-full lg:w-[326px] h-fit border-2 border-purple-900 rounded-sm transition-all duration-300 mx-auto sm:mx-0 md:mx-0 lg:mx-0 bg-white z-50">
          <div
            className={`flex items-center py-2.5 sm:py-2.5 justify-between cursor-pointer ${
              isOpen ? "border-b-2 border-purple-900 pb-2.5" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Responsive text sizes */}
            <h2 className="font-bold text-green-600 gresco-bolder leading-[29px] px-3 text-[24px] md:text-[24px] lg:text-2xl">
              TABLE OF CONTENTS
            </h2>
            {/* Responsive arrow sizes */}
            <img
              src={downarrow}
              alt="toggle"
              className={`transform transition-transform duration-300 w-8 h-8 sm:w-6 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-8 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Smooth animated content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2 sm:space-y-2 text-sm sm:text-sm p-3 sm:p-3 md:p-4">
              {tocItems.map((item, index) => (
                <li
                  key={index}
                  className="text-[#7A7A7A] text-sm sm:text-sm md:text-sm lg:text-base font-normal flex items-start"
                >
                  <span className="mr-2">{index + 1}.</span>
                  <button
                    onClick={() => handleTocClick(index)}
                    className="hover:underline hover:text-green-500 cursor-pointer text-left flex-1"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* CONTENT - Responsive column spans */}
        <main className="col-span-1 sm:col-span-1 max-sm:mt-8 lg:mt-0 md:mt-0 md:col-span-5 lg:col-span-5 lg:pr-5 md:pr-5">
          <h1 className="text-center  gresco-bolder leading-8 text-[#2E3A58] text-[32px] md:text-[32px] mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            How to Use <span className="text-[#4B0082]">DocumentReview</span>.
            <span className="text-green-600">Law</span>
          </h1>

          {sections.map((section) => (
            <section
              key={section.id}
              id={`section-${section.id}`}
              className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 scroll-mt-24"
            >
              <h2 className="text-center text-[29px] md:text-[29px] lg:text-[32px] lg:pb-1 lg:leading-8 md:leading-[29px] leading-[29px] gresco-bolder font-bold text-[rgb(57,19,143)] mb-3 max-sm:mt-12 max-sm:mb-6">
                {section.title}
              </h2>

              <p className="text-[#7B88BB] segoe-ui text-base font-normal lg:text-lg mb-4 sm:mb-6 lg:leading-[27px] md:leading-6 px-2 sm:px-0">
                {section.description}
              </p>

              {/* Images container for SM, MD and LG screens */}
              <div
                className={`hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3 md:gap-2
                  ${section.id === 7 ? "justify-items-center" : ""}
                `}
              >
                {/* Section 1: 3 images */}
                {section.id === 1 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      {/* Responsive heights */}
                      <img
                        src={userone}
                        alt={`${section.title} illustration 1`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usertwo}
                        alt={`${section.title} illustration 2`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full sm:col-span-2 md:col-span-1"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userthree}
                        alt={`${section.title} illustration 3`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 2: 3 images */}
                {section.id === 2 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userfour}
                        alt={`${section.title} illustration 4`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userfive}
                        alt={`${section.title} illustration 5`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full sm:col-span-2 md:col-span-1"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usersix}
                        alt={`${section.title} illustration 6`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 3: 3 images */}
                {section.id === 3 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userseven}
                        alt={`${section.title} illustration 7`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usereight}
                        alt={`${section.title} illustration 8`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full sm:col-span-2 md:col-span-1"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usernine}
                        alt={`${section.title} illustration 9`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 4: 3 images */}
                {section.id === 4 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userten}
                        alt={`${section.title} illustration 10`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userelleven}
                        alt={`${section.title} illustration 11`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full sm:col-span-2 md:col-span-1"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usertwellve}
                        alt={`${section.title} illustration 12`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 5: 3 images */}
                {section.id === 5 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userthirteen}
                        alt={`${section.title} illustration 13`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userfourteen}
                        alt={`${section.title} illustration 14`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full sm:col-span-2 md:col-span-1"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userfifteen}
                        alt={`${section.title} illustration 15`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 6: 2 images */}
                {section.id === 6 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usersixteen}
                        alt={`${section.title} illustration 16`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userseventeen}
                        alt={`${section.title} illustration 17`}
                        className="w-full h-32 sm:h-36 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    {/* Empty div for grid alignment on SM screens */}
                    <div className="hidden sm:block md:hidden"></div>
                  </>
                )}

                {/* Section 7: 1 image */}
                {section.id === 7 && (
                  <div
                    className="group bg-gray-900 overflow-hidden shadow w-full sm:col-span-3 md:col-span-1"
                    data-aos="zoom-in-up"
                  >
                    <img
                      src={usereighteen}
                      alt={`${section.title} illustration 18`}
                      className="w-full h-32 sm:h-40 md:h-32 lg:h-45 object-cover group-hover:opacity-60 duration-700"
                    />
                  </div>
                )}
              </div>

              {/* Mobile flex container (< 640px) */}
              <div className="flex flex-wrap gap-4 md:justify-center sm:hidden">
                {/* Section 1: 3 images on mobile */}
                {section.id === 1 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userone}
                        alt={`${section.title} illustration 1`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usertwo}
                        alt={`${section.title} illustration 2`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userthree}
                        alt={`${section.title} illustration 3`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 2: 3 images on mobile */}
                {section.id === 2 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userfour}
                        alt={`${section.title} illustration 4`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userfive}
                        alt={`${section.title} illustration 5`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usersix}
                        alt={`${section.title} illustration 6`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 3: 3 images on mobile */}
                {section.id === 3 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userseven}
                        alt={`${section.title} illustration 7`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usereight}
                        alt={`${section.title} illustration 8`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usernine}
                        alt={`${section.title} illustration 9`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 4: 3 images on mobile */}
                {section.id === 4 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userten}
                        alt={`${section.title} illustration 10`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userelleven}
                        alt={`${section.title} illustration 11`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usertwellve}
                        alt={`${section.title} illustration 12`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 5: 3 images on mobile */}
                {section.id === 5 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userthirteen}
                        alt={`${section.title} illustration 13`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userfourteen}
                        alt={`${section.title} illustration 14`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userfifteen}
                        alt={`${section.title} illustration 15`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 6: 2 images on mobile */}
                {section.id === 6 && (
                  <>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={usersixteen}
                        alt={`${section.title} illustration 16`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                    <div
                      className="group bg-gray-900 overflow-hidden shadow w-full max-w-[180px]"
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={userseventeen}
                        alt={`${section.title} illustration 17`}
                        className="w-full h-30 object-cover group-hover:opacity-60 duration-700"
                      />
                    </div>
                  </>
                )}

                {/* Section 7: 1 image on mobile */}
                {section.id === 7 && (
                  <div
                    className="group bg-gray-900 overflow-hidden shadow w-full max-w-[1000px]"
                    data-aos="zoom-in-up"
                  >
                    <img
                      src={usereighteen}
                      alt={`${section.title} illustration 18`}
                      className="w-full h-64 object-cover group-hover:opacity-60 duration-700"
                    />
                  </div>
                )}
              </div>
            </section>
          ))}
        </main>
      </div>
      <div className="    md:px-5   max-sm:px-5">
        <div
          className="max-w-5xl  md:px-11  max-sm:px-6  md:py-5   lg:mx-auto leading-10  max-sm:mt-10  lg:-mt-6 underline gresco-bolder text-[28px] md:text-[25px] lg:text-[26px] text-center   lg:px-8 lg:py-3 border-2 border-green-500 rounded-2xl mb-3 text-[#39138F]"
          data-aos="fade-up"
        >
          <h1>
            If you're still stuck and need assistance, please do not hesitate to
            contact us. <br className="md:hidden sm:hidden" /> We typically
            respond within one business day.
          </h1>
        </div>
      </div>
      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default User;
