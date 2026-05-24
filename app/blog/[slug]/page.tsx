import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { blogArticles } from '@/lib/blog-articles'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) {
    return { title: 'Cikk nem található' }
  }
  return {
    title: `${article.title} - Hungarytollaslabda`,
    description: article.excerpt,
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = blogArticles.filter(
    (a) => a.category === article.category && a.id !== article.id
  )

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Article Header */}
        <section className="bg-gradient-to-b from-background via-background to-card py-12 border-b border-border">
          <div className="max-w-3xl mx-auto px-4">
            <Link href="/blog" className="text-primary hover:underline text-sm font-semibold mb-6 inline-flex items-center gap-1 animate-slide-up">
              ← Vissza a bloghoz
            </Link>

            <div className="flex items-center gap-3 mb-6 animate-slide-up">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {article.category}
              </span>
              <span className="text-muted-foreground text-sm">{article.readTime} perc olvasás</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">{article.title}</h1>

            <div className="flex items-center justify-between text-sm text-muted-foreground animate-slide-up">
              <p>{article.author}</p>
              <p>{new Date(article.date).toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-card">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover animate-blur-in"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <article className="prose prose-invert max-w-none">
              <div className="text-foreground leading-relaxed space-y-6 mb-12 animate-slide-up">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('##')) {
                    const heading = paragraph.replace('## ', '')
                    return (
                      <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                        {heading}
                      </h2>
                    )
                  }
                  return (
                    <p key={index} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </article>

            <div className="border-t border-border my-12"></div>

            {/* Author Info */}
            <div className="bg-card border border-border rounded-lg p-6 mb-12 transition-all duration-300 animate-slide-up">
              <h3 className="font-bold text-foreground mb-2">Az Írón</h3>
              <p className="text-muted-foreground text-sm">
                {article.author} egy szenvedélyes badminton szereplő, aki szívvel részesíti az ismereteket más játékosokkal. Több mint 10 éve játszik badmintont.
              </p>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 animate-slide-up">Kapcsolódó Cikkek</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.slice(0, 2).map((relatedArticle, index) => (
                    <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                      <div 
                        className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full hover-lift card-interactive"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative w-full h-32 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                          <Image
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{relatedArticle.category}</p>
                        <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
