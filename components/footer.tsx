"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Engr-Mujeeb-Rahman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-mujeeb-ur-rahman-se/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mujeebbadwan1155@gmail.com", label: "Email" },
]

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#05070d]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#3b82f6] flex items-center justify-center">
              <span className="text-[#05070d] font-bold text-lg font-mono">M</span>
            </div>
            <span className="text-[#cbd5e1] font-semibold text-lg">Mujeeb</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#cbd5e1]/60 hover:text-[#00e5ff] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-[#cbd5e1]/60 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-[#00e5ff]/10" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#cbd5e1]/50">
          <p>
            &copy; Copyright 2023 – {currentYear} All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#ef4444]" /> by Muhammad Mujeeb Ur Rahman
          </p>
        </div>
      </div>
    </footer>
  )
}
