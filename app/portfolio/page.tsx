import type { Metadata } from 'next'
import { Contact } from '@/components/contact'
import { PortfolioIntro } from '@/components/portfolio/portfolio-intro'
import { Projects } from '@/components/portfolio/projects'
import { Strengths } from '@/components/portfolio/strengths'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Portfolio | Anna Pauseiro',
  description:
    'Data analysis, BI dashboards, SQL data warehouses, and finance consolidation projects by Anna Pauseiro.',
}

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Strengths />
        <PortfolioIntro />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
