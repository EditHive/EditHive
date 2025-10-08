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
            
            // Calculate tooltip position at the tip of the line (near the circle)
            const tooltipDistance = radius * 0.85; // 85% of the way from center to circle (near the tip)
            const tooltipX = Math.cos((angle * Math.PI) / 180) * tooltipDistance;
            const tooltipY = Math.sin((angle * Math.PI) / 180) * tooltipDistance;
            
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
                  
                </div>
                
                {/* Tooltip aligned to individual circle */}
                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                  <div 
                    className="absolute bg-[#0d0d0d]/95 backdrop-blur-sm p-3 rounded-lg border-2 border-[#d4af37]/60 shadow-2xl w-44"
                    style={{
                      // Precise alignment relative to each circle
                      ...(index === 0 ? { // Top circle - tooltip above
                        left: '50%', 
                        bottom: 'calc(100% + 16px)', 
                        transform: 'translateX(-50%)'
                      } : index === 1 ? { // Top-right circle - tooltip to right
                        left: 'calc(100% + 16px)', 
                        top: '50%', 
                        transform: 'translateY(-50%)'
                      } : index === 2 ? { // Bottom-right circle - tooltip to right
                        left: 'calc(100% + 16px)', 
                        top: '50%', 
                        transform: 'translateY(-50%)'
                      } : index === 3 ? { // Bottom circle - tooltip below
                        left: '50%', 
                        top: 'calc(100% + 16px)', 
                        transform: 'translateX(-50%)'
                      } : { // Left circle - tooltip to left
                        right: 'calc(100% + 16px)', 
                        top: '50%', 
                        transform: 'translateY(-50%)'
                      })
                    }}
                  >
                    <h3 className="text-sm font-bold text-[#d4af37] mb-1 text-center">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 text-center leading-tight">
                      {item.description}
                    </p>
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
