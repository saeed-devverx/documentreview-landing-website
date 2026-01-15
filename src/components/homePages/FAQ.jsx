import React, { useState } from "react";
import questionimg from "../../assets/questionimg.png";
import toolfile from "../../assets/toolfile.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First question open by default

  const faqItems = [
    {
      question: "What are the main features of DocumentReview.Law?",
      answer: [
        "Using DocumentReview.Law, you can load a set of documents stored on your computer into an app that runs in any web browser on any operating system. You can review documents of many different formats in a single viewer. The viewer lets you zoom and rotate documents to make sure everything is readable, regardless of original formatting.",
        "You can also pin important docs, which are then listed in a sidebar. And you can apply tags to documents as well. You can make custom color-coded tags to use during a review session. Add your own label and choose from up to as many as 16 million colors1 to suit your workflow and enhance your analysis of the documents.",
      ],
    },
    {
      question: "What else can I do on DocumentReview.Law?",
      answer: [
        "Using DocumentReview.Law, you can download a spreadsheet chart listing every document you tagged and every tag applied to those documents. You can open that spreadsheet in a program like Excel, and sort the documents by tag or multiple tags to assist you in production and preparation for depositions. (Just to be technical, you actually download a '.csv' file, which opens easily in Excel.)",
        "The downloadable spreadsheet also preserves your document review work product and lets you share your tagging from the review with anyone, even if they don't have a DocumentReview.Law account.",
      ],
    },
    {
      question:
        "Why should I use DocumentReview.Law instead of typical eDiscovery platform?",
      answer: [
        "DocumentReview.Law offers many advantages over a typical eDiscovery platform. First, it is $30/mo compared to hundreds or thousands per month that an eDiscovery vendor would charge you or your clients.",
        "Second, you control your own documents and data, and, relatedly, there are no data storage fees. It can be prohibitively expensive to use a document review platform because of high data storage fees. But with DocumentReview.Law, you can review a set of docs of any size that is stored on your laptop, or a separate hard drive, or your office's networked server, or even your trusted cloud server of choice. And you can review those docs without having to disclose your client's confidential docs or data to a third party and pay fees for the vendor to store that data so you can use their tool.",
        "Third, we have stripped away the features that are less-than-helpful, or more hassle than they're worth, or just stand in the way between you and the efficient end of document productions and depositions. We've eliminated the multiple toolbars and information panels that clutter many typical review tools and streamlined the design of the tool so the document takes center stage. We've given you direct control over tagging—from creation to removal—(more functionality to come in 2025) and we've also given you a secure way to preserve your document review work product so that you can use it as the backbone of document management for your matter.",
      ],
    },
    {
      question: "Are my documents and data secure?",
      answer: [
        "All your interactions with our website and review tool are secured by state-of-the-art encryption.",
        "Also, we use cookies stored on your computer so that if you are inadvertently disconnected from Document.Review.Law, you can pick up right where you left off, without having lost any progress or work product.",
        "Most importantly, we never see, access, open, look at, or store your documents or data, even for a brief moment. Your documents and data remain securely stored on your system the entire time you are using the review tool.",
      ],
    },
    {
      question: "What's document review (a.k.a doc review)?",
      answer: [
        "Doc review is the process of assessing documents for relevance, privilege, confidentiality, and responsiveness to legal requirements or requests for a legal case, an investigation, or a corporate transaction.",
        "It aims to identify, categorize, and assess information that is important for the discovery phase of litigation, due diligence in mergers and acquisitions, or compliance checks in regulatory investigations.",
        "Doc review ensures that pertinent documents are disclosed, while irrelevant or non-responsive documents are set aside and that any documents protected by privilege are not disclosed.",
      ],
    },
    {
      question: "So, then, what's a doc?",
      answer: [
        "Types of docs include emails, contracts, letters, memos, reports, and other forms of communication and records.",
      ],
    },
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full bg-white py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 mt-15 sm:px-6 max-sm:pb-11 grid grid-col-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr] items-start md:gap-8">
        {/* Left Image */}
        <div className="flex">
          <img
            src={questionimg}
            alt="FAQ Illustration"
            className="lg:w-[550px] md:w-[354px] md:h-[235px] h-auto lg:h-[365px] rounded-3xl shadow-lg"
          />
        </div>

        {/* Right FAQ */}
        <div className="">
          <h1 className="text-[29px] lg:text-[29px] gresco-bolder leading-[29px] max-sm:pt-20 text-center font-bold text-[#2D3958] mb-6 sm:mb-8">
            Frequently Asked Questions
          </h1>

          <div className="space-y-2 mr-3 max-sm:px-1.5 ">
            {faqItems.map((item, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer group"
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className="flex items-center  gresco-bold gap-2 border-b border-green-500">
                    <img
                      src={toolfile}
                      alt="Tool icon"
                      className={`w-5 h-5 transition-colors duration-300 ${
                        index === activeIndex
                          ? "text-blue-500" // Active: blue
                          : "text-green-500 group-hover:text-blue-500" // Default: green, Hover: blue
                      }`}
                    />

                    <p
                      className="text-[#39138F] gresco-bold-900 leading-[30px] font-semibold text-[20px]  pb-3 
"
                    >
                      {index === 5 ? (
                        <>
                          So, then, what's a
                          <span className="text-green-500">doc</span>?
                        </>
                      ) : index === 4 ? (
                        <>
                          What's{" "}
                          <span className="text-green-500">
                            document review
                          </span>{" "}
                          (a.k.a{" "}
                          <span className="text-green-500">doc review</span>)
                        </>
                      ) : (
                        item.question
                      )}
                    </p>
                  </div>
                </div>

                {index === activeIndex && (
                  <div className="mt-4 pl-2">
                    {item.answer.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-[rgb(122,122,122)] font-segoe-ui font-normal text-[16px] mb-3"
                      >
                        {paragraph}
                        {index === 0 && pIndex === 1 && (
                          <sup className="text-xs align-super ml-1">1</sup>
                        )}
                      </p>
                    ))}
                    {index === 0 && (
                      <p className="text-[rgb(122,122,122)] font-segoe-ui font-normal text-sm sm:text-[13px]  mt-2">
                        <sup className="text-xs align-super">1</sup> When using
                        your browser's expanded color picker.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

 