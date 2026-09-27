import type { Metadata } from 'next'
import Image from 'next/image'
import { BriefcaseBusiness, Globe, Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Contact | Anna Pauseiro',
  description: 'Get in touch with Anna Pauseiro for data analysis, reporting and operations support — worldwide.',
}

const EMAIL = 'anna.pauseiro@gmail.com'

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col md:flex-row md:items-start">
        <div className="relative h-80 md:sticky md:top-[65px] md:h-[calc(100dvh-65px)] md:w-2/5">
          <Image
            src="/images/contact-photo.png"
            alt="Anna Pauseiro sitting in a garden with her laptop"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover object-top"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2 bg-brand md:inset-y-0 md:left-auto md:h-auto md:w-2" />
        </div>
        <section
          aria-labelledby="contact-heading"
          className="flex flex-1 flex-col justify-center gap-5 px-6 py-14 md:min-h-[calc(100dvh-65px)] md:px-16 lg:px-24"
        >
          <div className="w-full max-w-2xl">
            <div className="mb-5 flex items-center gap-3.5">
              <span aria-hidden="true" className="h-px w-12 bg-gold" />
              <span className="text-sm font-bold tracking-[0.2em] text-[#a87c3c]">CONTACT</span>
            </div>
            <h1 id="contact-heading" className="font-serif text-4xl font-bold text-brand md:text-5xl">
              Get in touch with me!
            </h1>
            <p className="mt-5 mb-8 text-pretty text-lg leading-relaxed text-ink/80">
              Tell me about your project and I will get back to you shortly.
            </p>

            <ContactForm />

            <div aria-hidden="true" className="mt-8 h-px bg-[#e9cbc6]" />
            <ul className="mt-6 flex flex-col gap-4 text-[15px] text-ink sm:flex-row sm:flex-wrap sm:gap-8">
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-brand hover:underline">
                  <Mail className="size-[18px] text-gold" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anna-pauseiro-467a2a270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand hover:underline"
                >
                  <BriefcaseBusiness className="size-[18px] text-gold" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 text-ink/80">
                <Globe className="size-[18px] text-gold" aria-hidden="true" />
                Working WorldWide
              </li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
