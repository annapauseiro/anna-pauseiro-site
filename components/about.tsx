import Image from 'next/image'

type Photo = {
  src: string
  alt: string
  frame: string
  tape: string
  sizes: string
}

// Casual scrapbook collage: taped snapshots at slight angles.
// Zen and Zara's photo is intentionally the smallest, tucked in the corner.
const photos: Photo[] = [
  {
    src: '/images/about-porto.png',
    alt: 'Anna laughing by the river in Porto',
    frame: 'left-[3%] top-[2%] z-10 w-[50%] aspect-[3/4] -rotate-3',
    tape: 'w-16 md:w-20 left-1/2 -top-3 -translate-x-1/2 -rotate-6 bg-[#E9CBC6]/80',
    sizes: '(min-width: 768px) 25vw, 50vw',
  },
  {
    src: '/images/about-desert.jpg',
    alt: 'Anna sitting on a wall overlooking a desert oasis',
    frame: 'right-[2%] top-[8%] z-20 w-[46%] aspect-[4/5] rotate-3',
    tape: 'w-16 md:w-20 left-1/3 -top-3 rotate-6 bg-[#C79A56]/60',
    sizes: '(min-width: 768px) 23vw, 46vw',
  },
  {
    src: '/images/about-snow.jpg',
    alt: 'Anna holding her dog in the snow',
    frame: 'left-[16%] bottom-[2%] z-30 w-[40%] aspect-[3/4] rotate-2',
    tape: 'w-16 md:w-20 -right-4 top-2 rotate-45 bg-[#E9CBC6]/80',
    sizes: '(min-width: 768px) 20vw, 40vw',
  },
  {
    src: '/images/about-dogs.jpg',
    alt: 'Zen and Zara, two English Cocker Spaniels',
    frame: 'right-[8%] bottom-[9%] z-30 w-[26%] aspect-square -rotate-6',
    tape: 'left-2 -top-3 w-10 md:w-12 -rotate-12 bg-[#9C4F5D]/35',
    sizes: '(min-width: 768px) 13vw, 26vw',
  },
]

const paragraphs = [
  "I'm definitely someone who loves being alive! I enjoy meeting people, new beginnings, arrivals and departures, sunrises and sunsets, flowers, music, and good food.",
  'I love contributing, sharing, and exchanging ideas. Yes, I\'m also a bit obsessed with staying organized, so I decided to turn that little "flaw" into my job. It\'s hard to explain how satisfying it is to turn chaos into order.',
  "I'm endlessly curious, love learning, exploring new ideas, and diving into completely different subjects just because they spark my interest. Oh, and I'm totally a dog person—sharing my life with two beautiful English Cocker Spaniels, Zen and Zara.",
  "Years of meditation have taught me not to panic under pressure or in times of crisis. I'm the calm, steady person you can count on when things get stormy.",
  "Maybe our paths are meant to cross, and we can build a great partnership together. I'd love to hear from you and chat about what you need.",
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:gap-16 md:py-24">
        <div className="relative mx-auto aspect-[1/1.1] w-full max-w-xl md:w-1/2">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={`absolute bg-[#fffdf9] p-1.5 shadow-[0_6px_18px_rgba(58,42,48,0.14)] transition-transform duration-300 hover:z-40 hover:rotate-0 hover:scale-[1.03] md:p-2 ${photo.frame}`}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes={photo.sizes} className="object-cover" />
              </div>
              <span
                aria-hidden="true"
                className={`absolute h-5 backdrop-blur-[1px] md:h-6 ${photo.tape}`}
              />
            </figure>
          ))}
        </div>
        <div className="flex w-full flex-col gap-5 md:w-1/2">
          <h2 className="font-serif text-4xl text-brand md:text-5xl">Who Am I?</h2>
          {paragraphs.map((text) => (
            <p key={text} className="text-pretty font-serif text-lg leading-relaxed text-ink/85">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
