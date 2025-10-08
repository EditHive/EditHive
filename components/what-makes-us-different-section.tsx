"use client"

export function WhatMakesUsDifferentSection() {
  const differences = [
    {
      icon: "🎬",
      title: "Story-Driven Editing",
      description: "We don't just cut clips — we craft narratives."
    },
    {
      icon: "⚙️", 
      title: "Custom Workflows",
      description: "Each project gets a personalized color grade, sound design, and pacing style."
    },
    {
      icon: "🧑‍💻",
      title: "Collaboration-Ready", 
      description: "We work smoothly with your footage, scripts, or even raw ideas."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "From content creators to production studios — we deliver across time zones."
    },
    {
      icon: "🔒",
      title: "Reliable & Transparent",
      description: "You'll always know your project's progress and delivery timeline."
    }
  ]

  return (
    <section className="py-20 bg-[#1a1a1a]/80 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16">
          What Makes Us Different
        </h2>
        
        {/* Circular/Radial Layout */}
        <div className="relative max-w-6xl mx-auto h-[600px] md:h-[700px] lg:h-[800px]">
          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#d4af37] to-[#f5e08e] rounded-full flex items-center justify-center shadow-2xl shadow-[#d4af37]/30">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-black font-lequire">EditHive</div>
                <div className="text-xs md:text-sm text-black/80 font-semibold">DIFFERENCE</div>
              </div>
            </div>
          </div>
          
          {/* Rotating Items Around Center */}
          {differences.map((item, index) => {
            const angle = (360 / differences.length) * index - 90; // Start from top
            const radius = 160; // Base radius - will be adjusted via CSS
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={index}
                className="absolute group cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {/* Connection Line to Center */}
                <div 
                  className="absolute w-0.5 bg-gradient-to-r from-[#d4af37]/30 to-transparent group-hover:from-[#d4af37]/60 transition-all duration-500 hidden md:block"
                  style={{
                    height: `${radius}px`,
                    transformOrigin: 'bottom center',
                    transform: `rotate(${angle + 90}deg)`,
                    bottom: '50%',
                    left: '50%',
                    marginLeft: '-1px',
                  }}
                ></div>
                
                {/* Item Container */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 group-hover:scale-110 transition-all duration-500">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/40 group-hover:border-[#d4af37] transition-all duration-500 group-hover:rotate-180"></div>
                  
                  {/* Inner Background */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1a1a1a]/90 to-[#0d0d0d]/90 backdrop-blur-sm group-hover:from-[#d4af37]/20 group-hover:to-[#f5e08e]/10 transition-all duration-500"></div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                  </div>
                  
                  {/* Tooltip on Hover - Positioned exactly on the line */}
                  <div 
                    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50"
                    style={{
                      // Position tooltip exactly on the connecting line, closer to center
                      left: `${x * 0.6}px`,
                      top: `${y * 0.6}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="bg-[#1a1a1a]/95 backdrop-blur-sm p-3 rounded-lg border border-[#d4af37]/50 shadow-xl w-40 h-20 flex flex-col justify-center">
                      <h3 className="text-xs font-bold text-[#d4af37] mb-1 text-center leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-300 text-center leading-tight overflow-hidden">
                        {item.description.length > 60 ? item.description.substring(0, 57) + '...' : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Instructions */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            <span className="text-[#d4af37] font-semibold">Hover</span> over each point to discover what sets us apart
          </p>
        </div>
      </div>
    </section>
  )
}
