"use client"

import { useState } from "react"
import { Code2, Brain, Sparkles, Layers, Database, Wrench, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    color: "#00e5ff",
    description: "Core languages for AI development",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "#3b82f6",
    description: "Machine learning fundamentals",
    skills: [
      { name: "Deep Learning", level: 90 },
      { name: "NLP", level: 88 },
      { name: "Computer Vision", level: 82 },
      { name: "Recommendation Systems", level: 85 },
      { name: "Neural Networks", level: 90 },
    ],
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    color: "#8b5cf6",
    description: "LLMs and modern AI systems",
    skills: [
      { name: "LLMs", level: 92 },
      { name: "RAG Pipelines", level: 90 },
      { name: "AI Agents", level: 88 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Fine-tuning", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "#10b981",
    description: "AI/ML frameworks & libraries",
    skills: [
      { name: "LangChain", level: 92 },
      { name: "LangGraph", level: 88 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "#f59e0b",
    description: "Data storage & vector DBs",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "ChromaDB", level: 90 },
      { name: "Pinecone", level: 85 },
      { name: "Firebase", level: 82 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "#ef4444",
    description: "Development & deployment",
    skills: [
      { name: "Streamlit", level: 95 },
      { name: "Docker", level: 78 },
      { name: "Git/GitHub", level: 90 },
      { name: "n8n", level: 85 },
      { name: "API Integration", level: 92 },
    ],
  },
]

function SkillBar({ name, level, color, isActive }: { name: string; level: number; color: string; isActive: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[#94a3b8] group-hover:text-[#e2e8f0] transition-colors">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#0a0f1a] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isActive ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: isActive ? `0 0 10px ${color}40` : "none",
          }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="skills" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] via-[#0a0f1a] to-[#05070d]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Zap className="w-4 h-4 text-[#00e5ff]" />
            <span className="text-[#00e5ff] font-mono text-sm tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e2e8f0] mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#3b82f6] to-[#8b5cf6]">
              Arsenal
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building intelligent systems
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === index
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#05070d]"
                    : "glass-card text-[#94a3b8] hover:text-[#e2e8f0]"
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${category.color}, ${category.color}80)`
                    : undefined,
                  boxShadow: isActive ? `0 0 30px ${category.color}30` : undefined,
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12">
          {/* Category Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              const isActive = activeCategory === index
              const isHovered = hoveredIndex === index
              return (
                <div
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isActive ? "scale-105" : "hover:scale-102"
                  }`}
                  style={{
                    borderColor: isActive ? `${category.color}40` : `${category.color}10`,
                  }}
                >
                  {/* Glow Effect */}
                  {(isActive || isHovered) && (
                    <div
                      className="absolute inset-0 opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: category.color }}
                    />
                  )}

                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300"
                      style={{
                        backgroundColor: `${category.color}15`,
                        transform: isActive || isHovered ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <h3 className="font-semibold text-[#e2e8f0] mb-1">{category.title}</h3>
                    <p className="text-xs text-[#64748b] line-clamp-2">{category.description}</p>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: category.color }}
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Skill Details */}
          <div
            className="glass-card rounded-3xl p-8 relative overflow-hidden"
            style={{ borderColor: `${skillCategories[activeCategory].color}20` }}
          >
            {/* Background Gradient */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 transition-all duration-500"
              style={{ backgroundColor: skillCategories[activeCategory].color }}
            />

            <div className="relative z-10">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${skillCategories[activeCategory].color}15` }}
                >
                  {(() => {
                    const Icon = skillCategories[activeCategory].icon
                    return <Icon className="w-7 h-7" style={{ color: skillCategories[activeCategory].color }} />
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#e2e8f0]">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-[#94a3b8]">{skillCategories[activeCategory].description}</p>
                </div>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="space-y-5">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar
                    key={`${activeCategory}-${index}`}
                    name={skill.name}
                    level={skill.level}
                    color={skillCategories[activeCategory].color}
                    isActive={true}
                  />
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-[#1e293b]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748b]">Average Proficiency</span>
                  <span className="font-mono" style={{ color: skillCategories[activeCategory].color }}>
                    {Math.round(
                      skillCategories[activeCategory].skills.reduce((a, b) => a + b.level, 0) /
                        skillCategories[activeCategory].skills.length
                    )}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Science Banner */}
        <div className="mt-16 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff]/5 via-[#3b82f6]/5 to-[#8b5cf6]/5" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#e2e8f0] mb-2">
                Data Science Expertise
              </h3>
              <p className="text-[#94a3b8] max-w-md">
                Specialized in exploratory data analysis, feature engineering, and data visualization
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["EDA", "Feature Engineering", "Data Cleaning", "Visualization", "Statistical Analysis"].map(
                (skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl text-sm font-mono bg-gradient-to-r from-[#00e5ff]/10 to-[#3b82f6]/10 text-[#00e5ff] border border-[#00e5ff]/20 hover:border-[#00e5ff]/40 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
