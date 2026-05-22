import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Felhasználási Feltételek - Badminton Magyarország',
  description: 'Felhasználási feltételek a Badminton Magyarország weboldal.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <PageLayout
        title="Felhasználási Feltételek"
        subtitle="Olvass el a felhasználási feltételeket."
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Bevezetés</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az alábbiak a Badminton Magyarország weboldalának (a továbbiakban "oldal") felhasználási feltételei. A weboldal használatával elfogadja ezeket a feltételeket.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Felhasználási Jogok</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az oldal tartalmát csak személyes és nem kereskedelmi célokra használhatja. Nem másolhatja, nem módosíthatja, nem forgalmazhatja az oldal tartalmát.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Szellemi Tulajdon</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az oldal összes tartalma szerzői jogvédelem alatt áll. Az oldal szerzői joga a Badminton Magyarország-ot illeti meg vagy a tartalom szerzőit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Viselkedési Szabályok</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Az oldalon az alábbiak tilosak:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Sértő vagy szexuálisan explicit tartalom</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Adatokat gyűjtő vagy naplózó tevékenység</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>A rendszer vagy az oldal megzavarása</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Lopás vagy csalás</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Felelősségi Korlátozás</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az oldal "olyan, amilyen" alapon van biztosítva. A Badminton Magyarország nem vállal felelősséget az oldal használatából eredő közvetlen vagy közvetett károkért.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Külső Linkek</h2>
            <p className="text-muted-foreground leading-relaxed">
              Az oldal olyan linkeket tartalmazhat, amelyek külső weboldalaira mutatnak. A Badminton Magyarország nem felelős ezeknek az oldalaknak a tartalmáért.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Felhasználás Beszüntetése</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Badminton Magyarország jogában áll az oldal hozzáférését bármikor beszüntetni, ha a feltételeket megsértik.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Változások</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Badminton Magyarország jogában áll ezeket a feltételeket bármikor megváltoztatni.
            </p>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Utolsó frissítés:</strong> 2024. május
            </p>
          </div>
        </div>
      </PageLayout>
      <Footer />
    </>
  )
}
