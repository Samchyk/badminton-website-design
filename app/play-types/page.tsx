import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Játéktípusok - Badminton Magyarország',
  description: 'Fedezd fel az összes badminton játéktípust és azok szabályait.',
}

export default function PlayTypesPage() {
  const playTypes = [
    {
      title: 'Egyes (Singles)',
      players: '1 vs 1',
      courtArea: 'Keskeny pálya',
      description: 'Egy játékos az egyik oldalon, egy a másikon. Ez az egyik legegyszerűbb és leggyorsabb játéktípus.',
      rules: [
        'Az egyes korty keskenyebb, mint a páros pálya',
        'Minden játékos a saját felén kezeli az összes ütést',
        'Az alapvonalak az oldalvonalon belül találhatók',
      ],
      strategy: 'Egyenesben kell játszani, gyakran a középen, hogy kontrollálható legyen.',
    },
    {
      title: 'Páros (Doubles)',
      players: '2 vs 2',
      courtArea: 'Széles pálya',
      description: 'Két játékos az egyik oldalon, kettő a másikon. Az együttműködés és a kommunikáció kulcsfontosságú.',
      rules: [
        'A páros pálya szélesebb, mint az egyes pálya',
        'A szerzés alacsonyabb az egyes játékban',
        'A cserebere rendszer használatos',
      ],
      strategy: 'Az elő és háta játékos szerepe van. Az elő játékos támadó helyzetben van.',
    },
    {
      title: 'Vegyes Páros (Mixed Doubles)',
      players: '1 férfi + 1 nő vs 1 férfi + 1 nő',
      courtArea: 'Páros pálya',
      description: 'Egy férfi és egy nő az egyik oldalon, egy férfi és egy nő a másikon. Ez a legnépszerűbb páros játéktípus.',
      rules: [
        'A pálya ugyanolyan széles, mint a páros játékban',
        'Speciális szabályok a szerzéshez',
        'Stratégiai eltérések az egynemű páros játékhoz képest',
      ],
      strategy: 'Az általában az erősebb játékos támadó helyzetben van.',
    },
  ]

  const scoringInfo = {
    points: [
      'A teljes szettben az első 11 pontig játszanak (nem 15)',
      'Ha 10-10 lett az állapot, akkor 12-ig játszanak',
      'Ha 11-11 lett az állapot (vagy 12-12 az 10-10 után), akkor még egy pont szükséges a nyeréshez',
      'Egy meccs 3 szett vagy 2 szett (attól függően, hogy a verseny formátuma)',
    ],
    faults: [
      'A tollasgolyó kívül esik a pályán',
      'A tollasgolyó a hálón marad',
      'Az ütő kétszer csapja meg a tollasgolyót',
      'A szerv alatt a tollasgolyó a csípő feletti részén ütödik meg',
    ],
  }

  return (
    <>
      <Header />
      <PageLayout
        title="Játéktípusok"
        subtitle="Ismerkedj meg a badminton összes játéktípusával és azok szabályaival."
      >
        {/* Play Types Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">A Badminton Játéktípusai</h2>
          <div className="space-y-8">
            {playTypes.map((type) => (
              <div key={type.title} className="border border-border rounded-lg p-8 bg-card hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{type.title}</h3>
                    <p className="text-primary font-semibold mb-1">{type.players}</p>
                    <p className="text-sm text-muted-foreground">{type.courtArea}</p>
                  </div>
                </div>

                <p className="text-foreground mb-6">{type.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Szabályok</h4>
                    <ul className="space-y-2">
                      {type.rules.map((rule) => (
                        <li key={rule} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Stratégia</h4>
                    <p className="text-sm text-muted-foreground">{type.strategy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scoring */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Pontszerzés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="font-semibold text-foreground mb-4">Pontszerzés Szabályai</h3>
              <ul className="space-y-3">
                {scoringInfo.points.map((point) => (
                  <li key={point} className="text-sm text-foreground flex gap-2">
                    <span className="text-primary mt-1">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-8">
              <h3 className="font-semibold text-foreground mb-4">Hibák (Faults)</h3>
              <ul className="space-y-3">
                {scoringInfo.faults.map((fault) => (
                  <li key={fault} className="text-sm text-foreground flex gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    {fault}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Court Dimensions */}
        <section className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Pálya Méretek</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Egyes (Singles)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="text-primary font-semibold">Hosszúság:</span> 17,4 m</li>
                <li><span className="text-primary font-semibold">Szélesség:</span> 8,17 m</li>
                <li><span className="text-primary font-semibold">Szerva vonal:</span> 1,98 m</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Páros (Doubles)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="text-primary font-semibold">Hosszúság:</span> 17,4 m</li>
                <li><span className="text-primary font-semibold">Szélesség:</span> 10,17 m</li>
                <li><span className="text-primary font-semibold">Szerva vonal:</span> 1,98 m</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Háló</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="text-primary font-semibold">Magassága:</span> 1,55 m</li>
                <li><span className="text-primary font-semibold">Középen:</span> 1,524 m</li>
                <li><span className="text-primary font-semibold">Szélén:</span> 1,55 m</li>
              </ul>
            </div>
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  )
}
