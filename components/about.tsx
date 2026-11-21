import { Brain, Bot, Eye, GraduationCap, Layers, Rocket } from "lucide-react"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"

const focusAreas = [
  { icon: Eye, title: "Computer Vision", text: "Detection, classification and real-time video inference.", chip: "bg-blue-50 text-blue-600" },
  { icon: Brain, title: "LLMs & RAG", text: "Grounded assistants and document Q&A over private data.", chip: "bg-violet-50 text-violet-600" },
  { icon: Bot, title: "AI Agents", text: "Multi-step agents and automated business workflows.", chip: "bg-emerald-50 text-emerald-600" },
  { icon: Layers, title: "Machine Learning", text: "Classical ML and deep learning, from data to model.", chip: "bg-amber-50 text-amber-600" },
]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      tone="slate"
      title={
        <>
          Turning AI research into <span className="text-blue-600">real products</span>
        </>
      }
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <p className="text-xl font-medium leading-relaxed text-slate-800">
            I&apos;m Muhammad Mujeeb Ur Rahman, an AI &amp; Computer Vision Engineer and BS Software Engineering
            student at the University of Malakand.
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            I build end-to-end intelligent systems that go beyond a model in a notebook — covering data
            pipelines, training and evaluation, serving and the interface people actually use. My recent work
            spans computer vision, LLM-based applications, retrieval-augmented generation and agentic
            automation.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
            I focus on practical, production-ready solutions that deliver measurable value for the teams I work
            with.
          </p>

          <div className="mt-8 flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30">
              <GraduationCap className="h-7 w-7" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-bold text-slate-900">BS Software Engineering</p>
              <p className="text-slate-600">University of Malakand · 2023 – 2027</p>
            </div>
            <span className="hidden shrink-0 rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700 sm:inline">
              CGPA 3.75
            </span>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map(({ icon: Icon, title, text, chip }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${chip}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={360} className="sm:col-span-2">
            <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white shadow-xl shadow-blue-600/20">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <Rocket className="h-6 w-6" />
              </span>
              <p className="text-[15px] leading-relaxed text-blue-50">
                <span className="font-semibold text-white">Production first.</span> APIs, dashboards and deployment
                are part of the job — not an afterthought.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
