import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Badminton Felkészülés - Hungarytollaslabda',
  description: 'Tanulj meg a badminton versenyre való felkészülésről és az edzési tervekről.',
}

export default function PreparationPage() {
  const prepStages = [
    {
      stage: 'Általános Felkészülés (4-6 hét)',
      description: 'Az alapozás szakasza. Fejleszd az általános kondiciót és az alapvető badminton mozgásokat.',
      focus: [
        'Általános kardiovaszkuláris edzés',
        'Alapvető lábmozgás gyakorlatok',
        'Alapvető fogási és ütési technika',
        'Flexibilitás és nyújtás',
      ],
      weekly: '4-5 nap edzés',
    },
    {
      stage: 'Specifikus Felkészülés (4-6 hét)',
      description: 'A badminton-specifikus készségek fejlesztése. Továbbfejlesztsd az ütéseket és a taktikát.',
      focus: [
        'Összes ütés típusának gyakorlása',
        'Pálya mozgás javítása',
        'Ellenfél elleni gyakorlás',
        'Stratégiai szituációk',
      ],
      weekly: '5-6 nap edzés',
    },
    {
      stage: 'Verseny Felkészülés (2-3 hét)',
      description: 'Az utolsó felkészülés a versenyre. Fokozz az intenzitásra, miközben elkerülöd a sérüléseket.',
      focus: [
        'Magas intenzitású intervallum edzés',
        'Versenysimulációs gyakorlatok',
        'Taktikai gyakorlások',
        'Mentális felkészülés',
      ],
      weekly: '4-5 nap edzés',
    },
    {
      stage: 'Verseny Csúcs (1 hét)',
      description: 'A verseny hetében. Csökkentsd az edzés intenzitást, hogy friss maradj.',
      focus: [
        'Könnyű gyakorlatok',
        'Nyújtás és helyreállítás',
        'Mentális vizualizáció',
        'Pihenés és táplálkozás',
      ],
      weekly: '2-3 nap könnyű edzés',
    },
  ]

  const dailyRoutine = [
    {
      time: 'Reggel - Felmelegedés (10-15 perc)',
      activity: 'Könnyű kardió, nyújtás, mobilizáció',
    },
    {
      time: 'Délelőtt - Edzés (60-90 perc)',
      activity: 'Technikai gyakorlatok, mozgás, ütések, ellenfél elleni játék',
    },
    {
      time: 'Ebéd',
      activity: 'Megfelelő táplálkozás, hidratáció',
    },
    {
      time: 'Délután - Erő és Kondíció (30-45 perc)',
      activity: 'Erő edzés, flexibilitás, helyreállítás',
    },
    {
      time: 'Este',
      activity: 'Könnyű nyújtás, relaxáció, alvás',
    },
  ]

  const nutrition = [
    {
      category: 'Szénhidrátok',
      importance: 'Energiaforrás',
      sources: 'Rizs, búza, gyümölcsök, zöldségek',
      timing: 'A játék előtt 2-3 óra',
    },
    {
      category: 'Fehérjék',
      importance: 'Izom helyreállítás',
      sources: 'Csirke, hal, tojás, tej',
      timing: 'Az edzés után 30-60 percen belül',
    },
    {
      category: 'Zsírok',
      importance: 'Energia, hormon szabályzás',
      sources: 'Olívaolaj, avokádó, halolaj',
      timing: 'Az egész nap',
    },
    {
      category: 'Víz',
      importance: 'Hidratáció, hűtés',
      sources: 'Víz, elektrolit italok',
      timing: 'Az egész nap',
    },
  ]

  return (
    <>
      <Header />
      <PageLayout
        title="Badminton Felkészülés"
        subtitle="Tanulj meg a badminton versenyre való felkészülésről és az edzési tervekről."
      >
        {/* Preparation Stages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Felkészülési Szakaszok</h2>
          <div className="space-y-6">
            {prepStages.map((stage, index) => (
              <div key={stage.stage} className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-primary font-semibold text-sm mb-1">Szakasz {index + 1}</p>
                    <h3 className="text-2xl font-bold text-foreground">{stage.stage}</h3>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {stage.weekly}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">{stage.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Fókusz Területek</h4>
                  <ul className="space-y-2">
                    {stage.focus.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Routine */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Napi Rutin</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-4">
              {dailyRoutine.map((item) => (
                <div key={item.time} className="flex gap-6 pb-4 border-b border-border last:border-b-0">
                  <div className="font-semibold text-primary min-w-max">{item.time}</div>
                  <div className="text-muted-foreground">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Táplálkozás</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nutrition.map((item) => (
              <div key={item.category} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.category}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{item.importance}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold mb-1">Források</p>
                    <p className="text-sm text-muted-foreground">{item.sources}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold mb-1">Időzítés</p>
                    <p className="text-sm text-muted-foreground">{item.timing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pre-Match Tips */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Verseny Előtti Tippek</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-foreground mb-1">Jó alvás az Előző Éjszaka</p>
                <p className="text-sm text-muted-foreground">Legalább 7-8 óra alvás szükséges az optimális teljesítményhez.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-foreground mb-1">Jó Reggeli</p>
                <p className="text-sm text-muted-foreground">Egyél szénhidrátokat és fehérjéket a reggeli energiához.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-foreground mb-1">Megfelelő Felmelegedés</p>
                <p className="text-sm text-muted-foreground">15-20 perc felmelegedés a mérkőzés előtt szükséges.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-foreground mb-1">Mentális Felkészülés</p>
                <p className="text-sm text-muted-foreground">Vizualizáció és pozitív gondolkodás előtt a mérkőzésnek.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">5</div>
              <div>
                <p className="font-semibold text-foreground mb-1">Felszerelés Ellenőrzése</p>
                <p className="text-sm text-muted-foreground">Győződj meg, hogy az ütő, cipő és ruha megfelelő állapotban van.</p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  )
}
