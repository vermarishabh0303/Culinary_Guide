import React from 'react';

function Footer() {
  return (
    <footer className="flex justify-center py-12 bg-gray-900">
      <div className="px-6 md:px-12 max-w-[1400px] w-full">
        <div className="w-full flex flex-col lg:flex-row justify-between h-full">
          
          {/* Logo and Navigation */}
          <div className="lg:w-[25%] mb-8 lg:mb-0 flex flex-col justify-between">
            <div className="footer-logo-section">
              <img className="logo-footer" src="./assets/logo-cg.webp" alt="" />
              <nav className="flex flex-col gap-8 mt-8">
                <a className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300 font-medium text-lg" href="#">Home</a>
                <a className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300 font-medium text-lg" href="#">About</a>
                <a className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300 font-medium text-lg" href="#">Services</a>
                <a className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300 font-medium text-lg" href="#">Contact</a>
              </nav>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:w-[30%] flex flex-col justify-between gap-6 mb-8 lg:mb-0 lg:pl-10 lg:pr-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="flex flex-col gap-8 flex-grow justify-around">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white text-lg">Mobile</p>
                <p className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300 cursor-pointer text-lg">+91 8527839788</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white text-lg">Email</p>
                <p className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300 cursor-pointer text-lg">info@culinaryguide.in</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white text-lg">Our Address</p>
                <p className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300 cursor-pointer text-lg">E2098, Ansal Esencia C Block Rd,<br /> Sector 67, Gurugram, Haryana 122102</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-[38%] flex flex-col gap-6 lg:pr-4">
            <h3 className="text-xl font-bold text-white">Leave A Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-400 focus:outline-none focus:ring-2"
                style={{backgroundColor: '#4B5563', borderColor: '#F5F5DC', '--tw-ring-color': '#F5F5DC'}}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-400 focus:outline-none focus:ring-2"
                style={{backgroundColor: '#4B5563', borderColor: '#F5F5DC', '--tw-ring-color': '#F5F5DC'}}
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border text-white placeholder-gray-400 focus:outline-none focus:ring-2 resize-none"
                style={{backgroundColor: '#4B5563', borderColor: '#F5F5DC', '--tw-ring-color': '#F5F5DC'}}
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 bg-white text-gray-800"
                style={{'&:hover': {backgroundColor: 'rgb(247, 247, 195)'}}}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(247, 247, 195)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
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