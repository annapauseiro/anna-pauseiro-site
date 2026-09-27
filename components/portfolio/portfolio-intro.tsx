const skills = [
  'Strategic Planning',
  'Data Management & Visualization',
  'Communication & Critical Thinking',
  'Task Coordination',
  'Business Intelligence',
  'AI-Assisted Processes',
]

export function PortfolioIntro() {
  return (
    <section aria-labelledby="portfolio-heading">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 text-center">
          <h1 id="portfolio-heading" className="text-balance font-serif text-4xl text-brand md:text-6xl">
            My portfolio has led me to this point
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-ink/80">
            Charting my path to online success has been an enriching journey filled with learning opportunities and
            meaningful experiences. As I continue to evolve and embrace new challenges, my portfolio reflects the
            breadth and depth of my skills in Data Analysis, Quality Control and Operations Processes. With a
            determination to stay on the cutting edge of technology and creativity, I look forward to conquering new
            milestones and charting even greater heights of online achievement with businesses and entrepreneurs.
            Join me on this exciting adventure!
          </p>
        </div>
        <ol className="mx-auto grid w-full max-w-5xl border-b border-gold/70 md:grid-cols-2 md:gap-x-16">
          {skills.map((skill, i) => (
            <li
              key={skill}
              className="flex items-baseline gap-5 border-t border-gold/70 py-5 md:py-6"
            >
              <span className="w-12 shrink-0 font-serif text-3xl text-gold md:text-4xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-xl leading-snug text-brand md:text-2xl">{skill}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
