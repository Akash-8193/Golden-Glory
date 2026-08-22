import type { Metadata } from 'next'
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
      <head>
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
