"use client"

import { useState } from "react"
import { MessageSquareCode, BrainCircuit, Bot, Rocket, ArrowRight, Lightbulb, Cog, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: MessageSquareCode,
    title: "LLM Application Development",
    description: "Custom chatbots, AI assistants, and RAG-based question-answering systems that leverage the power of large language models.",
    features: [
      "Conversational AI chatbots",
      "Document Q&A systems",
      "RAG pipeline implementation",
      "Custom LLM integrations",
    ],
    color: "#00e5ff",
    gradient: "from-[#00e5ff] to-[#06b6d4]",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Models",
    description: "End-to-end ML solutions for classification, prediction, and recommendation systems tailored to your business needs.",
    features: [
      "Predictive analytics",
      "Recommendation engines",
      "Classification models",
      "Time series forecasting",
    ],
    color: "#3b82f6",
    gradient: "from-[#3b82f6] to-[#6366f1]",
  },
  {
    icon: Bot,
    title: "AI Automation Systems",
    description: "Intelligent agents and workflow automation using LangChain and n8n to streamline your business processes.",
    features: [
      "Multi-agent systems",
      "Workflow automation",
      "Task orchestration",
      "Process optimization",
    ],
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#a855f7]",
  },
  {
    icon: Rocket,
    title: "AI Product Prototyping",
    description: "Rapid MVP development with Streamlit dashboards and interactive demos to validate your AI product ideas.",
    features: [
      "Streamlit dashboards",
      "Interactive demos",
      "Proof of concept",
      "MVP development",
    ],
    color: "#10b981",
    gradient: "from-[#10b981] to-[#14b8a6]",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Business Planning",
    description: "Understanding your requirements, goals, and defining the scope of the AI solution.",
    icon: Lightbulb,
    color: "#00e5ff",
  },
  {
    step: "02",
    title: "Design Strategy",
    description: "Architecting the system, selecting technologies, and planning the implementation approach.",
    icon: Cog,
    color: "#3b82f6",
  },
  {
    step: "03",
    title: "Grow Your Business",
    description: "Deploying the solution, monitoring performance, and iterating for continuous improvement.",
    icon: BarChart3,
    color: "#8b5cf6",
  },
]

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#05070d]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Rocket className="w-4 h-4 text-[#00e5ff]" />
            <span className="text-[#00e5ff] font-mono text-sm tracking-widest uppercase">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e2e8f0] mb-6">
            Expertise Service!{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#3b82f6] to-[#8b5cf6]">
              Let&apos;s check it out
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            Specialized AI and ML services to transform your ideas into intelligent solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredService === index
            return (
              <div
                key={index}
                className="group glass-card rounded-3xl p-8 relative overflow-hidden transition-all duration-500"
                style={{
                  borderColor: isHovered ? `${service.color}40` : `${service.color}10`,
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] transition-opacity duration-500"
                  style={{
                    backgroundColor: service.color,
                    opacity: isHovered ? 0.1 : 0.03,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}05)`,
                        transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.color }} />
                    </div>
                    <span
                      className="text-6xl font-bold opacity-10 font-mono"
                      style={{ color: service.color }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#e2e8f0] mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-[#94a3b8] mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors duration-300"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor: service.color,
                            boxShadow: isHovered ? `0 0 8px ${service.color}` : "none",
                          }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-sm font-medium hover:bg-transparent"
                    style={{ color: service.color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Corner Decoration */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 opacity-5"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${service.color} 50%)`,
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <Cog className="w-4 h-4 text-[#00e5ff]" />
              <span className="text-[#00e5ff] font-mono text-sm tracking-widest uppercase">Process</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#e2e8f0]">My Working Process</h3>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent -translate-y-1/2" />

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {processSteps.map((process, index) => {
                const Icon = process.icon
                return (
                  <div key={index} className="text-center group relative">
                    {/* Step Number Background */}
                    <div className="relative inline-block mb-8">
                      <div
                        className="w-24 h-24 rounded-3xl mx-auto flex items-center justify-center glass-card transition-all duration-500 group-hover:scale-110 relative overflow-hidden"
                        style={{ borderColor: `${process.color}20` }}
                      >
                        {/* Glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                          style={{ backgroundColor: process.color }}
                        />
                        
                        {/* Icon */}
                        <Icon className="w-10 h-10 relative z-10" style={{ color: process.color }} />
                      </div>

                      {/* Step Badge */}
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                        style={{
                          background: `linear-gradient(135deg, ${process.color}, ${process.color}80)`,
                          color: "#05070d",
                        }}
                      >
                        {process.step}
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-semibold text-[#e2e8f0] mb-3">{process.title}</h4>
                    <p className="text-[#94a3b8] leading-relaxed max-w-xs mx-auto">{process.description}</p>

                    {/* Arrow (hidden on last item) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-12 -right-6 transform translate-x-1/2">
                        <ArrowRight className="w-6 h-6 text-[#1e293b]" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
