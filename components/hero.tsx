import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="home" className="flex scroll-mt-16 flex-col md:flex-row">
      <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[640px] md:w-2/3">
        <Image
          src="/images/hero.png"
          alt="Anna Pauseiro smiling in her office"
          fill
          priority
          sizes="(min-width: 768px) 66vw, 100vw"
          className="-scale-x-100 object-cover object-[50%_25%]"
        />
      </div>
      <div className="flex w-full flex-col justify-center gap-8 px-6 py-12 md:w-1/3 md:px-10 lg:px-14">
        <div className="flex items-center justify-center gap-3">
          <Image src="/images/logo.png" alt="" width={56} height={56} className="size-14 mix-blend-multiply" />
          <p className="font-serif text-2xl tracking-wide text-brand">ANNA PAUSEIRO</p>
        </div>
        <h1 className="text-balance font-serif text-3xl leading-tight text-brand lg:text-4xl">
          Your Trusted Partner in Turning Data &amp; Processes into Clear, Reliable Decisions
        </h1>
        <div className="h-px w-28 bg-brand" aria-hidden="true" />
        <p className="text-pretty font-serif text-lg leading-relaxed text-brand">
          {
            "I help entrepreneurs and businesses operate more efficiently by looking at the numbers and telling what's working and what's not, so they can focus on growth and make the right decisions."
          }
        </p>
        <Link
          href="/services"
          className="self-center rounded-xl bg-ink px-8 py-3 font-serif text-lg text-brand-foreground transition-opacity hover:opacity-90"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
