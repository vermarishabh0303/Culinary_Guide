import React from 'react';

function AboutTeamSection() {
  return (
    <section className="flex justify-center about-team-section">
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
  );
}

export default AboutTeamSection; 