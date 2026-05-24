import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Badminton Szabályok - Hungarytollaslabda',
  description: 'Tanulj meg a badminton összes szabályáról és a játékot irányító rendszerről.',
}

export default function RulesPage() {
  const rules = [
    {
      category: 'Szerv (Service)',
      items: [
        'A szerv a jobb oldali szerzési szögleti teréről kezdődik',
        'A tollasgolyót az átlón keresztül szeretik ki',
        'A szerv legalább a szolgáltatóval azonos szintűnek kell lennie',
        'Az ütő a szerválásnál a testhez szorított ütővel kezdődik',
      ],
    },
    {
      category: 'Pontszerzés',
      items: [
        'Egy pont akkor adódik, ha az ellenfél nem jól szerválja',
        'Egy pont akkor adódik, ha az ellenfél a tollasgolyót kívül ütotte',
        'Egy pont akkor adódik, ha az ellenfél a hálón lövés után',
        'Egy pont akkor adódik, ha az ellenfél az ütővel kétszer csapja meg',
        'Az első 11 pont szerez szettben',
      ],
    },
    {
      category: 'Faults (Hibák)',
      items: [
        'A tollasgolyó kívül esik a pályáról',
        'A tollasgolyó kétszer ütödik meg az ütővel',
        'A játékos az ütővel a csípő felett csapja meg a szervet',
        'A játékos az ellenfél térfele alatt játszik',
        'A játékos az ütővel a hálót érinti',
      ],
    },
    {
      category: 'Ütés és Játékmenet',
      items: [
        'Az ütést kell továbbítani a tollasgolyó visszaérkezésekor',
        'A játékos nem lehet meg az ellenfél térfelén',
        'Az ütő nem csapdolja meg a tollasgolyót - csak egyszer érint meg',
        'A játékos az ütővel nem nyúlhat át a hálón játszás közben',
      ],
    },
    {
      category: 'Páros Ütése',
      items: [
        'Az ütés után a szolgáló játékos és az ellenfél függetlenül cserélődnek',
        'Ha az első csapat szerzi a pontot, a szerepek maradnak ugyanek',
        'Az első szerz után az ellenfél szolgál',
        'Az új szerzőnek mindig a jobb oldali szerzési szögből kell kezdenie',
      ],
    },
  ]

  return (
    <>
      <Header />
      <PageLayout
        title="Badminton Szabályok"
        subtitle="Tanulj meg az összes szabályról, amelyek a badminton játékot irányítják."
      >
        {/* Rules Grid */}
        <section className="mb-16">
          <div className="space-y-6">
            {rules.map((rule) => (
              <div key={rule.category} className="border border-border rounded-lg p-8 bg-card hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{rule.category}</h3>
                <ul className="space-y-3">
                  {rule.items.map((item) => (
                    <li key={item} className="text-foreground flex gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Let and Hindrance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Let és Hindrance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Let</h3>
              <p className="text-muted-foreground mb-4">Amikor az adott ütés vagy pont ismételten játszódik egy olyan ok miatt, amely a játékosok ellenőrzésén kívül van.</p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  Idegen objektum a pályán
                </li>
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  Egy másik játék bemeneti
                </li>
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  Egy játékos nem volt kész a szerzéshez
                </li>
              </ul>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Hindrance</h3>
              <p className="text-muted-foreground mb-4">Amikor egy játékos valamilyen módon zavarja az ellenfelet a pont játszása közben.</p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Hang vagy mozgás
                </li>
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Ütő követése más pályára
                </li>
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Fizikai kontakt
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Match Format */}
        <section className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Meccs Formátum</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-foreground">Szett</p>
                <p className="text-sm text-muted-foreground">Az első 11 pontig játszanak (vagy 12-ig ha 10-10)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-foreground">Szünet</p>
                <p className="text-sm text-muted-foreground">90 másodperc szünet az első és második szett között</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-foreground">Meccs</p>
                <p className="text-sm text-muted-foreground">Az első 2 szett nyerése megnyeri a meccset (vagy 3-ből 2)</p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
      <Footer />
    </>
  )
}
