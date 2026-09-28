import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/contact-form'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Contact | Anna Pauseiro',
  description: 'Get in touch with Anna Pauseiro for data analysis, reporting, and operations support - worldwide.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col md:flex-row md:items-stretch">
        <div className="relative md:w-2/5 md:shrink-0">
          <Image
            src="/images/contact-garden-v2.webp"
            alt="Anna Pauseiro sitting in a garden with her laptop"
            width={1086}
            height={1273}
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="block h-auto w-full"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2 bg-brand md:inset-y-0 md:left-auto md:h-auto md:w-2" />
        </div>
        <section
          aria-labelledby="contact-heading"
          className="flex flex-1 flex-col justify-center gap-5 px-6 py-14 md:px-16 lg:px-24"
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
