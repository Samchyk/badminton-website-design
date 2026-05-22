export interface BlogArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  author: string
  readTime: number
  content: string
  image: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'Hogyan Fejleszd az Smash Ütésed?',
    slug: 'smash-utesed-fejlesztese',
    excerpt: 'A smash ütés az egyik legerősebb ütés a badmintonban. Tanulj meg a helyes technikáról és gyakorlata a kiváló smash ütéshez.',
    category: 'Technika',
    author: 'Szalai Péter',
    readTime: 5,
    image: '/blog-1-technique.jpg',
    content: `A smash ütés az egyik legerősebb ütés a badmintonban. Ez az az ütés, amely a leggyorsabb szöget és a legtöbb erőt adja. Ebben a cikkben megtanulod, hogyan fejleszd az smash ütésed.

## Helyes Fogás

Az smash ütésnél a fogás nagyon fontos. Használd a versenyfogást, amely erősebb, mint a parti fogás.

## Testhelyzet

Állj a hátra és a mellédre. Az ütő legyen a fejed felett, az aggyfogás szögben.

## Ütés Mozgása

A smash ütés egy nagy, erőteljes mozgás. Kezdd az ütővel a fejed felett, majd erőteljesen csapd meg a tollasgolyót.

## Gyakorlat

Gyakorolj minden nap 10-15 percig az smash ütésen. Először lassan, majd fokozatosan gyorsabban.`,
  },
  {
    id: '2',
    title: 'Badminton Fitnessz Edzés Kezdőknek',
    slug: 'badminton-fitnessz-kezdoknek',
    excerpt: 'A badminton egy kiváló kardiovaszkuláris edzés. Tanulj meg a fitness edzésről, amely segíthet a badminton teljesítményed javításában.',
    category: 'Fitnessz',
    author: 'Nagy Márta',
    readTime: 6,
    image: '/blog-2-fitness.jpg',
    content: `A badminton egy kiváló kardiovaszkuláris edzés. Ez az egyik legjobb módja a fizikai fitnesz javításának. Ebben a cikkben megtanulod, hogyan végezz badminton fitness edzést.

## Kardiovaszkuláris Edzés

A badminton egy kiváló kardiovaszkuláris edzés. Ez segít az erőnléted javításában és az egészséged megőrzésében.

## Erő Edzés

Az erő edzés szintén fontos. Gyakorolj a lábak, a kar és a törzs erősítésére.

## Flexibilitás

A flexibilitás edzés segít a sérülések elkerülésében. Nyújtsd meg a lábaidat, a karodat és a törzsedet.`,
  },
  {
    id: '3',
    title: 'Badminton Stratégia: Hogyan Verj Meg?',
    slug: 'badminton-strategia-nyeresi-tipyek',
    excerpt: 'A stratégia legalább olyan fontos, mint a technika a badmintonban. Tanulj meg a stratégiai tippekről és a nyerési módokról.',
    category: 'Stratégia',
    author: 'Kovács István',
    readTime: 7,
    image: '/blog-3-nutrition.jpg',
    content: `A stratégia legalább olyan fontos, mint a technika a badmintonban. Ebben a cikkben megtanulod, hogyan használd a stratégiát a gyaloglásokhoz.

## Ellenfél Elemzése

Fordítsd figyelmet az ellenfél játékstílusára. Mit játszik jól? Mit nem?

## Térkontrol

A térfoglalás nagyon fontos. Próbálj meg a középen maradni, hogy mindenhová el tudd érni.

## Pontépítés

Ne próbálj meg azonnal nyerni. Építs meg pontokat fokozatosan, majd amikor az alkalom felmerül, zárd be a pontot.`,
  },
  {
    id: '4',
    title: 'Badminton Sérülések Megelőzése',
    slug: 'badminton-serulések-megelozese',
    excerpt: 'A badminton egy intenzív sport, amely sérüléseket okozhat. Tanulj meg a sérülések megelőzésén.',
    category: 'Egészség',
    author: 'Dr. Bodnár László',
    readTime: 6,
    image: '/blog-4-mental.jpg',
    content: `A badminton egy intenzív sport, amely sérüléseket okozhat. Ebben a cikkben megtanulod, hogyan kerüld el a sérüléseket.

## Megfelelő Felmelegedés

A megfelelő felmelegedés nagyon fontos. Legalább 10 percig melegítsd fel a testedet.

## Nyújtás és Flexibilitás

A nyújtás nagyon fontos. Nyújtsd meg az összes izmot rendszeresen.

## Megfelelő Cipő

A megfelelő cipő nagyon fontos. Használj badminton-specifikus cipőt, amely támogatja az oldalsó mozgást.

## Pihenés

A pihenés szintén fontos. Adj magadnak elég pihenést a helyreállitáshoz.`,
  },
  {
    id: '5',
    title: 'A Jó Drop Shot Titka',
    slug: 'jo-drop-shot-titka',
    excerpt: 'A drop shot egy trükkös ütés, amely szükséges az ellenfél megtévesztésére. Tanulj meg a jó drop shot technikáról.',
    category: 'Technika',
    author: 'Szalai Péter',
    readTime: 5,
    image: '/blog-5-equipment.jpg',
    content: `A drop shot egy trükkös ütés, amely szükséges az ellenfél megtévesztésére. Ebben a cikkben megtanulod, hogyan fejleszd a drop shot ütésed.

## Fogás

A drop shot-nál használd a parti fogást. Ez rugalmasabbá teszi az ütésed.

## Testhelyzet

Állj az ellenfél előtt, az ütő legyen az oldaladon.

## Ütés Mozgása

A drop shot egy könnyű, rövid ütés. Az ütőnek csak a tollasgolyó felső részét érinti meg.

## Gyakorlat

Gyakorolj minden nap a drop shot-on. Ez egy nehéz ütés, ezért sok gyakorlat szükséges.`,
  },
  {
    id: '6',
    title: 'Badminton Mentális Felkészülés',
    slug: 'badminton-mentalis-felkeszules',
    excerpt: 'A mentális felkészülés ugyanolyan fontos, mint a fizikai felkészülés. Tanulj meg a mentális felkészülésről.',
    category: 'Mentális',
    author: 'Zöldi Éva',
    readTime: 7,
    image: '/blog-6-tournament.jpg',
    content: `A mentális felkészülés ugyanolyan fontos, mint a fizikai felkészülés. Ebben a cikkben megtanulod, hogyan készülj fel mentálisan.

## Vizualizáció

A vizualizáció nagyon fontos. Képzeld el magad játékkal, ahogy jól játszol.

## Pozitív Gondolkodás

A pozitív gondolkodás nagyon fontos. Higgy magadban és a képességeidben.

## Stresszkezelés

A stressz kezelése nagyon fontos. Tanulj meg a entspannálási technikákat.

## Fókusz

A fókusz nagyon fontos. Koncentrálj a jelenlegi pontra, ne a múltbeli hibákon.`,
  },
]
