import {
  BarChart3,
  Bot,
  FileStack,
  FileText,
  KanbanSquare,
  type LucideIcon,
  SearchCheck,
  Table2,
  TrendingUp,
  Workflow,
} from 'lucide-react'

type Service = { icon: LucideIcon; title: string; description: string }

const mainServices: Service[] = [
  {
    icon: Table2,
    title: 'Data Analysis & Reporting',
    description:
      'Data analysis & reporting with high attention to detail and a methodical, accuracy-focused approach — I help you with data collection, cleaning, validation and analysis (advanced Excel, SQL, Google Sheets).',
  },
  {
    icon: BarChart3,
    title: 'Dashboard & BI Development',
    description:
      'Clear communication of complex insights, plus stakeholder management and client communication with clarity, professionalism, and sound judgment — Excel, Power BI, Tableau; KPI dashboards and automated reports.',
  },
  {
    icon: SearchCheck,
    title: 'Auditing & Quality Control',
    description:
      "Quality control for data-driven processes with exceptional accountability, data integrity and rigorous risk awareness — systematic review of data and processes, anomaly and inconsistency detection, finding alternative solutions when the direct path wasn't available.",
  },
  {
    icon: TrendingUp,
    title: 'Trend, Performance & Comparative Analysis',
    description:
      'Analytical thinking and data-driven decision-making — monthly/weekly reports, trend analysis and data-driven recommendations.',
  },
  {
    icon: Bot,
    title: 'AI-Assisted Analysis & Reporting',
    description:
      'A proactive approach to process improvement — using AI to speed up analysis, summarization and report generation.',
  },
]

const supportServices: Service[] = [
  {
    icon: FileStack,
    title: 'Documentation Management',
    description:
      'Records & documentation management with excellent organization, reliability, and time/deadline management — file organization, deadline tracking, document management systems.',
  },
  {
    icon: Workflow,
    title: 'Workflows & Operations',
    description:
      'Process documentation & optimization with strong process coordination — mapping and improving operational workflows, creating manuals and SOPs.',
  },
  {
    icon: KanbanSquare,
    title: 'Project Management',
    description:
      'Project & task coordination (Notion, Monday.com, ClickUp) with accountability across critical processes — project management support with an analytical, organizational eye.',
  },
  {
    icon: FileText,
    title: 'AI-Assisted Documentation',
    description:
      'Meeting minutes, transcription & summarization (AI-assisted) with a consistently high level of accuracy — a quick-turnaround, low-friction service.',
  },
]

function ServiceGrid({ services, tone }: { services: Service[]; tone: 'brand' | 'gold' }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ icon: Icon, title, description }) => (
        <li key={title} className="flex flex-col gap-4 rounded-2xl border border-brand/15 bg-white/60 p-7 shadow-sm">
          <span
            className={
              tone === 'brand'
                ? 'flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground'
                : 'flex size-12 items-center justify-center rounded-full bg-gold text-brand-foreground'
            }
          >
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <h3 className="text-balance font-serif text-xl uppercase leading-snug tracking-wide text-brand">{title}</h3>
          <p className="text-pretty leading-relaxed text-ink/80">{description}</p>
        </li>
      ))}
    </ul>
  )
}

export function ServiceList() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 md:py-24">
      <h1 className="text-center font-serif text-4xl text-brand md:text-6xl">What exactly do I do?</h1>
      <section aria-labelledby="main-services" className="flex flex-col gap-8">
        <h2 id="main-services" className="font-serif text-3xl text-ink md:text-4xl">
          Main Services
        </h2>
        <ServiceGrid services={mainServices} tone="brand" />
      </section>
      <section aria-labelledby="support-services" className="flex flex-col gap-8">
        <h2 id="support-services" className="font-serif text-3xl text-ink md:text-4xl">
          Can Also Support With
        </h2>
        <ServiceGrid services={supportServices} tone="gold" />
      </section>
    </div>
  )
}
