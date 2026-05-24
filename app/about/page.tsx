import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Rólunk - Hungarytollaslabda',
  description: 'Ismerkedj meg a Hungarytollaslabda csapatával.',
}

export default function AboutPage() {
  const team = [
    {
      name: 'Szalai Péter',
      role: 'Alapító és Fő Edző',
      bio: 'Péter egy szenvedélyes badminton szereplő több mint 15 év tapasztalattal. Az ő szakértelme a technikai fejlesztés és a verseny felkészülésben rejlik.',
    },
    {
      name: 'Nagy Márta',
      role: 'Fitnessz Edző',
      bio: 'Márta egy tanúsított fitnessz edző, aki segít a játékosoknak a fizikai felkészülésben. Az ő módszerei tudományos és bizonyított.',
    },
    {
      name: 'Kovács István',
      role: 'Stratégiai Edző',
      bio: 'István egy ismert stratégiai edző, aki segít a játékosoknak a játék taktikai aspektusait megtanulni.',
    },
  ]

  return (
    <>
      <Header />
      <PageLayout
        title="Rólunk"
        subtitle="Ismerkedj meg a Hungarytollaslabda csapatával és küldetésével."
      >
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Mission */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">Küldetésünk</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A Hungarytollaslabda küldetése, hogy a badminton sport fejlődésén és népszerűsítésén dolgozzon Magyarországon. Azt szeretnénk, hogy minél több ember fedezze fel a badminton szépségét és élvezze ezt az izgalmas sportot.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Elkötelezettünk az összes szintű játékosok oktatásában, a szakmai fejlődésben és a közösség építésében.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Értékeink</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">Minőség</h3>
                <p className="text-muted-foreground text-sm">
                  Elkötelezettünk a legmagasabb minőségű oktatás és tartalom biztosítására.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">Közösség</h3>
                <p className="text-muted-foreground text-sm">
                  Egy befogadó és támogató közösség építésében hiszünk az összes játékos számára.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">Innováció</h3>
                <p className="text-muted-foreground text-sm">
                  A badminton oktatás és fejlesztés új módszereivel kísérletezünk.
                </p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Csapatunk</h2>
            <div className="space-y-6">
              {team.map((member) => (
                <div key={member.name} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* History */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">Történetünk</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Hungarytollaslabda 2020-ban alapult egy csoport szenvedélyes badminton szereplő által. Az ötletnél más volt, mint egy közösségi weboldal, ahol a játékosok tudást oszthatnak meg, tippeket adhatnak és egymást támogathatják.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Az évek során a weboldal nőtt és fejlődött. Most több száz cikket, útmutatót és szakképzési programot kínálunk. Továbbra is szívesen teljesítjük küldetésünket, hogy a badminton sport fejlődésén és népszerűsítésén dolgozzunk.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Köszönjük az összes támogatónak, szerzőnek és közösségi tagnak, akik segítik azt, hogy a Hungarytollaslabda olyan erős közösség maradjon.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Kapcsolatba Lépés</h2>
            <p className="text-muted-foreground mb-6">
              Szeretne velünk kapcsolatba lépni? Van kérdésed vagy javaslatod?
            </p>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">E-mail:</span> contacts@hungarytollaslabda.com
              </p>
            </div>
          </section>
        </div>
      </PageLayout>
      <Footer />
    </>
  )
}
