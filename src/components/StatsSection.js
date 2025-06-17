import React from 'react';

function StatsSection() {
  return (
    <section className="flex justify-center bg-black">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-around pt-2 md:pt-4 pb-14 md:pb-16 w-full max-w-[1400px] text-center md:text-left px-6">
        <div className="p-2 w-56">
          <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-semibold">
            <span className="counter" data-count="20">0</span>+
          </h1>
          <p className="text-sm text-white">Combined experience in industry</p>
        </div>
        <div className="p-2 w-56">
          <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-semibold">
            <span className="counter" data-count="10">0</span>+
          </h1>
          <p className="text-sm text-white">Food brands</p>
        </div>
        <div className="p-2 w-56">
          <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-semibold">
            <span className="counter" data-count="150">0</span>+
          </h1>
          <p className="text-sm text-white">Individual stores managed</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection; 