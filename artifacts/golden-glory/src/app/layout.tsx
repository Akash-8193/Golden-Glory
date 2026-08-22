import type { Metadata } from 'next'
import Script from 'next/script'
import '../index.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Golden Glory',
  description: 'Coworking space in Noida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script src="https://unpkg.com/split-type" strategy="beforeInteractive" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
