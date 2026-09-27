'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Anna Pauseiro, home">
          <Image src="/images/logo.png" alt="" width={40} height={40} className="size-10 mix-blend-multiply" />
          <span className="hidden font-serif text-lg tracking-wide text-brand sm:inline">ANNA PAUSEIRO</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-4 font-serif text-base text-ink/60 sm:gap-6 sm:text-lg">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn('transition-colors hover:text-ink', active && 'text-ink')}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
