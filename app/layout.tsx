import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Badminton Magyarország - A Tollasgolyó Világa',
  description: 'Fedezd fel a badminton világát. Edzések, versenyek, szabályok és az összes szükséges információ a tollasgolyó sportról.',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="bg-background">
      <body className={`${geistSans.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
