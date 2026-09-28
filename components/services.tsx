import { BarChart3, SearchCheck, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Trend, Performance & Comparative Analysis',
    description: 'Monthly/weekly reports, trend analysis, and data-driven recommendations.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis, Reporting & Dashboards',
    description:
      'Data collection, cleaning, validation, KPI tracking, and insights (advanced Excel, SQL, Google Sheets, Power BI).',
  },
  {
    icon: SearchCheck,
    title: 'Auditing & Quality Control',
    description:
      'Systematic review of data and processes, anomaly and inconsistency detection, finding alternative solutions when the direct path is not available.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center">
          <h2 className="font-serif text-4xl text-brand md:text-5xl">What Do I Do?</h2>
          <p className="text-pretty font-serif text-lg leading-relaxed text-ink/80">
            Imagine having a trusted partner who helps you turn data into clear insights, improve processes,
            strengthen accuracy, and keep critical information organized. My approach is flexible, methodical, and
            tailored to your workflows and goals - helping you work more efficiently, make informed decisions, and
            operate with confidence. Here&apos;s how I can support your business:
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-brand/15 bg-white/60 p-8 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-balance font-serif text-2xl leading-snug text-brand">{title}</h3>
              <p className="text-pretty leading-relaxed text-ink/80">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
