import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EditHive',
  description: 'EditHive the professional editing agency you can trust on',
  generator: 'EditHive',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/lequire/Lequire.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
