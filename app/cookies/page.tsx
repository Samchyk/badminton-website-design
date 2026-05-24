import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Sütik - Hungarytollaslabda',
  description: 'Süti politika a Hungarytollaslabda weboldal.',
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <PageLayout
        title="Sütik"
        subtitle="Olvass el a süti politikánkról."
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Bevezetés</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Hungarytollaslabda weboldal sütiket használ az Ön felhasználói élményének javítására. Ez az oldal ismerteti, hogyan használunk sütiket.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Mi a Suti?</h2>
            <p className="text-muted-foreground leading-relaxed">
              A suti egy kis adatfájl, amelyet a weboldal a böngészőjében tárol. A sütik felhasználókat azonosítanak és megjegyzik az Ön beállításait.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Miért Használunk Sütiket?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A sútikat az alábbi okokból használjuk:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bejelentkezési adatok megjegyzésére</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Beállítások megjegyzésére</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Az oldal teljesítményének nyomon követésére</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Az oldal tartalmának fejlesztésére</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Sütik Típusai</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Többféle suti létezik:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Munkamenet sütik:</strong> Csak az oldal használata során vannak tárolva</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Állandó sütik:</strong> Hosszabb ideig tárolódnak a böngészőjében</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Harmadik féltől származó sütik:</strong> Más weboldalak sütiji</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Sütik Kezelése</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A legtöbb böngészőben dönthet arról, hogy elfogadja vagy elutasítja a sütiket. Az alábbiak szerint kezelheti a sütiket:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Néhány böngészőben a böngészés történetét törölve törölheti a sütiket</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>A böngésző beállításaiban letilthatja az új sütiket</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Harmadik féltől származó sütik kezeléséhez harmadik féltől származó eszközöket használhat</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Harmadik Féltől Származó Sütik</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az oldalunk harmadik féltől származó sütikeket is használhat, például analitika céljából. Ezek a sütik nem közvetlenül az Ön személyes adatainak gyűjtésére szolgálnak.
            </p>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Utolsó frissítés:</strong> 
            </p>
          </div>
        </div>
      </PageLayout>
      <Footer />
    </>
  )
}
