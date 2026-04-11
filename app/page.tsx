import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
