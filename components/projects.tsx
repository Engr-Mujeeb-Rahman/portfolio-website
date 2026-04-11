"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowRight, Folder, ChevronRight, X, Target, Lightbulb, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "LLM/RAG", "Machine Learning", "Deep Learning", "Data Science"]

const projects = [
  {
    title: "RAG Assistant System",
    category: "LLM/RAG",
    description: "Document-based Q&A chatbot using embeddings and vector database for intelligent information retrieval.",
    problem: "Organizations struggle to extract insights from large document repositories efficiently.",
    approach: "Built a RAG pipeline using LangChain with ChromaDB for vector storage and semantic search.",
    technologies: ["LangChain", "ChromaDB", "OpenAI", "Streamlit", "Python"],
    outcome: "Reduced document search time by 80% with accurate, context-aware responses.",
    color: "#00e5ff",
    featured: true,
  },
  {
    title: "LangGraph MemoryBot",
    category: "LLM/RAG",
    description: "Persistent AI agent with multi-session memory and stateful conversations.",
    problem: "Traditional chatbots lack memory persistence across sessions, limiting user experience.",
    approach: "Implemented LangGraph with checkpointing for state management and memory persistence.",
    technologies: ["LangGraph", "LangChain", "PostgreSQL", "FastAPI", "React"],
    outcome: "Achieved seamless multi-session conversations with full context retention.",
    color: "#3b82f6",
    featured: true,
  },
  {
    title: "Adaptive Synthetic Data Toolkit",
    category: "Data Science",
    description: "Data augmentation framework for enhancing ML model training datasets.",
    problem: "Limited training data often leads to overfitting and poor model generalization.",
    approach: "Developed synthetic data generation techniques with quality validation pipelines.",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "SMOTE"],
    outcome: "Improved model accuracy by 25% through intelligent data augmentation.",
    color: "#8b5cf6",
    featured: false,
  },
  {
    title: "Blog Writing AI Agent",
    category: "LLM/RAG",
    description: "Automated structured content generation system for blog posts and articles.",
    problem: "Content creation is time-consuming and often lacks consistency in quality.",
    approach: "Built a multi-agent system with research, writing, and editing capabilities.",
    technologies: ["LangChain", "GPT-4", "n8n", "Notion API", "Python"],
    outcome: "Automated 70% of content creation workflow with consistent quality output.",
    color: "#10b981",
    featured: true,
  },
  {
    title: "Movie Recommendation System",
    category: "Machine Learning",
    description: "Content-based filtering engine for personalized movie recommendations.",
    problem: "Users struggle to discover relevant content from vast movie catalogs.",
    approach: "Implemented TF-IDF vectorization with cosine similarity for content matching.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "TF-IDF"],
    outcome: "Achieved 85% user satisfaction rate in recommendation relevance.",
    color: "#f59e0b",
    featured: false,
  },
  {
    title: "CNN Emotion Detection",
    category: "Deep Learning",
    description: "Deep learning facial emotion classifier using convolutional neural networks.",
    problem: "Manual emotion analysis is subjective and time-intensive for large-scale applications.",
    approach: "Trained CNN model on FER2013 dataset with data augmentation techniques.",
    technologies: ["TensorFlow", "Keras", "OpenCV", "CNN", "Python"],
    outcome: "Achieved 92% accuracy in real-time emotion classification.",
    color: "#ef4444",
    featured: false,
  },
  {
    title: "Financial Risk Prediction",
    category: "Machine Learning",
    description: "Churn prediction, disease risk assessment, and anomaly detection models.",
    problem: "Businesses need proactive risk identification to prevent customer loss and fraud.",
    approach: "Ensemble methods combining Random Forest, XGBoost, and neural networks.",
    technologies: ["XGBoost", "Random Forest", "TensorFlow", "Pandas", "Streamlit"],
    outcome: "Reduced customer churn by 30% through early intervention alerts.",
    color: "#00e5ff",
    featured: false,
  },
]

