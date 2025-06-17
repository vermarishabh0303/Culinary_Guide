import React from 'react';

function PartnersSection() {
  return (
    <>
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
              
              {/* Duplicate set  */}
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
              
              {/* Duplicate set*/}
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
      <section className="bg-white pt-10 pb-10 flex flex-col items-center text-sm font-semibold text-center dual-carousel-section">
        <p className="mb-6">OUR TRUSTED PARTNERS & CLIENTS</p>
        
        {/* First Carousel */}
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
            
            {/* Duplicate set */}
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

        {/* Second Carousel */}
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
            
            {/* Duplicate set*/}
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
    </>
  );
}

export default PartnersSection; 