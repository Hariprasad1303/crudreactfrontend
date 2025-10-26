import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">DevElevate</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering developers to track skills, monitor progress, and visualize career growth. Stay organized, stay ahead.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-indigo-500 transition-colors">Home</a></li>
              <li><a href="/skills" className="hover:text-indigo-500 transition-colors">Skills</a></li>
              <li><a href="/projects" className="hover:text-indigo-500 transition-colors">Projects</a></li>
              <li><a href="/goals" className="hover:text-indigo-500 transition-colors">Goals</a></li>
              <li><a href="/analytics" className="hover:text-indigo-500 transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <FaTwitter size={24} />
              </a>
              <a href="mailto:info@develevate.com" className="hover:text-indigo-500">
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              info@develevate.com<br />
              +91 12345 67890
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm pb-6">
          <p>&copy; {new Date().getFullYear()} DevElevate. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="/terms" className="hover:text-indigo-500">Terms</a>
            <a href="/privacy" className="hover:text-indigo-500">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
