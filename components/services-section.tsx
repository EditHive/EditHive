export function ServicesSection() {
  const services = [
    {
      icon: "✨",
      title: "VFX",
      description: "Create mesmerizing visual effects using the latest technology to bring your ideas to life.",
    },
    {
      icon: "✂️",
      title: "Video Cutting",
      description: "Precision editing that sharpens your story and keeps viewers engaged from start to finish.",
    },
    {
      icon: "🎞️",
      title: "Post Production",
      description: "Fine-tuning your footage with storytelling, audio syncing, and a professional polish.",
    },
    {
      icon: "🎨",
      title: "Colour Grading",
      description: "Transform the look & feel of your video with expertly applied color corrections and moods.",
    },
    {
      icon: "➡️",
      title: "Seamless Transitions",
      description: "Flawless transitions that blend scenes effortlessly, enhancing the flow of your video.",
    },
    {
      icon: "🚀",
      title: "Custome",
      description: "Dynamic animated visuals and text to elevate your storytelling and captivate your audience.",
    },
  ]

  return (
    <section id="our-services" className="py-20 bg-[#0d0d0d]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-xl text-center shadow-lg hover:shadow-[#d4af37]/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#d4af37]/10"
            >
              <div className="text-5xl mb-6 filter drop-shadow-lg">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
