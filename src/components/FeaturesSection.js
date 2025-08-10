import React from 'react';

function FeaturesSection() {
  return (
    <section className="bg-secondary flex justify-center">
      <div className="py-16 flex flex-col gap-16 md:gap-20 max-w-[1400px]">

        {/* feature one */}
        <div className="w-full flex flex-col md:flex-row">
          <video autoPlay loop muted className="md:w-[45%] w-full pl-4 md:pl-0">
            <source src="./assets/cg-vid.mp4" type="video/mp4" />
          </video>
          
          <div className="w-full md:w-[55%] h-full p-6 pt-10 md:p-14 md:pl-20 flex flex-col justify-center gap-4">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold max-w-[33rem]">
              Building a Stronger Future for Food and Beverage
            </h2>
            <p className="max-w-[28rem] text-sm md:text-base">
              Our vision is to create a supportive and thriving ecosystem that empowers restaurants to reach their full potential. We believe true success comes from access to the right knowledge, tools, and community — and we're dedicated to helping every restaurant grow, innovate, and succeed in a rapidly evolving industry.
            </p>
            <a href="#" className="text-sm md:text-base max-w-[34rem] text-blue-400 hover:underline transition-all">
              Learn more about Our Services <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* feature two */}
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-[55%] h-full p-6 pt-10 md:p-14 md:pl-20 flex flex-col justify-center gap-4">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold max-w-[33rem]">
              Empowering Every Restaurant to Succeed and Shine
            </h2>
            <p className="max-w-[28rem] text-sm md:text-base">
              At Culinary Guide, we're here to empower restaurant owners and operators to turn their culinary dreams into reality. Whether you need the right tools, expert strategies, or just the right guidance, we're committed to helping every restaurant reach its full potential — and become truly extraordinary.
            </p>
            <a href="#" className="text-sm md:text-base max-w-[34rem] text-blue-400 hover:underline transition-all">
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
            <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold max-w-[33rem]">
              Collaborative Consulting
            </h2>
            <p className="max-w-[28rem] text-sm md:text-base">
              We work side‑by‑side with you, listening first to understand your goals, challenges, and ambitions. Through open dialogue and a shared vision, we co‑create pragmatic, actionable plans that fit your restaurant's culture, resources, and pace—ensuring every recommendation feels natural, achievable, and truly yours.
            </p>
            <a href="#" className="text-sm md:text-base max-w-[34rem] text-blue-400 hover:underline transition-all">
              Learn more about channels <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}

export default FeaturesSection; 