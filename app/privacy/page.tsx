import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Adatvédelem - Hungarytollaslabda',
  description: 'Adatvédelmi szabályzat a Hungarytollaslabda weboldal.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <PageLayout
        title="Adatvédelem"
        subtitle="Olvass el az adatvédelmi szabályzatunkat."
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Bevezetés</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Hungarytollaslabda elkötelezett az adatvédelem és a magánélet védelme iránt. Ez az adatvédelmi szabályzat ismerteti, hogyan gyűjtjük, felhasználjuk és védelmezzük az Ön személyes adatait.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Adatok Gyűjtése</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Az alábbiak szerint gyűjtünk adatokat:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Nevét, e-mail címét és telefonszámát, ha regisztrál</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Böngészési viselkedést és eszközadatokat</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>IP címét és egyéb technikai adatokat</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Adatok Felhasználása</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az Ön adatait az alábbiak céljára használjuk: a weboldal fejlesztésére, az Ön élményének javítására, kommunikáció és marketing céljaira.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Adatok Védelme</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az Ön adataira vonatkozóan szervezeti és műszaki biztonsági intézkedéseket alkalmazunk, hogy megvédjük az illetéktelen hozzáféréstől.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Sütiket és Nyomkövetés</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az oldalunk sütiket használ a felhasználói élmény javítására. Letilthatja a sütiket a böngészőjében.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Az Ön Jogai</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Az Ön jogai az alábbiak:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Hozzáférés az Ön személyes adataihoz</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Helyesbítés az Ön személyes adataihoz</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Törlés az Ön személyes adataira</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Felhasználás korlátozása</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ha az Ön adatvédelmi jogaira vonatkozó kérdése vagy aggálya van, lépjen kapcsolatba velünk az contacts@hungarytollaslabda.com címen.
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
