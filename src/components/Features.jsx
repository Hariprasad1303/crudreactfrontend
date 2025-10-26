import React from "react";

import {
  FaBrain,
  FaRocket,
  FaCodeBranch,
  FaChartPie,
  FaCloud,
  FaUserShield,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain className="text-indigo-600 text-4xl" />,
    title: "AI-Driven Skill Insights",
    description:
      "Gain personalized, data-backed insights into your learning progress. DevElevate uses smart analytics to help you understand where to focus next.",
  },
  {
    icon: <FaRocket className="text-indigo-600 text-4xl" />,
    title: "Performance Boosted Dashboard",
    description:
      "Access a lightning-fast and intuitive dashboard optimized for real-time performance and productivity tracking.",
  },
  {
    icon: <FaCodeBranch className="text-indigo-600 text-4xl" />,
    title: "Seamless Project Integration",
    description:
      "Effortlessly integrate with repositories, APIs, and external tools to auto-update your development portfolio.",
  },
  {
    icon: <FaChartPie className="text-indigo-600 text-4xl" />,
    title: "Advanced Analytics & Reports",
    description:
      "Visualize your growth using charts and performance metrics — designed to help developers make informed decisions.",
  },
  {
    icon: <FaCloud className="text-indigo-600 text-4xl" />,
    title: "Cloud Sync & Accessibility",
    description:
      "Keep your data synchronized securely across all devices — access your progress anywhere, anytime.",
  },
  {
    icon: <FaUserShield className="text-indigo-600 text-4xl" />,
    title: "Secure & Private Workspace",
    description:
      "Your projects and learning data are protected with modern authentication and privacy-focused architecture.",
  },
];
const Features = () => {
  return (
    <div>
      {/* Header */}
      <div>
        <h2 className="text-center text-4xl md:text-5xl text-gray-800 font-extrabold">
          Expore our <span className="text-indigo-600">Key Features</span>
        </h2>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed mt-8 font-medium">
          DevElevate empowers developers with intelligent tools to visualize,
          organize, and accelerate their growth journey — built for modern
          engineers who want to stay ahead.
        </p>
      </div>
      {/* Grids of cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {
          features.map((feature,index)=>(
            <div key={index} className="bg-white shadow-2xl rounded-2xl p-8 max-w-md gap-4-8">
              <p className="mx-auto">{feature.icon}</p> 
              <p className="font-semibold text-2xl text-indigo-700 my-4">{feature.title}</p>
              <p className="text-justify font-normal text-xl">{feature.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Features;
