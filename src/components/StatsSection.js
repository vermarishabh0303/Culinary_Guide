import React from 'react';

function StatsSection() {
  return (
    <section className="flex justify-center bg-gray-900">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 py-6 md:py-8 w-full max-w-[1400px] px-6">
        {/* Stats with descriptions on left side */}
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex items-center gap-4 p-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold" style={{color: '#F5F5DC'}}>
              <span className="counter" data-count="700">0</span>M
            </h1>
            <p className="text-sm" style={{color: '#F5F5DC'}}>messages sent daily¹</p>
          </div>
          <div className="flex items-center gap-4 p-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold" style={{color: '#F5F5DC'}}>
              <span className="counter" data-count="4">0</span>M
            </h1>
            <p className="text-sm" style={{color: '#F5F5DC'}}>Slack Connect users working directly with external teams each week¹</p>
          </div>
          <div className="flex items-center gap-4 p-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold" style={{color: '#F5F5DC'}}>
              <span className="counter" data-count="3">0</span>M
            </h1>
            <p className="text-sm" style={{color: '#F5F5DC'}}>daily workflows¹</p>
          </div>
        </div>
        
        {/* Longer and lighter peach colored divider line */}
        <div className="hidden md:block w-1 mx-6 h-[400px]" style={{backgroundColor: '#f4ede4'}}></div>
        
        {/* Descriptive text on right side */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-base md:text-lg leading-relaxed" style={{color: '#F5F5DC'}}>
            Over two decades of hands-on expertise, trusted by top food brands and hundreds of thriving restaurant locations. Our comprehensive culinary consulting services have transformed countless establishments, from small family-owned eateries to large-scale restaurant chains. We bring proven methodologies, innovative menu development strategies, and operational excellence that drives sustainable growth and customer satisfaction across the food service industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection; 