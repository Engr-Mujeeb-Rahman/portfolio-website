"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, Zap, Brain, Bot, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const roles = [
  "AI Engineer",
  "LLM Specialist", 
  "ML Developer",
  "RAG Architect",
  "AI Agent Builder"
]

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "LangChain", icon: "🦜" },
  { name: "PyTorch", icon: "🔥" },
  { name: "FastAPI", icon: "⚡" },
  { name: "OpenAI", icon: "🤖" },
  { name: "RAG", icon: "📚" },
]

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Advanced particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      pulse: number
    }

    const particles: Particle[] = []
    const particleCount = 80
    const colors = ["#00e5ff", "#3b82f6", "#8b5cf6", "#10b981"]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections with gradient
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 180) {
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, p1.color)
            gradient.addColorStop(1, p2.color)
            
            ctx.beginPath()
            ctx.strokeStyle = gradient
            ctx.globalAlpha = 0.08 * (1 - distance / 180)
            ctx.lineWidth = 0.8
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        })
      })

      // Draw and update particles
      particles.forEach((p) => {
        p.pulse += 0.02
        const pulseSize = p.size + Math.sin(p.pulse) * 0.5

        // Glow effect
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseSize * 4)
        glow.addColorStop(0, p.color)
        glow.addColorStop(1, "transparent")
        
        ctx.beginPath()
        ctx.fillStyle = glow
        ctx.globalAlpha = p.alpha * 0.3
        ctx.arc(p.x, p.y, pulseSize * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Particle Canvas */}
      {isClient && <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />}
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      {/* Floating Orbs with Parallax */}
      <div 
        className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-[#00e5ff]/10 blur-[100px] transition-transform duration-200"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-32 left-[10%] w-80 h-80 rounded-full bg-[#8b5cf6]/10 blur-[120px] transition-transform duration-200"
        style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3b82f6]/5 blur-[150px]"
      />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#00e5ff]/20 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-60 bg-gradient-to-t from-transparent via-[#8b5cf6]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card mb-8 group hover:glow-cyan cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
              </span>
              <span className="text-sm text-[#cbd5e1]/80 font-medium">Open to AI/ML Opportunities</span>
              <Sparkles className="w-4 h-4 text-[#f59e0b] animate-pulse" />
            </div>

            {/* Pre-heading */}
            <p className="text-[#00e5ff] font-mono text-sm md:text-base mb-4 flex items-center justify-center lg:justify-start gap-2">
              <Terminal className="w-4 h-4" />
              <span className="opacity-60">{">"}</span> Hello World, I&apos;m
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="text-[#cbd5e1] block">Muhammad</span>
              <span className="text-gradient block mt-1">Mujeeb Ur Rahman</span>
            </h1>

            {/* Animated Role */}
            <div className="h-12 md:h-14 flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-mono">
                <span className="text-[#64748b]">{"<"}</span>
                <span className="text-[#00e5ff]">{displayedText}</span>
                <span className="w-0.5 h-6 md:h-8 bg-[#00e5ff] animate-pulse" />
                <span className="text-[#64748b]">{"/>"}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-[#cbd5e1]/70 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Building intelligent systems that <span className="text-[#00e5ff] font-medium">think</span>, 
              <span className="text-[#3b82f6] font-medium"> learn</span>, and 
              <span className="text-[#8b5cf6] font-medium"> automate</span>. Specializing in production-ready 
              RAG pipelines, autonomous AI agents, and enterprise LLM solutions.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#00e5ff]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#cbd5e1]">25+</p>
                  <p className="text-xs text-[#64748b]">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#cbd5e1]">2+</p>
                  <p className="text-xs text-[#64748b]">Years Exp</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#8b5cf6]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#cbd5e1]">5+</p>
                  <p className="text-xs text-[#64748b]">AI Agents</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-[#00e5ff] to-[#3b82f6] text-[#05070d] font-semibold px-8 py-6 text-base hover:shadow-xl hover:shadow-[#00e5ff]/25 transition-all duration-300 group"
              >
                <a href="#projects">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#00e5ff]/30 text-[#00e5ff] hover:bg-[#00e5ff]/10 hover:border-[#00e5ff]/50 px-8 py-6 text-base transition-all duration-300 group"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <span className="text-xs text-[#64748b] uppercase tracking-wider">Connect</span>
              <div className="h-px w-8 bg-gradient-to-r from-[#00e5ff]/50 to-transparent" />
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/Engr-Mujeeb-Rahman", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-mujeeb-ur-rahman-se/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:mujeebbadwan1155@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[#cbd5e1]/60 hover:text-[#00e5ff] hover:glow-cyan hover:scale-110 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Main Card */}
            <div 
              className="relative w-full max-w-md transition-transform duration-200"
              style={{ transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` }}
            >
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00e5ff]/20 via-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-3xl blur-2xl animate-pulse-glow" />
              
              {/* Card */}
              <div className="relative glass-card rounded-2xl p-6 md:p-8">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <span className="ml-3 text-xs text-[#64748b] font-mono">mujeeb@ai-engineer:~</span>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00e5ff] via-[#3b82f6] to-[#8b5cf6] p-1 animate-float">
                      <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-[#0b1020]">
                        <Image
                          src="https://i.postimg.cc/X7GStWYc/Mujeeb-professional.jpg"
                          alt="Muhammad Mujeeb Ur Rahman"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-[#10b981] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#cbd5e1]">Muhammad Mujeeb</h3>
                  <p className="text-sm text-[#00e5ff] font-mono">@ai_engineer</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs text-[#64748b] uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="px-3 py-1.5 rounded-lg bg-[#05070d]/50 border border-[#00e5ff]/10 text-xs font-mono text-[#cbd5e1]/80 hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/5 transition-all cursor-default flex items-center gap-1.5"
                      >
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="rounded-xl bg-[#05070d]/80 p-4 font-mono text-xs">
                  <p className="text-[#64748b]">// Current Focus</p>
                  <p className="mt-1">
                    <span className="text-[#c678dd]">const</span>{" "}
                    <span className="text-[#e5c07b]">mission</span>{" "}
                    <span className="text-[#56b6c2]">=</span>{" "}
                    <span className="text-[#98c379]">{'"Build AI that'}</span>
                  </p>
                  <p className="ml-4">
                    <span className="text-[#98c379]">{'transforms industries"'}</span>;
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass-card glow-cyan">
                  <p className="text-sm font-bold text-[#00e5ff] flex items-center gap-1">
                    <Brain className="w-4 h-4" />
                    AI/ML
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[#64748b] font-mono tracking-wider">SCROLL TO EXPLORE</span>
          <a href="#about" className="w-8 h-12 rounded-full border border-[#00e5ff]/30 flex flex-col items-center justify-center hover:border-[#00e5ff]/60 transition-colors group">
            <ChevronDown className="w-4 h-4 text-[#00e5ff] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
