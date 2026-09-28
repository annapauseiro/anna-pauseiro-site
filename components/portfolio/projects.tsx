import { ArrowUpRight } from 'lucide-react'
import { ProjectCarousel } from './project-carousel'

const GITHUB = 'https://github.com/annapauseiro'

type Project = {
  slides: string
  count: number
  wide?: boolean
  tag: string
  title: string
  description: string[]
  tags: string[]
  link?: { href: string; label: string }
}

const slidesFor = (name: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/slides/${name}-${String(i + 1).padStart(2, '0')}.webp`)

const featured: Project = {
  slides: 'consolidation',
  count: 14,
  wide: true,
  tag: 'Excel · SQL · Power Query',
  title: 'Multi-Office Finance & Controlling Consolidation',
  description: [
    'Built a full month-end close and Group consolidation model for a 3-office firm using 18 months of data. Includes bank reconciliation to the cent, a close checklist, and a Group P&L with intercompany elimination. Built on a star-schema data model, SQL, and an Excel workbook driven by live formulas with a documented Power Query ETL.',
  ],
  tags: ['Excel', 'SQL', 'Power Query', 'Star schema'],
  link: { href: `${GITHUB}/financial_data_consolidation`, label: 'View the repository' },
}

const projects: Project[] = [
  {
    slides: 'dwh',
    count: 6,
    tag: 'SQL Server · Data engineering',
    title: 'Building a Sales Data Warehouse from Raw CRM & ERP Exports',
    description: [
      'A Microsoft SQL Server warehouse built on the Bronze-Silver-Gold medallion pattern: two disconnected source systems go in as CSV exports and come out as a documented, query-ready star schema for sales analytics.',
    ],
    tags: ['SQL Server', 'Data Modeling', 'ETL'],
    link: { href: `${GITHUB}/sql-data-warehouse-project`, label: 'View the repository with all code and queries' },
  },
  {
    slides: 'analytics',
    count: 6,
    tag: 'SQL · Analytics',
    title: 'Practical SQL Data Analytics',
    description: [
      'A comprehensive collection of SQL scripts focused on transforming raw data into meaningful business insights. They cover database exploration, measures and metrics, time-based trends, cumulative analytics, segmentation, and more, helping data analysts and BI professionals quickly explore, segment, and analyze data within a relational database. Each script focuses on a specific analytical theme and demonstrates SQL best practices.',
    ],
    tags: ['SQL', 'Analytics', 'Segmentation'],
    link: { href: `${GITHUB}/sql-data-analytics-project`, label: 'View the repository with all code and queries' },
  },
  {
    slides: 'powerbi',
    count: 4,
    tag: 'Power BI',
    title: 'Sales Performance Dashboard',
    description: [
      "An interactive Power BI report built on a SQL Server data warehouse (Bronze-Silver-Gold architecture) modeling four years of sales, customer, and product data. The report brings together KPI summary cards, a quarterly sales trend, and category/product breakdowns, all connected through DAX measures and cross-filtering slicers for country, order date, and category - turning a raw sales dataset into a single page that shows what's happening and where, at a glance.",
    ],
    tags: ['Power BI', 'DAX', 'SQL Server'],
    link: { href: `${GITHUB}/power-bi-sales-dashboard/tree/main`, label: 'View the repository' },
  },
  {
    slides: 'etf',
    count: 8,
    tag: 'Google Sheets',
    title: 'Irish ETFs and Crypto Live Portfolio - updated with functions',
    description: [
      "A two-tab Google Sheet that tracks a domestic investment portfolio's live value, historical contributions, and growth from an initial seed investment.",
      "The Portfolio tab pulls each holding's current price in real time through a custom function that scrapes the Tradegate exchange, alongside the client's number of holdings and a comparison of current vs. target allocation.",
      'The Contributions tab logs historical contributions and resulting growth over time, comparing performance against the amount originally invested.',
    ],
    tags: ['Google Sheets', 'IMPORTXML', 'Custom functions'],
  },
]

function ProjectBody({ p }: { p: Project }) {
  return (
    <div className={`flex flex-1 flex-col gap-2.5 ${p.wide ? 'p-7' : 'px-6 pb-6 pt-5'}`}>
      <span className="self-start rounded-full bg-[#e9cbc6]/60 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
        {p.tag}
      </span>
      <h3 className={`text-balance font-serif font-bold leading-tight text-ink ${p.wide ? 'text-2xl' : 'text-xl'}`}>
        {p.title}
      </h3>
      {p.description.map((d) => (
        <p key={d.slice(0, 32)} className="text-[0.96rem] leading-relaxed text-foreground/75">
          {d}
        </p>
      ))}
      <div className="mt-auto flex flex-col gap-3 border-t border-border pt-3.5">
        <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-sm">
          {p.tags.map((t) => (
            <span key={t}>
              <span className="text-[0.7em] text-gold">◆ </span>
              {t}
            </span>
          ))}
        </div>
        {p.link && (
          <a
            href={p.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 self-start border-b border-current text-[0.95rem] font-semibold text-brand hover:text-gold"
          >
            {p.link.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Portfolio</p>
        <h2 className="mt-1 text-balance font-serif text-3xl font-bold text-brand md:text-4xl">Projects Summary</h2>
        <p className="mb-9 mt-3 max-w-2xl text-foreground/75">
          Data engineering, analytics, and finance projects built end to end. Each preview rotates through the
          project&apos;s slides; hover to pause, or use the arrows and dots to browse.
        </p>

        <div className="grid gap-7">
          <article className="grid overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_30px_-18px_rgba(58,42,48,.45)] lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            <div className="self-start">
              <ProjectCarousel images={slidesFor(featured.slides, featured.count)} title={featured.title} wide />
            </div>
            <ProjectBody p={featured} />
          </article>

          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.slides}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_30px_-18px_rgba(58,42,48,.45)]"
              >
                <ProjectCarousel images={slidesFor(p.slides, p.count)} title={p.title} startDelay={(i + 1) * 700} />
                <ProjectBody p={p} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
