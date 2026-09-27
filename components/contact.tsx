import { BriefcaseBusiness as Linkedin, Globe, Mail } from 'lucide-react'

const EMAIL = 'anna.pauseiro@gmail.com'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-brand text-brand-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-16 text-center md:py-24">
        <h2 className="font-serif text-4xl md:text-5xl">{"Let's Do It Together!"}</h2>
        <p className="font-serif text-xl">Get in Touch with Me</p>
        <ul className="flex flex-col items-center gap-4 text-lg sm:flex-row sm:gap-10">
          <li>
            <a
              href="https://www.linkedin.com/in/anna-pauseiro-467a2a270/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="size-5" aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Globe className="size-5" aria-hidden="true" />
            WorldWide
          </li>
          <li>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:underline">
              <Mail className="size-5" aria-hidden="true" />
              {EMAIL}
            </a>
          </li>
        </ul>
        <a
          href="/contact"
          className="rounded-xl bg-brand-foreground px-8 py-3 font-serif text-lg text-ink transition-opacity hover:opacity-90"
        >
          Get in Touch with Me
        </a>
      </div>
    </section>
  )
}
