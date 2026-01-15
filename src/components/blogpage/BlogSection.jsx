import React from "react";
import Hero from "../Hero";

// Import all your 11 images
import blogone from "../../assets/Blog/blogone.png";
import blogtwo from "../../assets/Blog/blogtwo.png";
import blogthired from "../../assets/Blog/blogthired.png";
import blogfour from "../../assets/Blog/blogfour.png";
import blogfive from "../../assets/Blog/blogfive.png";
import blogsix from "../../assets/Blog/blogsix.jpg";
import blogseven from "../../assets/Blog/blogseven.webp";
import blogeight from "../../assets/Blog/blogeight.webp";
import blognine from "../../assets/Blog/blognine.webp";
import blogten from "../../assets/Blog/blogten.webp";
import blog11 from "../../assets/Blog/blog11.webp";

const BlogSection = () => {
  const blogData = [
    {
      id: 1,
      image: blogone,
      title: "Top 10 AI Document Review Tools for Law Firms(2025)",
      description:
        "AI document review for law firms uses AI and NLP to analyze and summarize key",
      link: "#",
    },
    {
      id: 2,
      image: blogtwo,
      title: "Can ChatGPT Review Legal Documents? Full Guide 2025",
      description:
        "Yes, ChatGPT can help with legal documents. It can summarize, identify clauses, and analyze contracts.",
      link: "#",
    },
    {
      id: 3,
      image: blogthired,
      title: "Is Claude or ChatGPT better for lawyers? [2025]",
      description:
        "Claude is great for lawyers. He helps with detailed legal research, contract drafting, and compliance",
      link: "#",
    },
    {
      id: 4,
      image: blogfour,
      title: "10 Best Legal Document Review Tools for Lawyers (2025 Guide)",
      description:
        "The best legal document review tools for lawyers in 2025 include DocumentReview.Law, Everlaw, Alexi, Relativity,",
      link: "#",
    },
    {
      id: 5,
      image: blogfive,
      title: "What Is Document Review? (Comprehensive Guide)",
      description:
        "What Is Document Review? Document review is a key step for legal professionals. They look",
      link: "#",
    },
    {
      id: 6,
      image: blogsix,
      title: "How AI Law Firms Revolutionize Legal Services for Clients",
      description:
        "Introduction: The Rise of AI in Law Firms AI is not just a future idea",
      link: "#",
    },
    {
      id: 7,
      image: blogseven,
      title: "Powerful Doc Review Tool for Lawyers – Try It Now!",
      description:
        "In today’s busy legal world, quick document review is key to managing cases. Strong document",
      link: "#",
    },
    {
      id: 8,
      image: blogeight,
      title: "The Benefits of Software Document Review Tools for Lawyers",
      description:
        "In today’s fast-paced legal environment, efficiency is key to success. Checking contracts, discovery documents, or",
      link: "#",
    },
    {
      id: 9,
      image: blognine,
      title: "Top Document Review Tools for Improved Accuracy",
      description:
        "In law firms, handling many legal documents is crucial but takes a lot of time.",
      link: "#",
    },
    {
      id: 10,
      image: blogten,
      title: "AI Legal Document Review: Fast, Accurate & Reliable Solutions",
      description:
        "The legal industry is increasingly turning to artificial intelligence (AI) to streamline the often cumbersome",
      link: "#",
    },
    {
      id: 11,
      image: blog11,
      title: "How to Choose a Legal Document Review Service",
      description:
        "Introduction When you deal with legal documents, accuracy is everything. Whether it’s a contract, lease",
      link: "#",
    },
  ];

  return (
    <div className="pt-16 md:pt-20 lg:pt-24 bg-white">
      {/* FULL-WIDTH HERO */}
      <Hero title="Blogs" subtitle="Blog" />

      {/* cards section */}
      <div className="bg-white py-12 arone px-4.5 sm:px-6 lg:px-20   lg:mr-12 ">
        <div className="max-w-7xl mx-auto">
          {/* GRID - Responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9 md:gap-7">
            {/* Use map to render blog cards */}
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

// Separate BlogCard component for better organization
const BlogCard = ({ blog }) => {
  return (
    <div className="group bg-white rounded-md overflow-hidden flex flex-col lg:h-[420px] md:h-[450px]  transition-all duration-300 ease-in-out shadow-[0_1px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_1px_15px_rgba(0,0,0,0.30)]">
      {/* Image wrapper */}
      <div className="relative group overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-50 md:h-70 lg:h-55 object-cover"
        />

        {/* Bottom black overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0"></div>
      </div>

      {/* Content */}
      <div className="px-2.5  md:mt-4 mt-2 pb-2">
        <h3 className="text-base  sm:text-lg md:pt-1.5  pr-2 font-bold text-[#2E3A58] lg:text-[20px] text-[22px] leading-[26px]  ">
          {blog.title}
        </h3>

        <p className="text-gray-600 pt-1 lg:text-4 text-[16px] grow font-normal">
          {blog.description}
        </p>

        <a
          href={blog.link}
          className="inline-flex items-center lg:pt-1.5 md:pt-3 pt-1.5  text-green-500 font-semibold text-[13px] leading-5 lg:text-[13px] md:text-[13px] group underline"
        >
          READ MORE
          <svg
            className="ml-1 pt-1 w-4 h-4 transition-transform duration-300 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
 