export function Footer() {
  const footerLinks = [
    { href: "#hero", label: "Home" },
    { href: "#our-work", label: "Our Work" },
    { href: "#our-services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-[#1a1a1a]/90  border-t border-[#d4af37]/20 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="text-2xl font-bold text-[#d4af37] mb-4">EditHive</div>

        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-gray-400 text-sm">© 2023 Edithive. All rights reserved.</p>
      </div>
    </footer>
  )
}
