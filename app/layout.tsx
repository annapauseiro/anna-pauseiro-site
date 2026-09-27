import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Quattrocento, Quattrocento_Sans } from 'next/font/google'
import './globals.css'

const quattrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quattrocento',
})

const quattrocentoSans = Quattrocento_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quattrocento-sans',
})

export const metadata: Metadata = {
  title: 'Anna Pauseiro | Data, Reporting & Process Partner',
  description:
    'I help entrepreneurs and businesses operate more efficiently by turning data and processes into clear, reliable decisions.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f9f4ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${quattrocento.variable} ${quattrocentoSans.variable} scroll-smooth`}>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
