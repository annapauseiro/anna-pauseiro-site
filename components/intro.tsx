import Image from 'next/image'

const paragraphs = [
  'Running a business means making decisions, managing information, monitoring performance, and keeping critical processes moving — often while trying to grow.',
  'As your business grows, so does the volume of data, reports, documents, deadlines, and operational tasks. Without reliable systems and clear processes, important details can get missed, valuable time can be lost, and decision-making can become more difficult than it needs to be.',
]

const paragraphsAfter = [
  'I help entrepreneurs, small businesses, and growing teams understand what their data is telling, turning complex information into clear, actionable insights and more reliable ways of working. And I also support the processes behind the numbers.',
  "My approach is methodical, accurate, collaborative, and solutions-focused. I pay close attention to detail, question inconsistencies, identify risks, and look for practical alternatives when the obvious path isn't available.",
  "Whether you need reliable reporting, a clearer view of business performance, stronger data quality, better-documented processes, or dependable operational support, I'm here to help you work with greater clarity, confidence, and efficiency — so you can focus on growing your business.",
]

export function Intro() {
  return (
    <section id="intro" className="scroll-mt-16 bg-brand text-brand-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:gap-16 md:py-24">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-sm shrink-0 overflow-hidden rounded-sm md:w-2/5">
          <Image
            src="/images/portrait.png"
            alt="Anna Pauseiro sitting at a desk"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 font-serif text-lg leading-relaxed">
          {paragraphs.map((text) => (
            <p key={text} className="text-pretty">
              {text}
            </p>
          ))}
          <p className="text-2xl font-bold">{"That's where I come in."}</p>
          {paragraphsAfter.map((text) => (
            <p key={text} className="text-pretty">
              {text}
            </p>
          ))}
          <a
            href="#services"
            className="mt-2 self-start rounded-xl bg-brand-foreground px-8 py-3 text-lg text-ink transition-opacity hover:opacity-90"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
