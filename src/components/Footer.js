import React from 'react';

function Footer() {
  return (
    <footer className="flex justify-center py-12 bg-black">
      <div className="px-6 md:px-12 max-w-[1400px] w-full">
        <div className="w-full flex flex-col lg:flex-row justify-between">
          
          {/* Logo and Navigation */}
          <div className="lg:w-[25%] mb-8 lg:mb-0">
            <div className="footer-logo-section">
              <img className="logo-footer" src="./assets/logo-cg.webp" alt="" />
              <nav className="flex flex-col gap-6">
                <a className="footer-nav-link" href="#">Home</a>
                <a className="footer-nav-link" href="#">About</a>
                <a className="footer-nav-link" href="#">Services</a>
                <a className="footer-nav-link" href="#">Contact</a>
              </nav>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:w-[30%] flex flex-col gap-6 mb-8 lg:mb-0 lg:pl-10 lg:pr-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white">Mobile</p>
                <p className="text-gray-300">+91 8527839788</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white">Email</p>
                <p className="text-gray-300">info@culinaryguide.in</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white">Our Address</p>
                <p className="text-gray-300">E2098, Ansal Esencia C Block Rd,<br /> Sector 67, Gurugram, Haryana 122102</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-[38%] flex flex-col gap-6 lg:pr-4">
            <h3 className="text-xl font-bold text-white">Leave A Message</h3>
            <form className="flex flex-col gap-4 w-full">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input 
                type="tel" 
                placeholder="Contact Number" 
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <textarea 
                placeholder="Message" 
                rows="4" 
                className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-vertical"
              ></textarea>
              <button 
                type="submit" 
                className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 