import React from 'react';

export default function ServicesSection() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/Screenshot 2025-07-13 214220.png')" }}>
      {/* Waves overlay at the top */}
      <img 
        src="/assets/waves-beige.png"
        alt="Waves overlay"
        className="absolute top-0 left-0 w-full h-auto z-10"
      />
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative z-20">
        <h2 className="text-center text-base/7 font-semibold text-white">Expert Consulting</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Everything you need to elevate your restaurant
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg lg:rounded-l-4xl" style={{ backgroundColor: '#F4EDE4' }} />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Menu Development
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Craft innovative and profitable menus tailored to your restaurant's unique identity with expert optimization strategies.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <video
                    className="size-full object-cover object-top"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/assets/srvc-vid-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg max-lg:rounded-t-4xl" style={{ backgroundColor: '#F4EDE4' }} />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Operational Excellence</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Streamline your restaurant operations with comprehensive solutions for kitchen workflows and staff training.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <video
                  className="w-full max-lg:max-w-xs rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/srvc-vid-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg" style={{ backgroundColor: '#F4EDE4' }} />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Brand Strategy</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Create compelling brand identities that resonate with your target audience through effective digital presence.
                </p>
              </div>
              <div className="@container flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                <video
                  className="h-[min(152px,40cqw)] object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/srvc-vid-3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg max-lg:rounded-b-4xl lg:rounded-r-4xl" style={{ backgroundColor: '#F4EDE4' }} />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Financial Planning
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Comprehensive support for revenue optimization, budget management, and strategic investment planning.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/assets/srvc-vid-4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
