import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Testimonials } from '@/components/testimonials'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
