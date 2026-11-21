import { ArrowUpRight, Bot, Database, FileSearch, Github, ScanFace, TrendingUp, Workflow } from "lucide-react"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    title: "RAG Assistant System",
    category: "LLM / RAG",
    icon: FileSearch,
    theme: "from-blue-600 to-indigo-600",
    description:
      "Document Q&A assistant that retrieves from a vector store and answers with grounded, context-aware responses.",
    outcome: "Cut document search time by ~80%",
    technologies: ["LangChain", "ChromaDB", "OpenAI", "Streamlit"],
  },
  {
    title: "LangGraph MemoryBot",
    category: "AI Agents",
    icon: Bot,
    theme: "from-violet-600 to-purple-600",
    description:
      "Stateful conversational agent with checkpointed, multi-session memory so context carries across conversations.",
    outcome: "Full context retention across sessions",
    technologies: ["LangGraph", "PostgreSQL", "FastAPI", "React"],
  },
  {
    title: "CNN Emotion Detection",
    category: "Computer Vision",
    icon: ScanFace,
    theme: "from-cyan-600 to-blue-600",
    description:
      "Facial emotion classifier trained on FER2013 with augmentation, running in real time on webcam input.",
    outcome: "92% classification accuracy",
    technologies: ["TensorFlow", "Keras", "OpenCV"],
  },
  {
    title: "Blog Writing AI Agent",
    category: "AI Agents",
    icon: Workflow,
    theme: "from-emerald-600 to-teal-600",
    description:
      "Multi-agent pipeline with separate research, writing and editing steps for structured long-form content.",
    outcome: "~70% of workflow automated",
    technologies: ["LangChain", "GPT-4", "n8n", "Notion API"],
  },
  {
    title: "Adaptive Synthetic Data Toolkit",
    category: "Data Science",
    icon: Database,
    theme: "from-amber-500 to-orange-600",
    description:
      "Data augmentation framework that generates and validates synthetic samples for small or imbalanced datasets.",
    outcome: "~25% boost in model accuracy",
    technologies: ["Python", "Pandas", "Scikit-learn", "SMOTE"],
  },
  {
    title: "Financial Risk Prediction",
    category: "Machine Learning",
    icon: TrendingUp,
    theme: "from-rose-500 to-pink-600",
    description:
      "Ensemble models for churn prediction, risk scoring and anomaly detection with an interactive dashboard.",
    outcome: "~30% reduction in customer churn",
    technologies: ["XGBoost", "Random Forest", "Streamlit"],
  },
]

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      tone="slate"
      title={
        <>
          Featured <span className="text-blue-600">projects</span>
        </>
      }
      intro="A selection of AI and machine learning work, each built end to end — from data to deployed interface."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = p.icon
          return (
            <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-900/10">
                <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${p.theme}`}>
                  <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />
                  <div aria-hidden className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </span>
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{p.description}</p>

                  <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">
                    <TrendingUp className="h-4 w-4" />
                    {p.outcome}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.technologies.map((t) => (
                      <span key={t} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-slate-600">For all projects, visit my GitHub.</p>
        <a
          href="https://github.com/Engr-Mujeeb-Rahman"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
        >
          <Github className="h-5 w-5" />
          View all projects on GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </Section>
  )
}
