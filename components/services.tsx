import { ArrowRight, Bot, Eye, MessageSquareText, Rocket } from "lucide-react"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: Eye,
    title: "Computer Vision Solutions",
    description: "Detection, classification and video analytics pipelines — from dataset preparation to deployed inference.",
    points: ["Object detection", "Image classification", "Video analytics"],
  },
  {
    icon: MessageSquareText,
    title: "LLM & RAG Applications",
    description: "Chatbots, assistants and document Q&A grounded in your own data with measurable retrieval quality.",
    points: ["Custom chatbots", "Document Q&A", "LLM integrations"],
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Multi-step agents and workflow automation with LangGraph and n8n that plug into your existing tools.",
    points: ["Multi-agent systems", "Workflow automation", "Task orchestration"],
  },
  {
    icon: Rocket,
    title: "AI Prototypes & MVPs",
    description: "Fast, working demos and dashboards to validate an AI product idea before a full build.",
    points: ["Streamlit dashboards", "Proof of concept", "MVP development"],
  },
]

const steps = [
  { n: "01", title: "Understand", text: "Clarify the problem, data and success metrics with you." },
  { n: "02", title: "Build", text: "Design the architecture and develop iteratively with regular demos." },
  { n: "03", title: "Deliver", text: "Deploy, document and hand over — then measure and improve." },
]

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      tone="slate"
      title={
        <>
          How I can <span className="text-blue-600">help you</span>
        </>
      }
      intro="Available for freelance and contract AI projects alongside my current role."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, description, points }, i) => (
          <Reveal key={title} delay={i * 80} className="h-full">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">
              <div aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">{description}</p>
              <ul className="mt-5 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 shadow-lg shadow-slate-900/5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 bg-white p-6">
              <span className="font-display text-3xl font-extrabold text-blue-600/25">{s.n}</span>
              <div>
                <p className="font-display font-bold text-slate-900">{s.title}</p>
                <p className="mt-1 text-[15px] text-slate-600">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-10 text-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Start a project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
    </Section>
  )
}
