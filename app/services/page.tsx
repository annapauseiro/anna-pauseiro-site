import type { Metadata } from 'next'
import { Contact } from '@/components/contact'
import { ServiceList } from '@/components/services/service-list'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Services | Anna Pauseiro',
  description:
    'Data analysis & reporting, BI dashboards, auditing & quality control, AI-assisted reporting, documentation, and project management.',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceList />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
