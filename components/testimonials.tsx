import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'A very special thank you goes to Anna Pauseiro. Although she was tasked with the most complex booking, she performed magnificently. Despite the challenges, she navigated the process with ease, maintaining excellent communication and professionalism while delivering exactly what was required.',
    name: 'Ricardo Canha',
    role: 'Client Operations Delivery Analyst',
  },
  {
    quote: 'Congratulations, glad for your demonstration of the excellent professional you are.',
    name: 'Marcelo Kerestes',
    role: 'Client Operations Delivery Manager',
  },
  {
    quote: 'Congratulations Anna, amazing work on the most difficult to manage South Account.',
    name: 'Marta Caridade',
    role: 'Client Operations Delivery Manager',
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#efe4d6]" aria-labelledby="testimonials-title">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:py-24">
        <h2 id="testimonials-title" className="text-center font-serif text-4xl text-brand md:text-5xl">
          What Are They Saying?
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-3xl rounded-bl-none bg-[#d4b473]/40 p-8">
                <Quote className="size-8 text-brand" aria-hidden="true" />
                <blockquote className="grow text-pretty font-serif text-lg leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="flex flex-col">
                  <span className="font-bold text-brand">{t.name}</span>
                  <span className="text-sm text-ink/70">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
