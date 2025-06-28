import React from 'react';

function Header() {
  return (
    <header className="w-full text-white md:pb-12 min-[1150px]:pb-24 flex flex-col items-center overflow-x-hidden relative h-[600px] md:h-[500px] min-[1150px]:h-[600px]">
      
      {/* Full background video */}        
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="./assets/SSYouTube.online_Raw Kitchen_1080p.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to ensure text is readable */}        
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10"></div>

      {/* Content container with higher z-index */}        
      <div className="relative z-20 w-full flex flex-col items-center">
      
        {/* Navbar section */}
        <nav className=" w-full flex font-popi py-1 md:py-2 px-6 md:px-12 leading-none justify-between text-[0.9rem] font-semibold max-w-[1400px]">
          {/* navbar left section */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-12">
              <div className="flex items-center -ml-6">
                <img src="./assets/logo-cg.webp" alt="website logo" className="logo-header" />
              </div>
              <ul className=" hidden lg:flex gap-14">
                <li className="flex items-center"><a className="nav-link" href="#">Home</a></li>
                <li className="flex items-center"><a className="nav-link" href="#">About</a></li>
                <li className="flex items-center"><a className="nav-link" href="#">Services</a></li>
                <li className="flex items-center"><a className="nav-link" href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* navbar right section   */}
          <div className="flex items-center gap-6 mr-4">
            <div className="">
              <a href="" className="flex items-center lg:hidden"><i className="fa-solid fa-bars text-lg"></i></a>
            </div>
            <button className="hidden min-[1150px]:inline-block bg-gray-800 hover:bg-gray-700 transition-all text-white hover:text-[rgb(247,247,195)] font-semibold py-[0.8rem] px-4 rounded-md">
              <a href="https://dashboard.culinaryguide.in/" target="_blank" rel="noopener noreferrer">
                DASHBOARD
              </a>
            </button>
          </div>
        </nav>

        {/* Hero section */}
        <div className="flex h-full min-[1150px]:h-[400px] md:flex-row flex-col   justify-between  pt-8 md:py-0 text-center md:text-left md:pl-12 text-lg max-w-[1400px]">
          <div className="md:w-[50%] flex px-4 md:px-0 flex-col justify-center">
            {/* Hero content can be added here */}
          </div>
          <div className="md:w-[50%] py-10 min-[1150px]:py-0 min-[1150px]:h-full md:p-1 md:relative md:left-6">
            {/* Hero right content */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 