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

  const colors = [
    '#A8DADC', // Light blue
    '#F8BBD9', // Light pink 
    '#B19CD9', // Light purple
    '#C8E6C9', // Light green
    '#FFE0B2', // Light orange
    '#D1C4E9'  // Light lavender
  ];

  return (
    <section className="w-full" style={{ backgroundColor: '#F4EDE4' }}>
      <div className="pt-20 px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Heading Section - Center Aligned */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our team</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        
        {/* Team Layout - Mobile vs Desktop */}
        <div className="mb-16">
                     {/* Mobile Layout - Small Circular Icons */}
           <div className="grid grid-cols-3 gap-4 md:hidden">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <div 
                  className="w-16 h-16 rounded-full overflow-hidden"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs text-gray-600">{member.role}</p>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Original Team Capsules */}
          <div className="hidden md:flex justify-center items-center">
            <div className="flex gap-6 justify-center max-w-7xl">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="team-capsule relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out h-[400px] w-44 hover:w-72 group"
                  style={{
                    borderRadius: '48px',
                    backgroundColor: colors[index % colors.length],
                    transition: 'all 0.5s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderRadius = '24px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderRadius = '48px';
                  }}
                >
                {/* Image Container */}
                <div 
                  className="absolute inset-0 overflow-hidden transition-all duration-500"
                  style={{ 
                    borderRadius: '48px',
                    transition: 'border-radius 0.5s ease-in-out'
                  }}
                  ref={(el) => {
                    if (el) {
                      const card = el.parentElement;
                      const updateRadius = () => {
                        el.style.borderRadius = card.style.borderRadius;
                      };
                      card.addEventListener('mouseenter', updateRadius);
                      card.addEventListener('mouseleave', updateRadius);
                    }
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay that appears on hover */}
                <div 
                  className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                  style={{ 
                    borderRadius: '48px',
                    transition: 'all 0.5s ease-in-out'
                  }}
                  ref={(el) => {
                    if (el) {
                      const card = el.parentElement;
                      const updateRadius = () => {
                        el.style.borderRadius = card.style.borderRadius;
                      };
                      card.addEventListener('mouseenter', updateRadius);
                      card.addEventListener('mouseleave', updateRadius);
                    }
                  }}
                >
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-3">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Waves Section */}
        <div className="mb-8">
          <img 
            src="/assets/waves-blue.png"
            alt="Waves border"
            className="w-full h-auto"
          />
        </div>

        {/* MonG.gif Section */}
        <div className="flex justify-center">
          <img 
            src="./assets/MonG.gif" 
            alt="MonG Animation"
            className="max-w-full h-auto opacity-90"
            style={{ maxHeight: '300px' }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutTeamSection; 