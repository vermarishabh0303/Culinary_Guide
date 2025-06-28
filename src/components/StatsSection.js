import React from 'react';

function StatsSection() {
  return (
    <section className="flex justify-center bg-gray-900">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-around pt-2 md:pt-4 pb-14 md:pb-16 w-full max-w-[1400px] text-center px-6">
        <div className="p-2 w-56">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold" style={{color: '#F5F5DC'}}>
            <span className="counter" data-count="20">0</span>+
          </h1>
          <p className="text-sm mt-2" style={{color: '#F5F5DC'}}>Combined experience in industry</p>
        </div>
        <div className="p-2 w-56">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold" style={{color: '#F5F5DC'}}>
            <span className="counter" data-count="10">0</span>+
          </h1>
          <p className="text-sm mt-2" style={{color: '#F5F5DC'}}>Food brands</p>
        </div>
        <div className="p-2 w-56">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold" style={{color: '#F5F5DC'}}>
            <span className="counter" data-count="150">0</span>+
          </h1>
          <p className="text-sm mt-2" style={{color: '#F5F5DC'}}>Individual stores managed</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection; 