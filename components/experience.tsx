"use client"

import { useState } from "react"
import { Building2, Calendar, ChevronRight, Briefcase, ArrowRight } from "lucide-react"

const experiences = [
  {
    title: "Generative & Agentic AI Engineer Intern",
    company: "NCAI, UET Peshawar",
    period: "Dec 2025 - Feb 2026",
    description: "Built LLM-based AI agents and RAG pipelines for intelligent automation systems.",
    highlights: [
      "Developed multi-agent systems using LangChain and LangGraph",
      "Implemented RAG pipelines with vector databases",
      "Created automation workflows using n8n",
      "Built conversational AI assistants with memory persistence",
    ],
    technologies: ["LangChain", "LangGraph", "RAG", "n8n", "Vector DBs"],
    color: "#00e5ff",
    gradient: "from-[#00e5ff] to-[#06b6d4]",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "ITSolera Pvt. Ltd.",
    period: "Feb 2026 - Mar 2026",
    description: "Developed deep learning models and ML-powered applications.",
    highlights: [
      "Built recommendation systems using collaborative filtering",
      "Developed CNN-based image classification models",
      "Deployed ML applications using Streamlit",
      "Implemented end-to-end ML pipelines",
    ],
    technologies: ["TensorFlow", "Keras", "Scikit-learn", "Streamlit", "CNNs"],
    color: "#3b82f6",
    gradient: "from-[#3b82f6] to-[#6366f1]",
  },
  {
    title: "Data Science Intern",
    company: "ITSolera Pvt. Ltd.",
    period: "Jul 2025 - Aug 2025",
    description: "Focused on data analysis, visualization, and preprocessing pipelines.",
    highlights: [
      "Performed exploratory data analysis on large datasets",
      "Built data cleaning and preprocessing pipelines",
      "Created interactive data visualizations",
      "Developed feature engineering strategies",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#a855f7]",
  },
]

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExp = experiences[activeIndex]

  return (
    <section id="experience" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#05070d]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 229, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#00e5ff]/3 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8b5cf6]/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Briefcase className="w-4 h-4 text-[#00e5ff]" />
            <span className="text-[#00e5ff] font-mono text-sm tracking-widest uppercase">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e2e8f0] mb-6">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#3b82f6] to-[#8b5cf6]">
              Journey
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            Building real-world AI systems across multiple organizations
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          {/* Timeline Selector */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  activeIndex === index
                    ? "glass-card"
                    : "hover:bg-[#0a0f1a]/50"
                }`}
                style={{
                  borderColor: activeIndex === index ? `${exp.color}30` : "transparent",
                }}
              >
                {/* Active Indicator */}
                {activeIndex === index && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                    style={{ backgroundColor: exp.color }}
                  />
                )}

                {/* Content */}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeIndex === index ? "scale-110" : "scale-100"
                    }`}
                    style={{ backgroundColor: `${exp.color}15` }}
                  >
                    <Building2
                      className="w-5 h-5"
                      style={{ color: exp.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold truncate transition-colors duration-300 ${
                      activeIndex === index ? "text-[#e2e8f0]" : "text-[#94a3b8]"
                    }`}>
                      {exp.company}
                    </h3>
                    <p className="text-sm text-[#64748b] truncate">{exp.title}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-[#64748b]">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                    style={{ color: exp.color }}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Experience Details Card */}
          <div
            className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            style={{ borderColor: `${activeExp.color}20` }}
          >
            {/* Background Gradient */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-10 transition-all duration-500"
              style={{ backgroundColor: activeExp.color }}
            />

            {/* Header */}
            <div className="relative mb-8">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4"
                    style={{ backgroundColor: `${activeExp.color}15`, color: activeExp.color }}
                  >
                    <Calendar className="w-3 h-3" />
                    {activeExp.period}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#e2e8f0] mb-2">
                    {activeExp.title}
                  </h3>
                  <p className="text-lg" style={{ color: activeExp.color }}>
                    {activeExp.company}
                  </p>
                </div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${activeExp.color}30, ${activeExp.color}10)`,
                  }}
                >
                  <Building2 className="w-8 h-8" style={{ color: activeExp.color }} />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#94a3b8] text-lg mb-8 leading-relaxed">
              {activeExp.description}
            </p>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-[#e2e8f0] font-semibold mb-4 flex items-center gap-2">
                <ChevronRight className="w-5 h-5" style={{ color: activeExp.color }} />
                Key Achievements
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeExp.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#0a0f1a]/50 group hover:bg-[#0a0f1a] transition-colors duration-300"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${activeExp.color}15` }}
                    >
                      <span className="text-xs font-bold" style={{ color: activeExp.color }}>
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-sm text-[#94a3b8] group-hover:text-[#e2e8f0] transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-[#e2e8f0] font-semibold mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {activeExp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: `${activeExp.color}10`,
                      color: activeExp.color,
                      border: `1px solid ${activeExp.color}20`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="100" cy="100" r="80" stroke={activeExp.color} strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" stroke={activeExp.color} strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" stroke={activeExp.color} strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
