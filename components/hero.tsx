import Image from "next/image"
import { ArrowRight, Briefcase, Cpu, Download, FolderGit2, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react"
import { Container } from "@/components/section"

const socials = [
  { icon: Github, href: "https://github.com/Engr-Mujeeb-Rahman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-mujeeb-ur-rahman-se/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mujeebbadwan1155@gmail.com", label: "Email" },
]

const stats = [
  { icon: FolderGit2, value: "25+", label: "Projects completed", chip: "bg-blue-50 text-blue-600" },
  { icon: Briefcase, value: "2+ yrs", label: "Industry experience", chip: "bg-violet-50 text-violet-600" },
  { icon: GraduationCap, value: "3.75", label: "CGPA in BS SE", chip: "bg-emerald-50 text-emerald-600" },
  { icon: Cpu, value: "10+", label: "Core technologies", chip: "bg-amber-50 text-amber-600" },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Accent panel + texture */}
      <div
        aria-hidden
        className="absolute right-0 top-[72px] hidden h-[80%] w-[36%] rounded-bl-[80px] bg-gradient-to-br from-blue-600 to-blue-800 lg:block"
      />
      <div aria-hidden className="dot-pattern absolute left-0 top-24 h-64 w-64 opacity-70 [mask-image:radial-gradient(circle,black,transparent_70%)]" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Currently AI/CV Engineer at Zentify Systems
            </span>

            <p className="mt-7 text-lg font-semibold text-blue-600">Hi, I&apos;m</p>
            <h1 className="mt-1 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[3.25rem] xl:text-[3.6rem]">
              <span className="block">Muhammad Mujeeb</span>
              <span className="block text-blue-600">Ur Rahman</span>
            </h1>
            <p className="mt-5 font-display text-xl font-bold text-slate-700 sm:text-2xl">
              AI &amp; Computer Vision Engineer
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty">
              I design and ship applied AI systems — computer vision pipelines, LLM applications, RAG and
              autonomous agents — that turn real business problems into working products.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-[15px] font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div className="flex gap-2.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500">
                <MapPin className="h-4 w-4" /> Dir Lower, KPK, Pakistan
              </span>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-[400px]">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-blue-600 lg:hidden" />
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-slate-100 shadow-2xl shadow-slate-900/20">
              <Image
                src="https://i.postimg.cc/X7GStWYc/Mujeeb-professional.jpg"
                alt="Portrait of Muhammad Mujeeb Ur Rahman"
                width={540}
                height={640}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -left-4 bottom-8 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 sm:-left-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Briefcase className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-slate-500">Working at</p>
                <p className="text-sm font-bold text-slate-900">Zentify Systems</p>
              </div>
            </div>

            <div className="absolute -right-3 top-8 rounded-2xl bg-white px-4 py-3 text-center shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 sm:-right-6">
              <p className="font-display text-2xl font-extrabold text-blue-600">25+</p>
              <p className="text-xs font-medium text-slate-500">AI projects</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, chip }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg shadow-slate-900/5 sm:flex-row sm:items-center sm:gap-4 sm:p-5"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${chip}`}>
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="whitespace-nowrap font-display text-2xl font-extrabold text-slate-900">{value}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
