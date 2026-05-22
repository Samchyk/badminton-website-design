import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { blogArticles } from '@/lib/blog-articles'

export const metadata = {
  title: 'Blog - Badminton Magyarország',
  description: 'Olvass cikkeket, tippeket és érdekességeket a badmintonról.',
}

export default function BlogPage() {
  const categories = ['Összes', 'Technika', 'Fitnessz', 'Stratégia', 'Egészség', 'Mentális']

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background via-background to-card py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up">
              Fedezz fel cikkeket, tippeket és érdekességeket a badmintonról. Tanulj az új technikáktól, a stratégiáktól és a fitneszről.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Featured Article */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 animate-slide-up">Kiemelt Cikk</h2>
              <Link href={`/blog/${blogArticles[0].slug}`}>
                <div className="bg-card border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer hover-lift animate-slide-up">
                  <div className="flex flex-col md:flex-row gap-0">
                    <div className="relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
                      <Image
                        src={blogArticles[0].image}
                        alt={blogArticles[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {blogArticles[0].category}
                        </span>
                        <span className="text-xs text-muted-foreground">{blogArticles[0].readTime} perc olvasás</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {blogArticles[0].title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {blogArticles[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          {blogArticles[0].author} • {new Date(blogArticles[0].date).toLocaleDateString('hu-HU')}
                        </p>
                        <span className="text-primary font-semibold group-hover:gap-2 transition-all inline-flex items-center gap-1">
                          Olvasás →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Articles Grid */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 animate-slide-up">Összes Cikk</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogArticles.slice(1).map((article, index) => (
                  <Link key={article.id} href={`/blog/${article.slug}`}>
                    <div 
                      className="bg-card border border-border rounded-lg overflow-hidden h-full hover:border-primary/50 transition-all duration-300 group cursor-pointer flex flex-col hover-lift card-interactive"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{article.readTime} perc</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <p className="text-xs text-muted-foreground">
                            {article.author}
                          </p>
                          <span className="text-primary text-sm font-semibold group-hover:gap-1 transition-all inline-flex items-center gap-0.5">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
