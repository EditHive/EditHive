"use client"

export function WhyChooseUsSection() {
  const features = [
    {
      title: "Creative Excellence",
      description: "Our editors combine technical precision with cinematic storytelling to make every frame stand out.",
      icon: "🎨",
      number: "01"
    },
    {
      title: "Fast Turnaround", 
      description: "Delivering high-quality videos on tight deadlines — without compromise.",
      icon: "⚡",
      number: "02"
    },
    {
      title: "Client-Focused Approach",
      description: "Every project starts with your vision — and we make it sharper, smoother, and more engaging.",
      icon: "🎯",
      number: "03"
    },
    {
      title: "Professional Tools",
      description: "From Adobe to DaVinci, we use industry-leading software for flawless results.",
      icon: "⚙️",
      number: "04"
    },
    {
      title: "Affordable Quality",
      description: "Premium-grade editing at prices that work for creators, brands, and startups alike.",
      icon: "💎",
      number: "05"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0d0d0d]/80 to-[#1a1a1a]/80 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16 font-lequire">
          Why Choose <span className="font-lequire">EditHive</span>?
        </h2>
        
        {/* Split Screen Magazine Layout */}
        <div className="max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className={`group relative mb-16 last:mb-0`}>
              <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Left Side - Icon & Number */}
                <div className="flex-shrink-0 relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
                    {/* Background circle with gradient */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#f5e08e]/10 group-hover:from-[#d4af37]/40 group-hover:to-[#f5e08e]/20 transition-all duration-500"></div>
                    
                    {/* Rotating border */}
                    <div className="absolute inset-2 rounded-full border-2 border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-all duration-500 group-hover:rotate-180"></div>
                    
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </span>
                    </div>
                    
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#d4af37] text-black font-bold rounded-full flex items-center justify-center text-sm group-hover:bg-[#f5e08e] group-hover:scale-125 transition-all duration-300">
                      {feature.number}
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Decorative line */}
                  <div className={`h-0.5 w-16 bg-[#d4af37]/50 group-hover:bg-[#d4af37] group-hover:w-24 transition-all duration-500 mb-6 ${
                    index % 2 === 1 ? 'lg:ml-auto' : 'mx-auto lg:mx-0'
                  }`}></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#d4af37] mb-6 group-hover:text-[#f5e08e] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg lg:text-xl leading-relaxed group-hover:text-white transition-colors duration-300 max-w-2xl">
                    {feature.description}
                  </p>
                  
                  {/* Quote marks decoration */}
                  <div className="mt-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <span className="text-6xl text-[#d4af37] font-serif">“</span>
                  </div>
                </div>
              </div>
              
              {/* Connecting line to next item */}
              {index < features.length - 1 && (
                <div className="mt-16 flex justify-center">
                  <div className="w-px h-12 bg-gradient-to-b from-[#d4af37]/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
