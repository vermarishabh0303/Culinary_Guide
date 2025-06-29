import React from 'react';

function BrandsSection() {
  return (
    <section className="bg-secondary pt-10 pb-10 flex flex-col items-center text-lg font-semibold text-center">
      <p className="mb-6 text-lg">TRUSTED BY BRANDS ALL OVER THE INDIA</p>
      
      {/* First Carousel - Moving Forward */}
      <div className="logo-carousel-container overflow-hidden w-full mb-8">
        <div className="logo-carousel flex animate-carousel gap-12 md:gap-16">
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/cl1.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/cl2.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/cl3.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/cl4.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/cl5.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/cl7.webp" alt="" />
          </div>
          
          {/* Duplicate set */}
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-seek@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-xero@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/rea@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/rmit@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-ibm@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/deliveroo@2x.png" alt="" />
          </div>
        </div>
      </div>

      {/* Second Carousel - Moving Backward */}
      <div className="logo-carousel-container overflow-hidden w-full">
        <div className="logo-carousel-reverse flex animate-carousel-reverse gap-12 md:gap-16">
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-seek@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-xero@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/rea@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/rmit@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-ibm@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/deliveroo@2x.png" alt="" />
          </div>
          
          {/* Duplicate set */}
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-seek@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-xero@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/rea@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/rmit@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/logo-ibm@2x.png" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[50px] md:h-[56px]" src="./assets/deliveroo@2x.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandsSection; 