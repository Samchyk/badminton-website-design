import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Badminton Felszerelés - Hungarytollaslabda',
  description: 'Tanulj meg a badminton sporthoz szükséges felszerelésről és annak kiválasztásáról.',
}

export default function EquipmentPage() {
  const equipment = [
    {
      name: 'Ütő (Racket)',
      description: 'Az ütő az egyik legfontosabb felszerelés. Válassz egy ütőt, amely megfelel az erőfeszítésnek és készségszintjének.',
      specs: [
        'Hossz: 665-675 mm',
        'Súly: 60-100 gramm',
        'Anyag: Szén szálas, alumínium, vas',
        'Grip méret: 2-3 g (4, 5, 6)',
      ],
      considerations: [
        'Kezdőknek ajánlott: könnyebb ütő (90-100g)',
        'Haladó játékosoknak: könnyebb ütő (80-95g) nagyobb kontrolhoz',
        'Az ütő megtarthatósága és egyenlege fontos',
      ],
    },
    {
      name: 'Tollasgolyó (Shuttlecock)',
      description: 'A tollasgolyó a játék szíve. Két típusa van: tollból készült és szintetikus.',
      specs: [
        'Súly: 4,74-5,50 gramm',
        'Átmérő: 62-68 mm',
        'Tollak száma: 16 toll',
        'Szín: fehér vagy sárga',
      ],
      considerations: [
        'Tollból készült: profi szinten használt, jobb teljesítmény',
        'Szintetikus: gyakorláshoz jó, tartósabb',
        'A tollasgolyó minősége a játék minőségét befolyásolja',
      ],
    },
    {
      name: 'Cipő',
      description: 'A badminton cipő speciális, amely támogatja az oldalsó mozgást és a gyors irányváltást.',
      specs: [
        'Könnyű és rugalmas',
        'Jó oldalsó támogatás',
        'Jó tapadás az épületen belül',
        'Csuklófej támogatás',
      ],
      considerations: [
        'Ne futó cipőt használj',
        'Badminton-specifikus cipő szükséges',
        'Kényelmes illeszkedés fontos a sérülések elkerülésére',
      ],
    },
    {
      name: 'Ruha',
      description: 'A megfelelő ruha fontos a kényelemhez és a teljesítményhez.',
      specs: [
        'Légzésre nyitott anyag',
        'Könnyű és rugalmas',
        'Nem túl kötött',
        'Fehér vagy világos szín (versenyek)',
      ],
      considerations: [
        'Lehetővé kell tenni a teljes mozgási tartományt',
        'Szabad mozgás és rugalmasság szükséges',
        'Versenyen a fehér vagy világos szín ajánlott',
      ],
    },
    {
      name: 'Zokni',
      description: 'A badminton zokni fontosabb, mint gondolnád. Segít a tapadásban és a kényelemben.',
      specs: [
        'Légzésre nyitott szövet',
        'Párna támogatás az ütközéshez',
        'Vékony és könnyű',
        'Fehér vagy sötét szín',
      ],
      considerations: [
        'Jó zokni segít a balesetek elkerülésében',
        'Megfelelő párnázás az ütközéshez',
      ],
    },
    {
      name: 'Torba (Bag)',
      description: 'Az ütő és a felszerelés szállításához szükséges egy jó minőségű torba.',
      specs: [
        'Ütőfogás: 1-3 ütőt',
        'Compartmentek a szervezéshez',
        'Szellőzés a nedves felszereléshez',
        'Ergonomikus design',
      ],
      considerations: [
        'Kényelmes szállítás',
        'Ütő védelme',
        'Megfelelő szellőzés a nedves felszereléshez',
      ],
    },
  ]

  return (
    <>
      <Header />
      <PageLayout
        title="Badminton Felszerelés"
        subtitle="Tanulj meg a badminton sporthoz szükséges felszerelésről és annak kiválasztásáról."
      >
        {/* Equipment Items */}
        <section className="mb-16">
          <div className="space-y-8">
            {equipment.map((item) => (
              <div key={item.name} className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.name}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Specifikációk</h4>
                    <ul className="space-y-2">
                      {item.specs.map((spec) => (
                        <li key={spec} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Figyelembeveendő</h4>
                    <ul className="space-y-2">
                      {item.considerations.map((consider) => (
                        <li key={consider} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">✓</span>
                          {consider}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maintenance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Felszerelés Karbantartása</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Ütő Karbantartása</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hajlítsd az ütőt a gyakorlat után</li>
                <li>• Időnként tisztítsd meg az ütőt</li>
                <li>• Szabályosan cseréld az ütőhöz</li>
                <li>• Közvetlen napfénytől védd meg</li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Tollasgolyó Tárolása</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Száraz helyen tárold</li>
                <li>• Közvetlen napfénytől védd meg</li>
                <li>• Extrém hőmérséklettől védd meg</li>
                <li>• Nedves tollasgolyó nem használható</li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Cipő Gondozása</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Rendszeresen tisztítsd meg</li>
                <li>• Száraz helyen tárold</li>
                <li>• Nedves cipőt nem viselj</li>
                <li>• Támogatás szükséges a hosszú játékhoz</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Budget Guide */}
        <section className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Költségvetési Útmutató</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="font-bold text-primary text-lg min-w-max">Kezdő</div>
              <div>
                <p className="font-semibold text-foreground mb-2">500-1000 EUR</p>
                <p className="text-sm text-muted-foreground">Alapvető ütő, cipő, tollasgolyó csomag</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-bold text-primary text-lg min-w-max">Közlekedés</div>
              <div>
                <p className="font-semibold text-foreground mb-2">1000-2000 EUR</p>
                <p className="text-sm text-muted-foreground">Jó minőségű ütő, professzionális cipő, többféle felszerelés</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-bold text-primary text-lg min-w-max">Profi</div>
              <div>
                <p className="font-semibold text-foreground mb-2">2000+ EUR</p>
                <p className="text-sm text-muted-foreground">Csúcsminőségű felszerelés, többféle ütő, speciális cipő, torba</p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  )
}
