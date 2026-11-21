"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send, XCircle } from "lucide-react"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"

const links = [
  { icon: Mail, label: "Email", value: "mujeebbadwan1155@gmail.com", href: "mailto:mujeebbadwan1155@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Muhammad Mujeeb Ur Rahman", href: "https://www.linkedin.com/in/muhammad-mujeeb-ur-rahman-se/" },
  { icon: Github, label: "GitHub", value: "Engr-Mujeeb-Rahman", href: "https://github.com/Engr-Mujeeb-Rahman" },
  { icon: MapPin, label: "Location", value: "Dir Lower, KPK, Pakistan" },
]

const fieldClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 disabled:opacity-60"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    try {
      const response = await emailjs.send(
        "service_pb3vqvf",
        "template_9mq8o1h",
        { name, email, message },
        "SOtaM2-ig7OnmyhHG"
      )
      if (response.status === 200 || response.text === "OK") {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build something <span className="text-blue-600">together</span>
        </>
      }
      intro="Have a role, project or idea in mind? Send me a message and I'll get back to you soon."
    >
      <Reveal>
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-[1fr_1.4fr]">
          {/* Info panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white md:p-10">
            <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
            <div aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5" />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold">Contact information</h3>
              <p className="mt-2 text-blue-100">Reach out directly or use the form.</p>

              <ul className="mt-8 space-y-5">
                {links.map(({ icon: Icon, label, value, href }) => {
                  const body = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wider text-blue-200">{label}</span>
                        <span className="block truncate font-medium">{value}</span>
                      </span>
                    </>
                  )
                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 rounded-xl transition-opacity hover:opacity-85"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{body}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-800">Your name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isLoading}
                  autoComplete="name"
                  placeholder="John Smith"
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-800">Your email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  autoComplete="email"
                  placeholder="john@company.com"
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={isLoading}
                rows={6}
                placeholder="Tell me about your project or role…"
                className={`${fieldClass} resize-y`}
              />
            </label>

            <div aria-live="polite">
              {status === "success" && (
                <p className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
                  <CheckCircle2 className="h-4 w-4" /> Thanks — your message was sent. I&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200">
                  <XCircle className="h-4 w-4" /> Couldn&apos;t send right now. Please email me directly.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {isLoading ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </Reveal>
    </Section>
  )
}
