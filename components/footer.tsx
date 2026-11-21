import { Github, Linkedin, Mail } from "lucide-react"
import { Container } from "@/components/section"

const nav = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/Engr-Mujeeb-Rahman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-mujeeb-ur-rahman-se/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mujeebbadwan1155@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-display font-extrabold text-white">
                M
              </span>
              <span className="font-display text-lg font-bold text-white">
                Mujeeb<span className="text-blue-500">.</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm">AI &amp; Computer Vision Engineer building practical, production-ready AI systems.</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium" aria-label="Footer">
            {nav.map((l) => (
              <a key={l.name} href={l.href} className="transition-colors hover:text-white">
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 ring-1 ring-white/10 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm">
          © {new Date().getFullYear()} Muhammad Mujeeb Ur Rahman. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
