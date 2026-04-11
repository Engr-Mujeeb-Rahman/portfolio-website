"use client"

import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mujeebbadwan1155@gmail.com",
    href: "mailto:mujeebbadwan1155@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Engr-Mujeeb-Rahman",
    href: "https://github.com/Engr-Mujeeb-Rahman",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muhammad Mujeeb Ur Rahman",
    href: "https://www.linkedin.com/in/muhammad-mujeeb-ur-rahman-se/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dir Lower, KPK, Pakistan",
    href: "#",
  },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        "service_pb3vqvf", // Service ID
        "template_9mq8o1h", // Template ID
        {
          name: name,
          email: email,
          message: message,
        },
        "SOtaM2-ig7OnmyhHG" // Public Key
      )

      if (response.text === 'OK' || response.status === 200 || response.statusText === 'OK') {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        // Clear success message after 3 seconds
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      // Clear error message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section id="contact" className="relative py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] to-[#0a0f1a]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#00e5ff] font-mono text-sm tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Have an AI or ML project in mind? Feel free to reach out and let&apos;s discuss how I can help.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 bg-[#0f172a]/50 border border-[#1e293b] rounded-xl hover:border-[#00e5ff]/30 hover:bg-[#0f172a] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#00e5ff]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#64748b] mb-0.5">{info.label}</p>
                  <p className="text-[#e2e8f0] font-medium truncate">{info.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
              className="bg-[#0f172a]/50 border-[#1e293b] text-[#e2e8f0] placeholder-[#64748b] focus:border-[#00e5ff] disabled:opacity-50"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="bg-[#0f172a]/50 border-[#1e293b] text-[#e2e8f0] placeholder-[#64748b] focus:border-[#00e5ff] disabled:opacity-50"
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isLoading}
              rows={4}
              className="bg-[#0f172a]/50 border-[#1e293b] text-[#e2e8f0] placeholder-[#64748b] focus:border-[#00e5ff] disabled:opacity-50"
            />
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                <p className="text-[#10b981] text-sm font-medium">✓ Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg">
                <p className="text-[#ef4444] text-sm font-medium">✕ Failed to send message. Please try again.</p>
              </div>
            )}
            
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#00e5ff] to-[#3b82f6] text-[#05070d] font-semibold hover:shadow-lg hover:shadow-[#00e5ff]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 mr-2" />
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
