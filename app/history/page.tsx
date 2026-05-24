import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Badminton Történet - Hungarytollaslabda',
  description: 'Fedezd fel a badminton történetét az ókorból napjainkig.',
}

export default function HistoryPage() {
  const timeline = [
    {
      year: '2000 - 1800-as évek',
      title: 'Ősi Eredetek',
      description: 'A badminton ősei valószínűleg az Indiában és Kínában játszott játékokból származnak. A játék hasonlított az "Battledore and Shuttlecock" játékra, amit az ókori civilizációkban játszottak.',
      details: [
        'Kínai "Jianzi" játék - lábakkal ütik a tollasgolyót',
        'Indiai "Poona" játék - az első ütős verzió',
        'Angol "Battledore and Shuttlecock"',
      ],
    },
    {
      year: '1873',
      title: 'Badminton Születése',
      description: 'Az angol katonák az Indiából hoztak egy játékot "Poona" névvel. Ezt Badminton-nak nevezték el, az angol Gloucestershire-ben található Badminton Estate után, ahol a játékot popularizálták.',
      details: [
        'Az első szabályok az angol szervezetek által rögzítve',
        'Az első verseny Badminton Estateon',
      ],
    },
    {
      year: '1877',
      title: 'Az Első Verseny',
      description: 'Az első rögzített badminton verseny Angliában volt. Az érdeklődés gyorsan terjedt az egész országon.',
      details: [
        'Badminton Association alakult 1877-ben',
        'Az első véglegesen kidolgozott szabályok publikálva',
      ],
    },
    {
      year: '1934',
      title: 'Thomas Cup',
      description: 'A Thomas Cup, a férfi csapatok világbajnoksága, elindult. Ez az egyik legfontosabb verseny lett a badminton világában.',
      details: [
        'Nemzetközi verseny férfiak számára',
        'Megkapta az angol brit Sir George Thomas nevét',
      ],
    },
    {
      year: '1956',
      title: 'Uber Cup',
      description: 'A női csapatok világbajnoksága, az Uber Cup. Az egyenlő lehetőség a női játékosoknak.',
      details: [
        'Női társpáros világbajnoksága',
        'Elnevezve az angol Betty Uber után',
      ],
    },
    {
      year: '1992',
      title: 'Olimpiai Verseny',
      description: 'A badminton bekerült az Olimpiai Játékokba Barcelonában. Ez megerősítette a badminton státuszát egy világszintű sportként.',
      details: [
        'Barcelonai Olimpia 1992',
        'Férfi és női egyes, páros és vegyes páros',
      ],
    },
    {
      year: '2000-2024',
      title: 'Modern Badminton',
      description: 'A badminton folyamatos fejlődésben van. Új technikák, új játékosok és új szabályok alakulnak ki.',
      details: [
        'Pontszerzési rendszer változása 21 pontra',
        'Több nő játékos világszinten',
        'Technológia az edzésben és versenyben',
        'Globális bajnokságok és világranglisták',
      ],
    },
  ]

  return (
    <>
      <Header />
      <PageLayout
        title="Badminton Történet"
        subtitle="Fedezd fel a tollasgolyó sport fejlődésének egy faszináló utazását."
      >
        {/* Timeline */}
        <section className="mb-16">
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={event.year} className="relative">
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent"></div>
                )}

                {/* Timeline Item */}
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold relative z-10">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
                    <p className="text-primary font-semibold text-sm mb-1">{event.year}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <ul className="space-y-2">
                      {event.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Championships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Nagyobb Bajnokságok</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Thomas Cup</h3>
              <p className="text-sm text-muted-foreground mb-4">A férfi csapatok világbajnoksága. A legrangosabb verseny a férfiak számára.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Páratlan évek</li>
                <li>16 csapat verseng</li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Uber Cup</h3>
              <p className="text-sm text-muted-foreground mb-4">A női csapatok világbajnoksága. Az egyenlő verseny a női játékosoknak.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Páratlan évek</li>
                <li>16 csapat verseng</li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">All England Open</h3>
              <p className="text-sm text-muted-foreground mb-4">Az egyik legrégebbi és legrangosabb egyéni verseny a világon.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Évente megrendezett</li>
                <li>Férfi és női kategóriák</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Legendary Players */}
        <section className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Legendás Játékosok</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Sir George Thomas</h3>
              <p className="text-sm text-muted-foreground mb-4">Az angol badminton szervezőjének és a Thomas Cup névadójának. Az egyik alapítója a modern badmintonnak.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Rudy Hartono</h3>
              <p className="text-sm text-muted-foreground mb-4">Az indonéz legenda. Nyolcszoros All England Open bajnok.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Lin Dan</h3>
              <p className="text-sm text-muted-foreground mb-4">A kínai szupersztár. 2 olimpiai aranyérmes és sokatszoros világbajnok.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Carolina Marín</h3>
              <p className="text-sm text-muted-foreground mb-4">A spanyol legenda. 3 világbajnok és 2 olimpiai érmes.</p>
            </div>
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  )
}
