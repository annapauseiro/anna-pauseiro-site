import Image from 'next/image'
import { CalendarCheck, ChartColumnIncreasing, ShieldCheck, Timer } from 'lucide-react'

const strengths = [
  { icon: CalendarCheck, title: 'Organized', text: 'Strong planning and execution to keep your business moving.' },
  { icon: ChartColumnIncreasing, title: 'Analytical', text: 'Turning complex data into simple, actionable insights.' },
  { icon: ShieldCheck, title: 'Reliable', text: 'You can count on me for accuracy, discretion and professionalism.' },
  { icon: Timer, title: 'Efficient', text: 'I optimize processes so you can focus on what matters the most.' },
]

export function Strengths() {
  return (
    <section aria-label="Strengths">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-12">
        <Image
          src="/images/avatar-anna.webp"
          alt="Anna Pauseiro"
          width={160}
          height={160}
          priority
          className="relative z-10 -mb-16 size-32 rounded-full border-[6px] border-background object-cover md:size-36"
        />
        <ul className="grid w-full grid-cols-1 gap-8 rounded-2xl border border-brand/15 bg-white/70 px-6 pb-10 pt-24 text-center shadow-sm sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gold/50">
          {strengths.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col items-center gap-3 lg:px-6">
              <Icon className="size-8 text-gold" aria-hidden="true" />
              <h2 className="font-serif text-xl uppercase tracking-widest text-brand">{title}</h2>
              <p className="max-w-60 text-pretty leading-relaxed text-ink/80">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
