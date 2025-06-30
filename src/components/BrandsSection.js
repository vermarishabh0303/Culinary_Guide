import React from 'react';

function BrandsSection() {
  return (
    <section className="bg-secondary pt-10 pb-10 flex flex-col items-center text-lg font-semibold text-center">
      <p className="mb-6 text-lg">TRUSTED BY BRANDS ALL OVER THE INDIA</p>
      
      {/* First Carousel - Moving Forward */}
      <div className="logo-carousel-container overflow-hidden w-full mb-8">
        <div className="logo-carousel flex animate-carousel gap-12 md:gap-16">
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl1.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl2.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl3.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl4.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl5.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl7.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl9.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl10.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl11.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl12.webp" alt="" />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl1.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl2.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl3.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl4.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl5.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl7.webp" alt="" />
          </div>
        </div>
      </div>

      {/* Second Carousel - Moving Backward */}
      <div className="logo-carousel-container overflow-hidden w-full">
        <div className="logo-carousel-reverse flex animate-carousel-reverse gap-12 md:gap-16">
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl14.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl15.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl16.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl17.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl18.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl19.webp" alt="" />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl14.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl15.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl16.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl17.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl18.webp" alt="" />
          </div>
          <div className="logo-slide flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-[75px] md:h-[84px]" src="./assets/cl19.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandsSection; 