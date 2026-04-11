"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Brain, Cpu, Workflow, CheckCircle2, Sparkles, Target, Zap } from "lucide-react"

const focusAreas = [
  { text: "LLM applications & RAG systems", icon: Brain },
  { text: "AI agents & autonomous systems", icon: Cpu },
  { text: "Machine learning & deep learning", icon: Sparkles },
  { text: "Data-driven automation workflows", icon: Workflow },
  { text: "Production-ready AI deployment", icon: Target },
]

const stats = [
  { value: 25, suffix: "+", label: "Completed Projects", color: "#00e5ff" },
  { value: 3.75, suffix: "", label: "CGPA", color: "#3b82f6" },
  { value: 2, suffix: " years+", label: "Experience", color: "#8b5cf6" },
  { value: 10, suffix: "+", label: "Technologies", color: "#10b981" },
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(value * easeOut)
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(2)}
      {suffix}
    </span>
  )
}

export function About() {
  const [activeArea, setActiveArea] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setActiveArea((prev) => (prev + 1) % focusAreas.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Node positions for client-side rendering
  const nodePositions = isClient ? [
    { icon: Cpu, angle: 0, delay: "0s", color: "#00e5ff" },
    { icon: Workflow, angle: 72, delay: "0.5s", color: "#3b82f6" },
    { icon: GraduationCap, angle: 144, delay: "1s", color: "#8b5cf6" },
    { icon: Sparkles, angle: 216, delay: "1.5s", color: "#10b981" },
    { icon: Target, angle: 288, delay: "2s", color: "#f59e0b" },
  ].map((node) => {
    const radius = 140
    const radian = (node.angle * Math.PI) / 180
    const x = Math.cos(radian) * radius
    const y = Math.sin(radian) * radius
    return { ...node, x, y }
  }) : []

  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] via-[#0a0f1a] to-[#05070d]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Zap className="w-4 h-4 text-[#00e5ff]" />
            <span className="text-[#00e5ff] font-mono text-sm tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e2e8f0] mb-6 leading-tight">
            Designing Solutions,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#3b82f6] to-[#8b5cf6]">
              Not Just Visuals
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            Building production-ready AI systems that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Interactive Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative glass-card rounded-3xl p-8 overflow-hidden border-[#00e5ff]/10">
              {/* Neural Network Visualization - Client Only */}
              {isClient && (
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Orbiting Rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border border-[#00e5ff]/10 animate-spin" style={{ animationDuration: "20s" }} />
                  </div>
                  <div className="absolute inset-8 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border border-[#3b82f6]/15 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
                  </div>
                  <div className="absolute inset-16 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border border-[#8b5cf6]/20 animate-spin" style={{ animationDuration: "10s" }} />
                  </div>
                  
                  {/* Center Brain */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#00e5ff] to-[#3b82f6] blur-xl opacity-50 animate-pulse" />
                      <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-[#00e5ff] to-[#3b82f6] flex items-center justify-center shadow-2xl shadow-[#00e5ff]/20">
                        <Brain className="w-14 h-14 text-[#05070d]" />
                      </div>
                    </div>
                  </div>

                  {/* Orbiting Nodes */}
                  {nodePositions.map((node, i) => {
                    const Icon = node.icon
                    return (
                      <div
                        key={i}
                        className="absolute w-14 h-14 rounded-xl glass-card flex items-center justify-center animate-float"
                        style={{
                          left: `calc(50% + ${node.x}px - 28px)`,
                          top: `calc(50% + ${node.y}px - 28px)`,
                          animationDelay: node.delay,
                          borderColor: `${node.color}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: node.color }} />
                      </div>
                    )
                  })}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {nodePositions.map((node, i) => (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${node.x}px)`}
                        y2={`calc(50% + ${node.y}px)`}
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}

              {/* Fallback for SSR */}
              {!isClient && (
                <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#00e5ff]/20 to-[#3b82f6]/20 flex items-center justify-center">
                    <Brain className="w-14 h-14 text-[#00e5ff]" />
                  </div>
                </div>
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group glass-card rounded-2xl p-5 text-center hover:scale-105 transition-all duration-300 cursor-default"
                  style={{ borderColor: `${stat.color}15` }}
                >
                  <p className="text-3xl md:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-[#94a3b8]">{stat.label}</p>
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `0 0 30px ${stat.color}15` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Bio */}
            <div className="mb-8">
              <p className="text-xl text-[#e2e8f0] mb-6 leading-relaxed">
                I&apos;m <span className="text-[#00e5ff] font-semibold">Muhammad Mujeeb Ur Rahman</span>, 
                an AI Engineer and BS Software Engineering student at the University of Malakand. 
                I specialize in building end-to-end intelligent systems that go beyond traditional 
                machine learning models.
              </p>
              
              <p className="text-[#94a3b8] leading-relaxed">
                My expertise lies in LLM-based applications, Retrieval-Augmented Generation (RAG) systems, 
                AI agents, and data-driven automation. I focus on creating practical, production-ready 
                AI solutions that deliver real business value.
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-card rounded-2xl p-6 mb-8 group hover:border-[#00e5ff]/30 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff] to-[#3b82f6] rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#00e5ff]/20 to-[#3b82f6]/20 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-[#00e5ff]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#e2e8f0] mb-1">BS Software Engineering</h3>
                  <p className="text-[#94a3b8] mb-2">University of Malakand</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748b]">2023 - 2027</span>
                    <span className="px-3 py-1 rounded-full text-sm font-mono bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20">
                      CGPA: 3.75
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div>
              <h4 className="text-[#e2e8f0] font-semibold mb-5 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00e5ff]" />
                Focus Areas
              </h4>
              <div className="space-y-3">
                {focusAreas.map((area, index) => {
                  const Icon = area.icon
                  const isActive = index === activeArea
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 cursor-pointer ${
                        isActive
                          ? "glass-card border-[#00e5ff]/30 bg-[#00e5ff]/5"
                          : "hover:bg-[#0a0f1a]/50"
                      }`}
                      onMouseEnter={() => setActiveArea(index)}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive ? "bg-[#00e5ff]/20" : "bg-[#0a0f1a]"
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? "text-[#00e5ff]" : "text-[#64748b]"
                        }`} />
                      </div>
                      <span className={`flex-1 transition-colors duration-300 ${
                        isActive ? "text-[#e2e8f0]" : "text-[#94a3b8]"
                      }`}>
                        {area.text}
                      </span>
                      <CheckCircle2 className={`w-5 h-5 transition-all duration-300 ${
                        isActive ? "text-[#00e5ff] scale-100" : "text-[#64748b]/30 scale-90"
                      }`} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
