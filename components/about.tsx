import Image from 'next/image'

const photos = [
  { src: '/images/about-porto.png', alt: 'Anna laughing by the river in Porto' },
  { src: '/images/about-desert.jpg', alt: 'Anna sitting on a wall overlooking a desert oasis' },
  { src: '/images/about-snow.jpg', alt: 'Anna holding her dog in the snow' },
  { src: '/images/about-dogs.jpg', alt: 'Zen and Zara, two English Cocker Spaniels' },
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
        <div className="grid w-full grid-cols-2 gap-3 md:w-1/2">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative aspect-[3/4] overflow-hidden rounded-xl ${i % 2 === 1 ? 'translate-y-6' : ''}`}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </div>
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
