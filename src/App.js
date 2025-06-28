import React, { useEffect } from 'react';
import './index.css';

import {
  Header,
  BrandsSection,
  FeaturesSection,
  CTCSection,
  StatsSection,
  CurvedSection,
  ServicesSection,
  AboutTeamSection,
  PartnersSection,
  Footer
} from './components';

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
      <Header />
      <BrandsSection />
      <FeaturesSection />
      <CTCSection />
      <StatsSection />
      <CurvedSection />
      <ServicesSection />
      <AboutTeamSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App; 