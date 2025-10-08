"use client"

export function WhyChooseUsSection() {
  const features = [
    {
      title: "Creative Excellence",
      description: "Our editors combine technical precision with cinematic storytelling to make every frame stand out.",
      icon: "🎨"
    },
    {
      title: "Fast Turnaround", 
      description: "Delivering high-quality videos on tight deadlines — without compromise.",
      icon: "⚡"
    },
    {
      title: "Client-Focused Approach",
      description: "Every project starts with your vision — and we make it sharper, smoother, and more engaging.",
      icon: "🎯"
    },
    {
      title: "Professional Tools",
      description: "From Adobe to DaVinci, we use industry-leading software for flawless results.",
      icon: "⚙️"
    },
    {
      title: "Affordable Quality",
      description: "Premium-grade editing at prices that work for creators, brands, and startups alike.",
      icon: "💎"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0d0d0d]/80 to-[#1a1a1a]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16 font-lequire">
          Why Choose <span className="font-lequire">EditHive</span>?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a]/60 backdrop-blur-sm p-8 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#d4af37]/20"
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}