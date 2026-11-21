import { Building2, CalendarDays, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"

type Role = {
  title: string
  company: string
  partner?: string
  period: string
  type: string
  current?: boolean
  description: string
  highlights?: string[]
  technologies?: string[]
}

const experiences: Role[] = [
  {
    title: "AI/CV Engineer",
    company: "Zentify Systems",
    partner: "In collaboration with ERTIKAZ ALMUTADED CO. (KSA)",
    period: "Jun 2026 – Present",
    type: "Current role",
    current: true,
    description:
      "Designing and building AI and computer vision solutions delivered for ERTIKAZ ALMUTADED CO. in Saudi Arabia.",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "ITSolera Pvt. Ltd.",
    period: "Feb 2026 – Mar 2026",
    type: "Internship",
    description: "Developed deep learning models and ML-powered applications.",
    highlights: [
      "Built recommendation systems using collaborative filtering",
      "Developed CNN-based image classification models",
      "Deployed ML applications using Streamlit",
      "Implemented end-to-end ML pipelines",
    ],
    technologies: ["TensorFlow", "Keras", "Scikit-learn", "Streamlit", "CNNs"],
  },
  {
    title: "Generative & Agentic AI Engineer Intern",
    company: "NCAI, UET Peshawar",
    period: "Dec 2025 – Feb 2026",
    type: "Internship",
    description: "Built LLM-based AI agents and RAG pipelines for intelligent automation systems.",
    highlights: [
      "Developed multi-agent systems using LangChain and LangGraph",
      "Implemented RAG pipelines with vector databases",
      "Created automation workflows using n8n",
      "Built conversational AI assistants with memory persistence",
    ],
    technologies: ["LangChain", "LangGraph", "RAG", "n8n", "Vector DBs"],
  },
  {
    title: "Data Science Intern",
    company: "ITSolera Pvt. Ltd.",
    period: "Jul 2025 – Aug 2025",
    type: "Internship",
    description: "Focused on data analysis, visualization, and preprocessing pipelines.",
    highlights: [
      "Performed exploratory data analysis on large datasets",
      "Built data cleaning and preprocessing pipelines",
      "Created interactive data visualizations",
      "Developed feature engineering strategies",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
]

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          My professional <span className="text-blue-600">journey</span>
        </>
      }
      intro="From data science internships to building production AI and computer vision systems."
    >
      <ol className="relative mx-auto max-w-4xl space-y-8 border-l-2 border-slate-200 pl-8 md:pl-12">
        {experiences.map((exp, i) => (
          <li key={`${exp.company}-${exp.title}`} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[43px] top-7 h-5 w-5 rounded-full border-4 border-white md:-left-[59px] ${
                exp.current ? "bg-blue-600 ring-4 ring-blue-100" : "bg-slate-300 ring-4 ring-slate-100"
              }`}
            />
            <Reveal delay={i * 60}>
              <article
                className={`rounded-2xl border bg-white p-6 shadow-lg shadow-slate-900/5 transition-shadow duration-300 hover:shadow-xl md:p-8 ${
                  exp.current ? "border-blue-200 ring-1 ring-blue-100" : "border-slate-200"
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        exp.current ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Building2 className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900">{exp.title}</h3>
                      <p className="mt-0.5 font-semibold text-blue-600">{exp.company}</p>
                      {exp.partner && <p className="mt-0.5 text-sm text-slate-500">{exp.partner}</p>}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                      <CalendarDays className="h-4 w-4 text-slate-500" />
                      {exp.period}
                    </span>
                    {exp.current ? (
                      <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                        Current role
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-500">{exp.type}</span>
                    )}
                  </div>
                </div>

                <p className="mt-5 leading-relaxed text-slate-600">{exp.description}</p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-[15px] text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-blue-600" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
