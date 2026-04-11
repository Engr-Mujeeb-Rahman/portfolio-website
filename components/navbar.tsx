"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05070d]/90 backdrop-blur-xl border-b border-[#00e5ff]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#3b82f6] flex items-center justify-center">
              <span className="text-[#05070d] font-bold text-lg font-mono">M</span>
            </div>
            <span className="text-[#cbd5e1] font-semibold text-lg hidden sm:block group-hover:text-[#00e5ff] transition-colors">
              Mujeeb
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-[#cbd5e1]/80 hover:text-[#00e5ff] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00e5ff] group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-[#00e5ff] to-[#3b82f6] text-[#05070d] font-semibold hover:shadow-lg hover:shadow-[#00e5ff]/25 transition-all duration-300"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#cbd5e1] hover:text-[#00e5ff] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#05070d]/95 backdrop-blur-xl border-t border-[#00e5ff]/10 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-[#cbd5e1]/80 hover:text-[#00e5ff] transition-colors border-b border-[#00e5ff]/5 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            className="w-full mt-4 bg-gradient-to-r from-[#00e5ff] to-[#3b82f6] text-[#05070d] font-semibold"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
