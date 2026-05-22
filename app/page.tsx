import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-card overflow-hidden relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-3 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
            <div className="animate-blur-in mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-8">
                Üdvözölünk a tollasgolyó világában
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="gradient-text">Badminton</span> <br />
              <span className="text-foreground">Magyarország</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Fedezd fel a tollasgolyó sport minden szépségét. Tanulj meg játszani, ismerj meg versenyzőket, és csatlakozz egy élő közösséghez.
            </p>

          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-background py-16 border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-slide-up">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-pulse">500+</div>
                <p className="text-muted-foreground">Aktív játékos</p>
              </div>
              <div className="text-center animate-slide-up">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-pulse">50+</div>
                <p className="text-muted-foreground">Blog cikk</p>
              </div>
              <div className="text-center animate-slide-up">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-pulse">30+</div>
                <p className="text-muted-foreground">Edzési Program</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="bg-card py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 animate-slide-up">Fedezz fel</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Play Types */}
              <a href="/play-types" className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift card-interactive animate-slide-up flex flex-col h-full">
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <Image
                    src="/featured-playtypes.jpg"
                    alt="Játéktípusok"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Játéktípusok</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">Fedezd fel az összes játéktípust és azok szabályait</p>
                  <span className="text-primary text-sm font-medium group-hover:gap-2 transition-all inline-flex items-center gap-1">
                    Bővebben →
                  </span>
                </div>
              </a>

              {/* History */}
              <a href="/history" className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift card-interactive animate-slide-up flex flex-col h-full">
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <Image
                    src="/featured-history.jpg"
                    alt="Történet"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Történet</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">A badminton történetének felfedezése az órák kezdetétől</p>
                  <span className="text-primary text-sm font-medium group-hover:gap-2 transition-all inline-flex items-center gap-1">
                    Bővebben →
                  </span>
                </div>
              </a>

              {/* Blog */}
              <a href="/blog" className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift card-interactive animate-slide-up flex flex-col h-full">
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <Image
                    src="/featured-blog.jpg"
                    alt="Blog"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Blog</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">Olvass cikkeket, tippeket és érdekességeket</p>
                  <span className="text-primary text-sm font-medium group-hover:gap-2 transition-all inline-flex items-center gap-1">
                    Bővebben →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background py-16 border-t border-border">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Csatlakozz a közösséghez
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nem számít, hogy kezdő vagy vagy, a badminton mindig fenséges és izgalmas lehet.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Ismerkedj meg velünk
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
