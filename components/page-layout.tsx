'use client'

import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background via-background to-card py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {children}
        </div>
      </section>
    </main>
  )
}
