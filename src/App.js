import React, { useEffect, useState } from 'react';
import './index.css';

import {
  Header,
  BrandsSection,
  FeaturesSection,
  ServicesSection,
  AboutTeamSection,
  PartnersSection,
  Footer
} from './components';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

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
    const counterObserver = new IntersectionObserver((entries) => {
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
    const initializeObservers = () => {
      const cards = document.querySelectorAll('.animate-card');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        cardObserver.observe(card);
      });

      const statsSection = document.querySelector('#stats-section');
      if (statsSection) {
        counterObserver.observe(statsSection);
      }
    };

    // Continuous loading progress animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev < 100) {
          return prev + 2; // Increment by 2% every 50ms for smooth animation
        } else {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsLoading(false);
            // Initialize observers after loading is complete
            setTimeout(initializeObservers, 100);
          }, 500); // Small delay after completion
          return 100;
        }
      });
    }, 50); // Update every 50ms for smooth animation

    return () => {
      cardObserver.disconnect();
      counterObserver.disconnect();
      clearInterval(progressInterval);
    };
  }, []);

  // Loading Screen Component
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Logo and Loading Container */}
      <div className="flex flex-col items-center">
        {/* Enlarged Glowing Logo */}
        <div className="relative mb-16">
          <img 
            src="./assets/logo-cg.webp" 
            alt="Culinary Guide Logo" 
            className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
            style={{
              animation: 'logoPulse 1.0s ease-in-out infinite'
            }}
          />
        </div>

        {/* Continuous Loading Line */}
        <div className="w-80 md:w-96 lg:w-[28rem] h-1 bg-gray-800 rounded-full overflow-hidden relative">
          {/* Background line */}
          <div className="absolute inset-0 bg-gray-800 rounded-full"></div>
          
          {/* Animated progress line */}
          <div 
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-100 ease-out"
            style={{ 
              width: `${loadingProgress}%`,
              backgroundColor: '#F4EDE4',
              boxShadow: '0 0 20px rgba(244, 237, 228, 0.6), 0 0 40px rgba(244, 237, 228, 0.4)'
            }}
          >
            {/* Glowing effect at the end */}
            <div className="absolute right-0 top-0 w-4 h-full rounded-full opacity-80 animate-pulse" style={{ backgroundColor: '#F4EDE4' }}></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="font-popi text-sm w-screen overflow-x-hidden">
      <Header />
      <BrandsSection />
      <FeaturesSection />
      {/* Statistics and Mission Section */}
      <section className="relative isolate overflow-hidden py-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/Screenshot 2025-07-13 214220.png')" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center min-h-[400px]">
            {/* Statistics Section - Left */}
            <div id="stats-section" className="col-span-1 lg:col-span-1">
              <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center min-h-[300px]">
                {/* Numbers Column */}
                <div className="flex flex-col justify-center space-y-8 text-left md:text-center">
                  <div className="text-4xl md:text-7xl font-bold text-white">
                    <span className="counter" data-count="20">0</span>+
                  </div>
                  <div className="text-4xl md:text-7xl font-bold text-white">
                    <span className="counter" data-count="500">0</span>+
                  </div>
                  <div className="text-4xl md:text-7xl font-bold text-white">
                    <span className="counter" data-count="50">0</span>+
                  </div>
                </div>
                
                {/* Vertical Wavy Separator */}
                <div className="flex justify-center">
                  <img 
                    src="/assets/waves-beige - vertical.png"
                    alt="Stats divider"
                    className="h-[250px] w-6 object-cover"
                  />
                </div>
                
                {/* Descriptions Column */}
                <div className="flex flex-col justify-center space-y-8">
                  <p className="text-white text-base md:text-lg leading-tight text-right md:text-left">Combined experience in industry</p>
                  <p className="text-white text-base md:text-lg leading-tight text-right md:text-left">Restaurants transformed</p>
                  <p className="text-white text-base md:text-lg leading-tight text-right md:text-left">Successful brand strategies</p>
                </div>
              </div>
            </div>
            
            {/* Vertical Waves Divider - Center - Hidden on Mobile */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <img 
                src="/assets/waves-beige - vertical.png"
                alt="Vertical waves divider"
                className="h-[600px] w-10 object-cover ml-40"
              />
            </div>
            
            {/* Mission Text - Right - Hidden on Mobile */}
            <div className="hidden lg:block lg:col-span-2 flex items-center justify-center">
              <p className="text-white text-2xl md:text-3xl font-bold leading-relaxed text-center">
                Our mission is to empower restaurant owners and operators with the knowledge, tools, and strategies they need to achieve their culinary dreams. We believe that every restaurant has the potential to be extraordinary, and we are committed to providing the guidance and support necessary to turn that potential into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <AboutTeamSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App;