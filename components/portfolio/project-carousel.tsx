'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  images: string[]
  title: string
  wide?: boolean
  interval?: number
  startDelay?: number
}

export function ProjectCarousel({ images, title, wide = false, interval = 4000, startDelay = 0 }: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [started, setStarted] = useState(startDelay === 0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const touchX = useRef<number | null>(null)
  const count = images.length

  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const t = window.setTimeout(() => setStarted(true), startDelay)
    return () => window.clearTimeout(t)
  }, [startDelay])

  const running = started && !paused && !reduceMotion && count > 1

  useEffect(() => {
    if (!running) return
    const t = window.setTimeout(() => go(index + 1), interval)
    return () => window.clearTimeout(t)
  }, [running, index, interval, go])

  return (
    <div
      className={`group relative w-full overflow-hidden bg-[#e9cbc6] ${wide ? 'aspect-video' : 'aspect-[4/3]'}`}
      aria-roledescription="carousel"
      aria-label={`${title} slides`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false)
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX
        setPaused(true)
      }}
      onTouchEnd={(e) => {
        if (touchX.current !== null) {
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
          touchX.current = null
        }
        setPaused(false)
      }}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${title}, slide ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="h-full w-full flex-none object-cover"
          />
        ))}
      </div>

      {running && (
        <div
          key={index}
          className="absolute left-0 top-0 z-10 h-[3px] bg-gold"
          style={{ animation: `carousel-progress ${interval}ms linear forwards` }}
        />
      )}

      <span className="absolute right-2.5 top-2.5 rounded-full bg-black/45 px-2 py-0.5 text-xs tabular-nums text-white">
        {index + 1} / {count}
      </span>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-2.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[#fbf5f0]/90 text-ink opacity-0 transition-opacity focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-gold group-hover:opacity-100 [@media(hover:none)]:opacity-85"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-2.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[#fbf5f0]/90 text-ink opacity-0 transition-opacity focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-gold group-hover:opacity-100 [@media(hover:none)]:opacity-85"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-2.5 flex flex-wrap justify-center gap-1.5 px-12">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-[7px] rounded-full shadow-[0_0_0_1px_rgba(0,0,0,.15)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold ${
              i === index ? 'w-5 bg-white' : 'w-[7px] bg-white/55'
            }`}
          />
        ))}
      </div>

      <style>{`@keyframes carousel-progress { from { width: 0 } to { width: 100% } }`}</style>
    </div>
  )
}
