import { BarChart3, Brain, Code2, Database, Eye, Layers, Sparkles, Wrench } from "lucide-react"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"

const groups = [
  { title: "Programming", icon: Code2, chip: "bg-blue-50 text-blue-600", items: ["Python", "SQL", "JavaScript", "TypeScript", "C++"] },
  { title: "Computer Vision", icon: Eye, chip: "bg-cyan-50 text-cyan-600", items: ["OpenCV", "CNNs", "Image Classification", "Object Detection", "Real-time Inference"] },
  { title: "Generative AI", icon: Sparkles, chip: "bg-violet-50 text-violet-600", items: ["LLMs", "RAG Pipelines", "AI Agents", "Prompt Engineering", "Fine-tuning"] },
  { title: "Machine Learning", icon: Brain, chip: "bg-indigo-50 text-indigo-600", items: ["Deep Learning", "NLP", "Neural Networks", "Recommendation Systems"] },
  { title: "Frameworks", icon: Layers, chip: "bg-emerald-50 text-emerald-600", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LangChain", "LangGraph"] },
  { title: "Databases", icon: Database, chip: "bg-amber-50 text-amber-600", items: ["PostgreSQL", "MongoDB", "ChromaDB", "Pinecone", "Firebase"] },
  { title: "Tools & Deployment", icon: Wrench, chip: "bg-rose-50 text-rose-600", items: ["FastAPI", "Streamlit", "Docker", "Git / GitHub", "n8n"] },
  { title: "Data Science", icon: BarChart3, chip: "bg-teal-50 text-teal-600", items: ["EDA", "Feature Engineering", "Data Cleaning", "Visualization", "Statistics"] },
]

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Technologies I <span className="text-blue-600">work with</span>
        </>
      }
      intro="The languages, frameworks and tools I use to build and ship AI systems."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(({ title, icon: Icon, chip, items }, i) => (
          <Reveal key={title} delay={(i % 4) * 70} className="h-full">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5">
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${chip}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display font-bold text-slate-900">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[13px] font-medium text-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
