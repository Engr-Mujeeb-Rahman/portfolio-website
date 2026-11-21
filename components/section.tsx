import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
      {children}
    </span>
  )
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "white",
  children,
}: {
  id: string
  eyebrow: string
  title: ReactNode
  intro?: string
  tone?: "white" | "slate"
  children: ReactNode
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${tone === "slate" ? "bg-slate-50" : "bg-white"}`}>
      <Container>
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 text-balance md:text-[2.75rem] md:leading-[1.1]">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty">{intro}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  )
}