interface Project {
  title: string
  category: string
  description: string
  problem: string
  approach: string
  technologies: string[]
  outcome: string
  color: string
  featured: boolean
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#05070d]/90 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-8"
        style={{ borderColor: `${project.color}30` }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-[#1e293b] transition-colors"
        >
          <X className="w-5 h-5 text-[#94a3b8]" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4"
            style={{ backgroundColor: `${project.color}15`, color: project.color }}
          >
            <Folder className="w-3 h-3" />
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-[#e2e8f0]">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-[#94a3b8] mb-6 leading-relaxed">{project.description}</p>

        {/* Details */}
        <div className="space-y-6">
          {/* Problem */}
          <div className="flex gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.color}15` }}
            >
              <Target className="w-5 h-5" style={{ color: project.color }} />
            </div>
            <div>
              <h4 className="font-semibold text-[#e2e8f0] mb-1">Problem</h4>
              <p className="text-sm text-[#94a3b8]">{project.problem}</p>
            </div>
          </div>

          {/* Approach */}
          <div className="flex gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.color}15` }}
            >
              <Lightbulb className="w-5 h-5" style={{ color: project.color }} />
            </div>
            <div>
              <h4 className="font-semibold text-[#e2e8f0] mb-1">Approach</h4>
              <p className="text-sm text-[#94a3b8]">{project.approach}</p>
            </div>
          </div>

          {/* Outcome */}
          <div className="flex gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.color}15` }}
            >
              <CheckCircle2 className="w-5 h-5" style={{ color: project.color }} />
            </div>
            <div>
              <h4 className="font-semibold text-[#e2e8f0] mb-1">Outcome</h4>
              <p className="text-sm text-[#94a3b8]">{project.outcome}</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8 pt-6 border-t border-[#1e293b]">
          <h4 className="text-sm font-semibold text-[#e2e8f0] mb-4">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-sm font-mono"
                style={{
                  backgroundColor: `${project.color}10`,
                  color: project.color,
                  border: `1px solid ${project.color}20`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <Button
            className="flex-1"
            style={{
              background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`,
              color: "#05070d",
            }}
          >
            <Github className="w-4 h-4 mr-2" />
            View Code
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-[#1e293b] text-[#e2e8f0] hover:bg-[#1e293b]"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] via-[#0a0f1a] to-[#05070d]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Folder className="w-4 h-4 text-[#00e5ff]" />
            <span className="text-[#00e5ff] font-mono text-sm tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e2e8f0] mb-6">
            Digital Product{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#3b82f6] to-[#8b5cf6]">
              Showcases
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            A curated collection of AI and ML projects demonstrating end-to-end solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#00e5ff] to-[#3b82f6] text-[#05070d] shadow-lg shadow-[#00e5ff]/20"
                  : "glass-card text-[#94a3b8] hover:text-[#e2e8f0] hover:border-[#00e5ff]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProject === index
            return (
              <div
                key={index}
                className="group glass-card rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
                style={{
                  borderColor: isHovered ? `${project.color}40` : `${project.color}10`,
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header */}
                <div
                  className="h-44 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
                >
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${project.color}30 1px, transparent 0)`,
                      backgroundSize: '20px 20px',
                    }} />
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/30">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: `${project.color}20`,
                        transform: isHovered ? "scale(1.2) rotate(5deg)" : "scale(1) rotate(0deg)",
                      }}
                    >
                      <Folder className="w-8 h-8" style={{ color: project.color }} />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundColor: `${project.color}E6` }}
                  >
                    <button
                      className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open("https://github.com/Engr-Mujeeb-Rahman", "_blank")
                      }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button
                      className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#e2e8f0] mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-lg text-xs font-mono bg-[#0a0f1a] text-[#94a3b8]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-mono bg-[#0a0f1a] text-[#64748b]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details */}
                  <div className="flex items-center text-sm font-medium group/link" style={{ color: project.color }}>
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#00e5ff] to-[#3b82f6] text-[#05070d] font-semibold hover:shadow-lg hover:shadow-[#00e5ff]/25 transition-all duration-300 px-8"
          >
            <a href="https://github.com/Engr-Mujeeb-Rahman" target="_blank" rel="noopener noreferrer">
              View All on GitHub
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
