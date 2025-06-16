import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // Counter Animation Function
    function animateCounter(element) {
      const target = parseInt(element.getAttribute('data-count'));
      const speed = target > 100 ? 50 : 100;
      let count = 0;
      const increment = target / speed;
      
      const updateCount = () => {
        if (count < target) {
          count += increment;
          element.textContent = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          element.textContent = target;
        }
      };
      
      updateCount();
    }

    // Intersection Observer for triggering animation when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => {
            if (!counter.classList.contains('animated')) {
              counter.classList.add('animated');
              animateCounter(counter);
            }
          });
        }
      });
    }, {
      threshold: 0.5
    });

    // Card Animation Observer
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1
    });

    // Initialize observers
    setTimeout(() => {
      const statsSection = document.querySelector('.flex.justify-center:has(.counter)');
      if (statsSection) {
        observer.observe(statsSection);
      }

      const cards = document.querySelectorAll('.animate-card');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        cardObserver.observe(card);
      });
    }, 100);

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div className="font-popi text-sm w-screen overflow-x-hidden">
      {/* Header Section */}
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
          <nav className=" w-full flex font-popi py-3 md:py-6 px-6 md:px-12 leading-none justify-between text-[0.9rem] font-semibold max-w-[1400px]">
            {/* navbar left section */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-6">
                <div className="flex items-center">
                  <img src="./assets/logo-cg.webp" alt="website logo" className="logo-header" />
                </div>
                <ul className=" hidden lg:flex gap-8">
                  <li className="flex items-center"><a className="hover:underline nav-link" href="#">Home</a></li>
                  <li className="flex items-center"><a className="hover:underline nav-link" href="#">About</a></li>
                  <li className="flex items-center"><a className="hover:underline nav-link" href="#">Services</a></li>
                  <li className="flex items-center"><a className="hover:underline nav-link" href="#">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* navbar right section   */}
            <div className="flex items-center gap-6">
              <div className="">
                <a href=""><i className="fa-solid fa-magnifying-glass text-lg"></i></a>
              </div>
              <div className="">
                <a href="" className="flex items-center lg:hidden"><i className="fa-solid fa-bars text-lg"></i></a>
              </div>
              <button className="hidden min-[1150px]:inline-block outline outline-1 outline-white hover:outline-primary  transition-all bg-white text-black font-semibold py-[0.8rem] px-4 rounded-sm">
                DASHBOARD
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

      {/* Brands section - Dual Carousel */}
      <section className="bg-secondary pt-10 pb-10 flex flex-col items-center text-sm font-semibold text-center">
        <p className="mb-6">TRUSTED BY BRANDS ALL OVER THE INDIA</p>
        
        {/* First Carousel - Moving Forward */}
        <div className="logo-carousel-container overflow-hidden w-full mb-8">
          <div className="logo-carousel flex animate-carousel gap-12 md:gap-16">
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
            </div>
            
            {/* Duplicate set for seamless looping */}
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
            </div>
          </div>
        </div>

        {/* Second Carousel - Moving Backward */}
        <div className="logo-carousel-container overflow-hidden w-full">
          <div className="logo-carousel-reverse flex animate-carousel-reverse gap-12 md:gap-16">
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
            </div>
            
            {/* Duplicate set for seamless looping */}
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-secondary flex justify-center">
        <div className="py-16 flex flex-col gap-16 md:gap-20 max-w-[1400px]">

          {/* feature one */}
          <div className="w-full flex flex-col md:flex-row">
            <video autoPlay loop muted className="md:w-[45%] w-full pl-4 md:pl-0">
              <source src="./assets/cg-vid.mp4" type="video/mp4" />
            </video>
            
            <div className="w-full md:w-[55%] h-full p-6 pt-10 md:p-14 md:pl-20 flex flex-col justify-center gap-4">
              <h2 className="text-3xl lg:text-5xl font-semibold max-w-[33rem]">
                Building a Stronger Future for Food and Beverage
              </h2>
              <p className="max-w-[28rem] text-base">
                Our vision is to create a supportive and thriving ecosystem that empowers restaurants to reach their full potential. We believe true success comes from access to the right knowledge, tools, and community — and we're dedicated to helping every restaurant grow, innovate, and succeed in a rapidly evolving industry.
              </p>
              <a href="#" className="text-base max-w-[34rem] text-blue-400 hover:underline transition-all">
                Learn more about Our Services <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* feature two */}
          <div className="w-full flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-[55%] h-full p-6 pt-10 md:p-14 md:pl-20 flex flex-col justify-center gap-4">
              <h2 className="text-3xl lg:text-5xl font-semibold max-w-[33rem]">
                Empowering Every Restaurant to Succeed and Shine
              </h2>
              <p className="max-w-[28rem] text-base">
                At Culinary Guide, we're here to empower restaurant owners and operators to turn their culinary dreams into reality. Whether you need the right tools, expert strategies, or just the right guidance, we're committed to helping every restaurant reach its full potential — and become truly extraordinary.
              </p>
              <a href="#" className="text-base max-w-[34rem] text-blue-400 hover:underline transition-all">
                Learn more about flexible communication <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <video autoPlay loop muted className="md:w-[45%] w-full pl-4 md:pl-0">
              <source src="./assets/feature-two.webm" type="video/webm" />
            </video>
          </div>

          {/* feature three */}
          <div className="w-full flex flex-col md:flex-row">
            <video autoPlay loop muted className="md:w-[45%] w-full pr-4 md:pr-0">
              <source src="./assets/cg-vid.mp4" type="video/mp4" />
            </video>

            <div className="w-full md:w-[55%] h-full p-6 pt-10 md:p-14 md:pl-20 flex flex-col justify-center gap-4">
              <h2 className="text-3xl lg:text-5xl font-semibold max-w-[33rem]">
                Collaborative Consulting
              </h2>
              <p className="max-w-[28rem] text-base">
                We work side‑by‑side with you, listening first to understand your goals, challenges, and ambitions. Through open dialogue and a shared vision, we co‑create pragmatic, actionable plans that fit your restaurant's culture, resources, and pace—ensuring every recommendation feels natural, achievable, and truly yours.
              </p>
              <a href="#" className="text-base max-w-[34rem] text-blue-400 hover:underline transition-all">
                Learn more about channels <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* feature four */}
          <div className="w-full flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-[55%] h-full p-6 pt-10 md:p-14 md:pl-20 flex flex-col justify-center gap-4">
              <h2 className="text-3xl lg:text-5xl font-semibold max-w-[33rem]">
                Expert Guidance Every Step of the Way
              </h2>
              <p className="max-w-[28rem] text-base">
                From menu development to operational efficiency, we provide comprehensive support tailored to your restaurant's unique needs. Our experienced team helps you navigate challenges, capitalize on opportunities, and build a sustainable business that thrives in today's competitive landscape.
              </p>
              <a href="#" className="text-base max-w-[34rem] text-blue-400 hover:underline transition-all">
                Learn more about our expertise <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <video autoPlay loop muted className="md:w-[45%] w-full pl-4 md:pl-0">
              <source src="./assets/feature-two.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>

      {/* CTC section */}
      <section className="flex justify-center bg-black">
        <div className="py-20 md:py-24 w-full max-w-[1400px] text-center px-6 relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Proven Experience. Real Impact.
          </h1>
          <p className="text-base mt-6 text-white">
            Over two decades of hands-on expertise, trusted by top food brands and hundreds of thriving restaurant locations.
          </p>
        </div>
      </section>

      {/* Stats section */}
      <section className="flex justify-center bg-black">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-around pt-2 md:pt-4 pb-14 md:pb-16 w-full max-w-[1400px] text-center md:text-left px-6">
          <div className="p-2 w-56">
            <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-semibold">
              <span className="counter" data-count="20">0</span>+
            </h1>
            <p className="text-sm text-white">Combined experience in industry</p>
          </div>
          <div className="p-2 w-56">
            <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-semibold">
              <span className="counter" data-count="10">0</span>+
            </h1>
            <p className="text-sm text-white">Food brands</p>
          </div>
          <div className="p-2 w-56">
            <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-semibold">
              <span className="counter" data-count="150">0</span>+
            </h1>
            <p className="text-sm text-white">Individual stores managed</p>
          </div>
        </div>
      </section>

      {/* Services section with cards */}
      <section className="flex justify-center bg-secondary py-12">
        <div className="px-6 md:px-0 max-w-[1400px]">
          <h1 className="main-section-heading">What We Offer to Help Your Restaurant Thrive</h1>
          <div className="grid grid-cols-3 px-4 py-8 gap-4">
            
            {/* card one */}
            <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="card-main-heading animate-fade-in">Performance Management</h3>
                </div>
                
                <div className="flex flex-col gap-4 text-base text-gray-700">
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                    <h5 className="card-subheading">Customer Journey Management</h5>
                    <p className="card-text">Track customer touchpoints, from discovery to dining, to improve experience and loyalty.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                    <h5 className="card-subheading">Investments Optimization</h5>
                    <p className="card-text">Track ad performance, invest more in what drives sales, test discounts to find optimal value.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                    <h5 className="card-subheading">Customer Offerings</h5>
                    <p className="card-text">Customer offerings include food, drinks, service, ambiance, and any extras that enhance the delivery experience.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                    <h5 className="card-subheading">Review Analysis</h5>
                    <p className="card-text">Review analysis helps restaurants understand customer feedback to improve service, food, and overall experience.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card two */}
            <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="card-main-heading animate-fade-in">Operational Excellence</h3>
                </div>
                
                <div className="flex flex-col gap-4 text-base text-gray-700">
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                    <h5 className="card-subheading">Kitchen Optimization</h5>
                    <p className="card-text">Streamline workflows, reduce waste, and maximize efficiency in your kitchen operations.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                    <h5 className="card-subheading">Staff Training Programs</h5>
                    <p className="card-text">Comprehensive training solutions to elevate your team's skills and service quality.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                    <h5 className="card-subheading">Quality Control Systems</h5>
                    <p className="card-text">Implement robust systems to maintain consistency and excellence in every dish.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                    <h5 className="card-subheading">Cost Management</h5>
                    <p className="card-text">Strategic approaches to optimize costs while maintaining quality and profitability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card three */}
            <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="card-main-heading animate-fade-in">Menu Development</h3>
                </div>
                
                <div className="flex flex-col gap-4 text-base text-gray-700">
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                    <h5 className="card-subheading">Recipe Innovation</h5>
                    <p className="card-text">Create unique, profitable dishes that reflect your brand and delight customers.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                    <h5 className="card-subheading">Menu Engineering</h5>
                    <p className="card-text">Strategic menu design to maximize profitability and customer satisfaction.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                    <h5 className="card-subheading">Seasonal Planning</h5>
                    <p className="card-text">Develop seasonal menus that leverage fresh ingredients and current trends.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                    <h5 className="card-subheading">Nutritional Analysis</h5>
                    <p className="card-text">Ensure menu items meet dietary requirements and health-conscious consumer demands.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card four */}
            <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="card-main-heading animate-fade-in">Brand Strategy</h3>
                </div>
                
                <div className="flex flex-col gap-4 text-base text-gray-700">
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                    <h5 className="card-subheading">Brand Identity Development</h5>
                    <p className="card-text">Create a compelling brand story that resonates with your target audience.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                    <h5 className="card-subheading">Digital Presence</h5>
                    <p className="card-text">Build a strong online presence across social media and digital platforms.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                    <h5 className="card-subheading">Marketing Campaigns</h5>
                    <p className="card-text">Develop targeted marketing strategies to attract and retain customers effectively.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                    <h5 className="card-subheading">Community Engagement</h5>
                    <p className="card-text">Build strong local relationships and establish your restaurant as a community hub.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card five */}
            <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="card-main-heading animate-fade-in">Financial Planning</h3>
                </div>
                
                <div className="flex flex-col gap-4 text-base text-gray-700">
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                    <h5 className="card-subheading">Revenue Optimization</h5>
                    <p className="card-text">Identify opportunities to increase revenue through strategic pricing and upselling.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                    <h5 className="card-subheading">Budget Management</h5>
                    <p className="card-text">Create and maintain realistic budgets that support growth and profitability.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                    <h5 className="card-subheading">Cash Flow Analysis</h5>
                    <p className="card-text">Monitor and optimize cash flow to ensure business stability and growth.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                    <h5 className="card-subheading">Investment Strategy</h5>
                    <p className="card-text">Strategic guidance on equipment upgrades, expansion, and technology investments.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card six */}
            <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="card-main-heading animate-fade-in">Technology Integration</h3>
                </div>
                
                <div className="flex flex-col gap-4 text-base text-gray-700">
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                    <h5 className="card-subheading">POS Systems</h5>
                    <p className="card-text">Implement modern point-of-sale systems to streamline operations and analytics.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                    <h5 className="card-subheading">Online Ordering</h5>
                    <p className="card-text">Set up seamless online ordering and delivery systems to expand your reach.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                    <h5 className="card-subheading">Inventory Management</h5>
                    <p className="card-text">Digital solutions to track inventory, reduce waste, and optimize purchasing.</p>
                  </div>
                  
                  <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                    <h5 className="card-subheading">Customer Analytics</h5>
                    <p className="card-text">Advanced analytics to understand customer behavior and optimize operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Team section */}
      <section className="flex justify-center bg-black">
        <div className="py-16 flex flex-col gap-4 max-w-[1400px]">
          {/* About Us Heading at Top */}
          <div className="w-full text-center">
            <h2 className="about-us-main-heading animate-fade-in text-white">About Our Team</h2>
          </div>
          
          {/* Content and Video in Middle */}
          <div className="w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-[55%] h-full p-6 pt-10 md:p-14 md:pr-20 flex flex-col justify-center gap-4 about-us-content">
              <div className="flex flex-col gap-6">
                <p className="text-base leading-7 text-white about-us-text">
                  We are a team of seasoned restaurant consultants with a proven track record of helping restaurants of all shapes and sizes achieve their full potential. Whether you're a new restaurateur with a dream just setting out or an established owner facing operational challenges, we offer a comprehensive suite of services designed to transform your vision into a sustainable and profitable business.
                </p>
                <p className="text-base leading-7 text-white about-us-text">
                  We'll work alongside you to identify areas for improvement, develop data-driven strategies, and implement solutions that ensure your restaurant runs smoothly and delights your guests.
                </p>
                <p className="text-base leading-7 text-white about-us-text">
                  To truly thrive, you need the full culinary experience – a well-crafted menu, efficient operations, and a satisfied clientele. Here at Culinary Guide, we understand that running a successful restaurant requires expertise in everything from front-of-house hospitality to back-of-house efficiency.
                </p>
              </div>
            </div>

            <div className="md:w-[45%] w-full pl-4 md:pl-0 flex items-center justify-center about-us-video">
              <img src="./assets/cg-6.gif" alt="About Our Team" className="w-full h-auto about-video" />
            </div>
          </div>
        </div>
      </section>

      {/* Second CTC section with curved bottom and dual carousel */}
      <section className="flex justify-center py-16 bg-black text-white shape-box relative">
        <div className="px-6 md:px-12 max-w-[1400px] w-full text-center relative z-10">
          <p className="mb-6 text-sm font-semibold">OUR TRUSTED PARTNERS & CLIENTS</p>
          
          {/* First Carousel - Moving Forward */}
          <div className="logo-carousel-container overflow-hidden w-full mb-8">
            <div className="logo-carousel flex animate-carousel gap-12 md:gap-16">
              {/* First set of logos */}
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
              </div>
              
              {/* Duplicate set for seamless looping */}
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
              </div>
            </div>
          </div>

          {/* Second Carousel - Moving Backward */}
          <div className="logo-carousel-container overflow-hidden w-full">
            <div className="logo-carousel-reverse flex animate-carousel-reverse gap-12 md:gap-16">
              {/* First set of logos */}
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
              </div>
              
              {/* Duplicate set for seamless looping */}
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
              </div>
              <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
                <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual carousel section */}
      <section className="bg-white pt-10 pb-10 flex flex-col items-center text-sm font-semibold text-center">
        <p className="mb-6">OUR TRUSTED PARTNERS & CLIENTS</p>
        
        {/* First Carousel - Moving Forward */}
        <div className="logo-carousel-container overflow-hidden w-full mb-8">
          <div className="logo-carousel flex animate-carousel gap-12 md:gap-16">
            {/* First set of logos */}
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
            </div>
            
            {/* Duplicate set for seamless looping */}
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
            </div>
          </div>
        </div>

        {/* Second Carousel - Moving Backward */}
        <div className="logo-carousel-container overflow-hidden w-full">
          <div className="logo-carousel-reverse flex animate-carousel-reverse gap-12 md:gap-16">
            {/* First set of logos */}
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
            </div>
            
            {/* Duplicate set for seamless looping */}
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-seek@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-xero@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rea@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/rmit@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/logo-ibm@2x.png" alt="" />
            </div>
            <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
              <img className="h-10 md:h-12" src="./assets/deliveroo@2x.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="flex justify-center py-12 bg-black">
        <div className="px-6 md:px-12 max-w-[1400px] w-full">
          <div className="w-full flex flex-col lg:flex-row justify-between">
            
            {/* Logo and Navigation */}
            <div className="lg:w-[25%] mb-8 lg:mb-0">
              <div className="flex items-start gap-6">
                <img className="logo-footer" src="./assets/logo-cg.webp" alt="" />
                <nav className="flex flex-col gap-3">
                  <a className="text-white hover:text-purple-400 font-medium transition-colors" href="#">Home</a>
                  <a className="text-white hover:text-purple-400 font-medium transition-colors" href="#">About</a>
                  <a className="text-white hover:text-purple-400 font-medium transition-colors" href="#">Services</a>
                  <a className="text-white hover:text-purple-400 font-medium transition-colors" href="#">Contact</a>
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
    </div>
  );
}

export default App; 