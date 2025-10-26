import React from "react";
import developer2 from "../assets/developer2.jpg";
const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-32 mt-16 bg-linear-to-b from-gray-50 to-white gap-16">
      {/* left section */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        About <span className="text-indigo-600">DevElevate</span>
        </h2>
        <p className="text-lg font-medium text-gray-800 mt-8 text-justify leading-relaxed">
           DevElevate is a cutting-edge platform designed to empower developers
            to monitor, analyze, and enhance their professional growth journey.
            Whether you're learning new technologies, managing projects, or
            tracking your coding goals. DevElevate helps you visualize your
            progress with precision and clarity.
        </p>
        <ul className="mt-8">
          <li className="flex mb-4">
            <span className="text-indigo-600 text-2xl mr-4">✔</span>
            <p>Personalized dashboards to monitor your development journey.</p>
          </li>
          <li className="flex mb-4">
            <span className="text-indigo-600 text-2xl mr-4">✔</span>
            <p>AI-powered insights that recommend skills and track performance.</p>
          </li>
          <li className="flex mb-4">
            <span className="text-indigo-600 text-2xl mr-4">✔</span>
            <p> Simple, modern UI crafted for developers who value productivity.</p>
          </li>
        </ul>
        <button className="text-bold px-8 py-4 bg-indigo-600 text-white rounded-md text-left mt-8">Learn more</button>
      </div>
      {/* right section */}
      <div className="mx-auto">
        <img src={developer2} alt="coding image" className="w-full object-cover rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300"/>
      </div>
    </div>
  );
};

export default About;
