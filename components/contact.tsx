import Link from 'next/link'
import { BriefcaseBusiness as Linkedin, Globe, Mail } from 'lucide-react'

const EMAIL = 'anna.pauseiro@gmail.com'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-brand text-brand-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-16 text-center md:py-20">
        <h2 className="font-serif text-4xl md:text-5xl">{"Let's Do It Together!"}</h2>
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
            Worldwide
          </li>
          <li>
            <Link href="/contact" className="flex items-center gap-2 hover:underline">
              <Mail className="size-5" aria-hidden="true" />
              {EMAIL}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
