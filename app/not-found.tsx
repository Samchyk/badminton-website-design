'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-7xl md:text-9xl font-bold gradient-text">404</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Az oldal nem található
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Sajnáljuk, de az oldal, amelyet keresett, nem található. Valaki volt egy rossz pass és kívül csapott az ütővel!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Vissza az Kezdőlapra
            </Link>
            <Link href="/blog" className="px-8 py-3 bg-card border border-primary/30 text-foreground font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300">
              Blog Olvasása
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-lg font-semibold text-foreground mb-6">Válassz egy Oldalt</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/play-types" className="text-muted-foreground hover:text-primary transition-colors">Játéktípusok</Link>
              <Link href="/history" className="text-muted-foreground hover:text-primary transition-colors">Történet</Link>
              <Link href="/rules" className="text-muted-foreground hover:text-primary transition-colors">Szabályok</Link>
              <Link href="/equipment" className="text-muted-foreground hover:text-primary transition-colors">Felszerelés</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Rólunk</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
