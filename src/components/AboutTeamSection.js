import React from 'react';

function AboutTeamSection() {
  const teamMembers = [
    {
      name: "Nishchay Puri",
      role: "Founder",
      image: "./assets/image.png"
    },
    {
      name: "Sudhanshu Paul", 
      role: "Co Founder",
      image: "./assets/image.png"
    },
    {
      name: "Sultan Amaan Salim",
      role: "Co Founder",
      image: "./assets/image.png"
    },
    {
      name: "Harsh Bahuguna",
      role: "Account Manager", 
      image: "./assets/image.png"
    },
    {
      name: "Jasmehak",
      role: "Techie",
      image: "./assets/image.png"
    },
    {
      name: "Disha",
      role: "Social Media Manager",
      image: "./assets/image.png"
    }
  ];

  return (
    <section className="flex justify-center bg-gray-900 curved-top">
      <div className="pt-40 pb-16 px-6 md:px-12 max-w-[1400px] w-full relative z-10">
        {/* Heading Section - Center Aligned */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our team</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card group cursor-pointer">
              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Member Info */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-[rgb(247,247,195)] transition-colors duration-300 mb-1">
                  {member.name}
                </h3>
                <p className="text-white group-hover:text-[rgb(247,247,195)] transition-colors duration-300">
                  {member.role}
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-[rgb(247,247,195)] transition-colors duration-300">
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTeamSection; 