import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Badminton Érdekességek - Badminton Magyarország',
  description: 'Fedezz fel érdekes tényeket és érdekességeket a badminton sportról.',
}

export default function FactsPage() {
  const facts = [
    {
      title: 'Leggyorsabb Sportok Egyike',
      description: 'A badminton az egyik leggyorsabb sportok a világon. A tollasgolyó sebessége elérheti a 420 km/h-t a kemény smash ütés közben!',
    },
    {
      title: 'Kitűnő Kardiovaszkuláris Gyakorlat',
      description: 'A badminton egy hihetetlenül jó kardiovaszkuláris edzés. A játékosok egy meccs során 5-10 km-t futnak.',
    },
    {
      title: 'Segít az Agyi Képességeknek',
      description: 'A badminton fejleszti az agyi képességeket: gyorsabb döntéshozatal, jobb koordináció, javított téri tudatosság.',
    },
    {
      title: 'Csak 16 Toll Egy Tollasgolyóban',
      description: 'Egy tellasgolyó pontosan 16 tollból készül, amelyeket a kohlról hasítanak ki. Ezek az ide megfigyelő világban a legfinomabb tollak.',
    },
    {
      title: 'Olimpia Új Tagja',
      description: 'A badminton viszonylag új az Olimpiai Játékokhoz képest. Csak 1992-ben, Barcelonában kapta meg az olimpiai státuszt.',
    },
    {
      title: 'A Világ Legmagasabb Pontja',
      description: 'A badminton rackut ütés közben a tollasgolyó felfelé haladó pontja az egyik legmagasabb sportban - akár 3 méter feletti a pálya felett.',
    },
    {
      title: 'Kínai Dominancia',
      description: 'Kína az egyik legroszabb az összes badminton bajnokságban. Több mint 2/3-a az összes olimpiai éremnek Kínához tartozik.',
    },
    {
      title: 'Tollasgolyó Súlya',
      description: 'A tollasgolyó súlya csak 4,74-5,50 gramm - könnyebb egy forint érménél. Ez az egyik legkönnyebb eszköz a sportban.',
    },
    {
      title: 'A Leghosszabb Meccs',
      description: 'A leghosszabb badminton meccs több mint 2 óra és 40 perc volt. A játékosok hihetetlen állóképességet mutattak.',
    },
    {
      title: 'Közösség Közösség',
      description: 'A badminton közösség nagyon befogadó és közösségjellegű. Az összes szinten játékosok kedvesek és segítőkészek.',
    },
  ]

  return (
    <>
      <Header />
      <PageLayout
        title="Badminton Érdekességek"
        subtitle="Fedezz fel érdekes tényeket és érdekességeket a badminton sportról."
      >
        {/* Facts Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div
                key={fact.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Number Background */}
                <div className="absolute top-2 right-2 text-5xl font-bold text-primary/10 pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 pr-8">{fact.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Did You Know */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Tudtad-e?</h2>
          <div className="space-y-4">
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Szakmai Fizika</p>
              <p className="text-muted-foreground">A badminton egy olyan sport, ahol a fizika döntő szerepet játszik. A tollasgolyó aerodynamikája, az ütő szöge és a gyorsulás összekapcsolódnak a tökéletes ütés létrehozásához.</p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Mentális Felkészülés</p>
              <p className="text-muted-foreground">Az elit badminton játékosok jelentős mentális edzést végeznek. A teljesítményszorongás, a fókusz és az ítéletből való sík túlélés kritikus.</p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Stratégiai Mélység</p>
              <p className="text-muted-foreground">A badminton rengeteg stratégiai mélységet tartalmaz. Minden ütésnek célja van, minden mozgásnak oka van, és az olyan pro-aktív játékosok gondolkodnak több lépéssel előre.</p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Világszintű Közösség</p>
              <p className="text-muted-foreground">Az interneten keresztül a badminton közösség valóban globális. A játékosok az egész világon az interneten keresztül csatlakozhatnak és egymástól tanulhatnak.</p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Badminton Statisztika</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <p className="text-muted-foreground">Millió játékos világszerte</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">200+</div>
              <p className="text-muted-foreground">Nemzetközi szervezet</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <p className="text-muted-foreground">Országok verseny</p>
            </div>
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  )
}
