export interface BlogArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: number
  content: string
  image: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'Hogyan fejleszd a smash ütésed? Teljes útmutató',
    slug: 'smash-utes-fejlesztese',
    excerpt:
      'A smash a tollaslabda legrobbanékonyabb támadó ütése. Megmutatjuk a helyes fogást, testhelyzetet, ütésmechanikát és azokat a gyakorlatokat, amelyekkel hetek alatt érezhetően erősebb lesz a smashed.',
    category: 'Technika',
    author: 'Szalai Péter',
    date: '2026-04-12',
    readTime: 8,
    image: '/blog-1-technique.jpg',
    content: `A smash a tollaslabda leglátványosabb és egyben legpusztítóbb ütése. Egy profi játékos a labdát 400 km/h fölötti sebességre is fel tudja gyorsítani, de a smash nem csupán erőről szól: a megfelelő időzítés, testhelyzet és csuklómunka legalább annyira fontos, mint a vállból érkező lendület. Ebben az útmutatóban lépésről lépésre végigvesszük, hogyan építsd fel a saját smash ütésedet.

## A helyes fogás

A smashhoz mindig a kalapácsfogást (más néven forehand grip) használd. Tartsd lazán az ütőt, mintha kezet fognál vele – csak az ütés pillanatában szorítsd meg. A túl szoros fogás megöli a csuklódból érkező gyorsulást, ami a smash sebességének akár 30 százalékát is adja.

## Testhelyzet és felkészülés

Fordulj oldalt a háló felé, a bal vállad (jobbkezeseknél) mutasson az ellenfél irányába. A súlyod a hátsó lábadon legyen, a térdek enyhén hajlítva. Az ütőkar feszüljön meg a hátad mögött, mintha labdát készülnél dobni – ez a „nyúl-pozíció", amelyből a teljes kinetikai lánc indul.

## Az ütés mechanikája

A smash nem a karból, hanem a talpakból indul. A hátsó lábadról told át a súlyt az elsőre, közben fordítsd a csípőd a háló felé. A vállad követi a csípőt, majd jön a könyök, végül pedig a csukló pattan rá a labdára. A találkozási pont mindig a fejed előtt és felett legyen – ha a labdát magad mellett vagy mögötted találod el, elveszik az ereje és a szöge.

## A leggyakoribb hibák

A kezdők három tipikus hibát követnek el: csak a karjukkal csapnak, a labdát túl későn találják el, és teljes erőből próbálnak ütni. Ehelyett összpontosíts a technikára – a sebesség jönni fog magától. Egy 80 százalékos, jól időzített smash sokkal hatékonyabb, mint egy 100 százalékos, kontrollvesztett csapás.

## Gyakorlatok az erősebb smashhez

Heti három alkalommal végezz célzott gyakorlatokat. Az árnyékütések (shadow swings) tükör előtt javítják a mozdulatsort. A mediálabdás dobások erősítik a törzset és a vállat. Pályán pedig kérd meg a párodat, hogy magas labdákat adjon, és koncentrálj kizárólag a találkozási pontra. Két-három hét következetes munkával már észrevehető a fejlődés.

## Mikor használd a smasht?

A smash erős fegyver, de nem szabad túlhasználni. A legjobb pillanat az, amikor az ellenfél magas, rövid labdát üt fel a pálya közepére. Soha ne smashelj a hátsó vonalról, ha az ellenfél jó helyzetben áll – inkább építs tovább a pontot drop shottal vagy clearrel.`,
  },
  {
    id: '2',
    title: 'Badminton fitnesz edzés kezdőknek: 4 hetes program',
    slug: 'badminton-fitnesz-kezdoknek',
    excerpt:
      'A tollaslabda az egyik legintenzívebb ütős sportág. Egy strukturált fitnesz program nélkül a játékod gyorsan elérheti a plafont. Itt egy 4 hetes terv, amely a kondíciót, az erőt és a robbanékonyságot egyszerre fejleszti.',
    category: 'Fitnessz',
    author: 'Nagy Márta',
    date: '2026-04-05',
    readTime: 9,
    image: '/blog-2-fitness.jpg',
    content: `Egy mérkőzés alatt a játékos átlagosan 4-6 kilométert fut, több mint 300 irányváltást végez, és a pulzusa percekre maximális zónába kerül. Ha a fizikai felkészültséged nem áll készen erre a terhelésre, a technikád sem fog érvényesülni. Ez a 4 hetes program azoknak szól, akik most kezdik komolyabban venni a sportot.

## 1. hét – Aerob alapozás

Az első héten az alapállóképességet építjük. Heti három alkalommal végezz 30-40 perces, közepes intenzitású futást, ahol még tudsz beszélgetni. Két alkalommal jöjjön egy 20 perces köredzés saját testsúllyal: guggolás, fekvőtámasz, kitörés, plank – mindegyikből 3 sorozat, 12-15 ismétlés.

## 2. hét – Intervall és lábmunka

A második héten bevezetjük az intervall futást. Hetente kétszer csinálj 6×30 másodperces sprinteket 90 másodperc pihenővel. Ehhez jön a hagyományos badminton-lábmunka: a pálya hat sarkára kell pattanni egy középső pontról, sorozatonként 60 másodpercig. Ez a gyakorlat pontosan azt a robbanékonyságot fejleszti, amire a mérkőzéseken szükséged lesz.

## 3. hét – Erő és stabilitás

A harmadik héten súllyal vagy gumiszalaggal dolgozunk. A legfontosabb gyakorlatok: a román felhúzás (a comb hátsó részére), a bolgár kitörés (egyensúly és lábizmok), valamint a vállrotációs gyakorlatok gumiszalaggal (a forgatóhüvely védelmére). Hetente három erőedzés, mindegyikből 4 sorozat 8-10 ismétléssel.

## 4. hét – Specifikus badminton kondíció

Az utolsó héten összekapcsoljuk az eddigieket egy „on-court" edzéssel. 6-szor 90 másodpercig futsz a pálya hat sarkára, közben fantomütéseket végzel. A sorozatok között 60 másodperc pihenő. Ezt egészítsd ki heti két könnyű futással és egy nyújtás-mobilitás napjal.

## A regeneráció

Az izmok nem edzés közben, hanem pihenéskor erősödnek. Aludj minden éjjel legalább 7-8 órát, igyál naponta 2,5-3 liter vizet, és a fehérjebevitelt állítsd be testsúly-kilogrammonként 1,4-1,8 grammra. Egy edzésnap után másnap mindig legyen aktív regeneráció: könnyű séta, úszás vagy jóga.

## Mérhető eredmény

A program végén végezz ugyanazokat a teszteket, mint az elején: Cooper-teszt (12 perc futás), magasugrás helyből, és 30 másodperces lábmunka-teszt. Ha mindhárom területen javultál legalább 10 százalékot, készen állsz, hogy komolyabb terhelésű edzésekbe kezdj.`,
  },
  {
    id: '3',
    title: 'Táplálkozás tollaslabdásoknak: mit egyél edzés és meccs előtt?',
    slug: 'taplalkozas-tollaslabdasoknak',
    excerpt:
      'A megfelelő táplálkozás közvetlenül befolyásolja a teljesítményed. Megmutatjuk, mit egyél meccs előtt, alatt és után, és melyek azok az ételek, amelyeket kerülnöd kell.',
    category: 'Táplálkozás',
    author: 'Kovács Eszter',
    date: '2026-03-28',
    readTime: 7,
    image: '/blog-3-nutrition.jpg',
    content: `A tollaslabda magas intenzitású, gyors ütemű sport, ahol a glükózraktárak gyorsan kiürülnek. Az étrend nem hobby kérdése – egy meccsen a megfelelő evés és ivás 10-15 százalékos teljesítménybeli különbséget okozhat. Az alábbiakban időzítés szerint vesszük végig, mire van szükséged.

## 3-4 órával a meccs előtt

Ez a fő étkezés ideje. Egyél lassú felszívódású szénhidrátot (zabkása, teljes kiőrlésű tészta, barna rizs), hozzá soványabb fehérjét (csirkemell, hal, tofu) és kevés zsírt. Kerüld a nehéz, zsíros ételeket, mert lassítják az emésztést és nehéznek érzed magad a pályán.

## 1 órával a meccs előtt

Egy könnyű, gyorsan emészthető snack ideális: banán, energiaszelet, egy szelet pirítós mézzel, vagy egy kis adag turmix. A cél, hogy a vércukrod stabilan emelkedjen, ne legyél éhes, de ne is legyél tele.

## Meccs közben

Minden játszma között igyál 100-150 ml vizet vagy izotóniás italt. Hosszabb mérkőzéseken (40 perc felett) egy banán vagy egy energiagél is hasznos lehet. Ne kísérletezz versenyen olyan termékkel, amit edzésen még nem próbáltál ki.

## A meccs után – a regenerációs ablak

A meccset követő 30-60 perc a legfontosabb regenerációs ablak. Egy 3:1 arányú szénhidrát-fehérje kombináció a legjobb: például csokis tej, gyümölcsturmix tejsavóval, vagy szendvics csirkemellel és banánnal. Ez gyorsítja a glikogén feltöltését és segíti az izomregenerációt.

## Folyadékpótlás

Egy mérkőzés alatt akár 1,5-2 liter izzadsággal is elveszíthetsz. A meccs előtt 2 órával igyál 500 ml vizet, közvetlenül előtte még 200-300 ml-t. Edzés és meccs után minden elveszített testsúly-kilogramm után 1,2-1,5 liter folyadékkal pótolj.

## Mit kerülj?

Meccs előtt 2 órán belül kerüld a magas zsírtartalmú ételeket (hamburger, sült krumpli), a nyers zöldségek nagy mennyiségét (puffadhatnak), és minden olyan ételt, amit korábban nem próbáltál. A koffeint mértékkel használd – 200-300 mg (egy-két erős kávé) segíthet, de túladagolva remegést és koncentrációzavart okoz.

## Hosszú távú étrend

A napi szénhidrátbeviteled aktív edzésnapokon testsúly-kilogrammonként 5-7 gramm, a fehérjebevitel 1,4-1,8 gramm legyen. A zsírok ne kerüljenek 20 százalék alá, mert a hormonháztartást rontja. Egy egyszerű szabály: a tányérod fele zöldség, negyede komplex szénhidrát, negyede fehérje – mindennap.`,
  },
  {
    id: '4',
    title: 'Mentális felkészülés a tollaslabdában: így kezeld a versenystresszt',
    slug: 'mentalis-felkeszules-tollaslabdaban',
    excerpt:
      'A mérkőzések 80 százaléka a fejben dől el. Tanuld meg a profik mentális eszközeit: vizualizációt, légzéstechnikát, fókuszgyakorlatokat és a meccs közbeni érzelemkezelést.',
    category: 'Mentális',
    author: 'Zöldi Éva',
    date: '2026-03-20',
    readTime: 8,
    image: '/blog-4-mental.jpg',
    content: `Sok játékos edzésen kiválóan játszik, mérkőzésen viszont összeomlik. Ennek oka szinte mindig mentális, nem technikai. A jó hír: a mentális felkészülés ugyanúgy gyakorolható, mint a smash. Ebben a cikkben azokat az eszközöket mutatjuk meg, amelyeket világklasszis játékosok és edzők használnak.

## Vizualizáció – a fej előtti edzés

A meccs előtti estén szánj 10 percet a vizualizációra. Csukd be a szemed, és képzeld el magad a pályán: érezd a parketta tapadását, halld a labda hangját, lásd, ahogy magabiztosan mozogsz. A kutatások szerint a részletes vizualizáció ugyanazokat az agyi területeket aktiválja, mint a valódi mozgás, és mérhetően javítja a mérkőzésen nyújtott teljesítményt.

## Légzéstechnika a pillanatnyi stresszre

Amikor a stressz a tetőfokára hág – például egy meccslabda előtt –, használd a 4-7-8 légzést: szívd be 4 másodperc alatt, tartsd bent 7 másodpercig, majd fújd ki 8 másodperc alatt. Két ismétlés is elég, hogy a paraszimpatikus idegrendszered átvegye az irányítást és lecsendesítse a pulzusod.

## A pontok közötti rutin

A profik mindig ugyanazt a 8-12 másodperces rutint csinálják minden pont között: visszamennek a hátsó vonalra, megigazítják a húrokat, vesznek egy mély levegőt, elképzelik a következő szerválást. Ez a rutin „pszichológiai reset" – elválasztja az előző pontot a következőtől, és nem hagyja, hogy egy elveszített labda elvigye a fejedet.

## Pozitív önbeszéd

A belső monológod döntő. „Ne pofozzam ki!" – ez rossz utasítás, mert az agyad a „pofozni" szóra koncentrál. Helyette: „magas labdára kérek smash" – ez pozitív, konkrét és cselekvésközpontú. Cseréld le a kritikus belső hangot egy edző-szerű, támogató hangra.

## A hibák kezelése

Minden játékos hibázik – a különbség az, hogy mennyi idő alatt teszi túl magát rajta. Adj magadnak 3 másodpercet: ennyi idő alatt frusztrálódhatsz, dühös lehetsz. Utána viszont kötelezően „reset" – mély levegő, és a következő pontra koncentrálsz. Ez a 3 másodperces szabály a versenyzők egyik leggyakoribb eszköze.

## A meccs előtti reggel

Aznap reggel ne nézz a meccs eredményekről videókat, ne olvass az ellenfél statisztikáit, és kerüld a túl sok kávét. Hallgass nyugtató zenét vagy egy bemelegítő playlistet, csinálj könnyű reggelit, és a meccs előtt 2 órával már a pályán mozogj. A rutin a barátod – a meglepetések ellensége a teljesítménynek.

## Hosszú távú mentális edzés

Heti egy alkalommal vezess „mérkőzésnaplót": írd le, mit játszottál jól, mit rosszul, és milyen mentális állapotban voltál. Néhány hónap után pontosan látni fogod, mely helyzetekben omlasz össze, és tudatosan dolgozhatsz rajtuk. A profi sportolók ugyanúgy gyakorolják a fejüket, mint a testüket – te se hagyd ki ezt a felét a játéknak.`,
  },
  {
    id: '5',
    title: 'Tollaslabda felszerelés vásárlási útmutató: ütő, cipő, labda',
    slug: 'tollaslabda-felszereles-utmutato',
    excerpt:
      'Egy rossz ütő évekre lelassíthatja a fejlődésed, egy rossz cipő pedig sérülést okoz. Ebben a cikkben minden fontos paramétert átveszünk, hogy a saját játékstílusodhoz tudd kiválasztani a felszerelést.',
    category: 'Felszerelés',
    author: 'Horváth Gábor',
    date: '2026-03-12',
    readTime: 9,
    image: '/blog-5-equipment.jpg',
    content: `A megfelelő felszerelés nem garantálja, hogy jól játssz, de a rossz felszerelés garantáltan visszafog. Ebben az útmutatóban végigvesszük az ütő, a cipő, a húr és a labda kiválasztásának minden fontos szempontját, hogy ne kelljen tapasztalat nélkül vagy az eladó marketingszövege alapján döntened.

## Az ütő – súly, egyensúly, merevség

Az ütő három legfontosabb paramétere a súly, az egyensúly és a nyél merevsége. A súlyt „U" jelöléssel adják meg: 3U (85-89 g) nehezebb és erősebb ütésekhez ideális, 4U (80-84 g) gyorsabb és kezdőknek vagy védekező stílusú játékosoknak ajánlott. Az egyensúly lehet fejnehéz (támadó stílus, erős smash), kiegyensúlyozott (sokoldalú játék) vagy nyélnehéz (gyors védekezés, blokkolás). A nyél merevsége a tapasztalat szintjéhez igazodjon: a kezdőknek puhább nyél kell, mert az segít a labda visszajuttatásában; a haladók merevebb nyelet választhatnak a pontosabb kontroll miatt.

## Húr – a sokszor elfelejtett részlet

A húr feszessége legalább annyira fontos, mint az ütő. Kezdőknek 9-10 kg (20-22 lbs) ajánlott – könnyebb a labdát visszaütni. Haladóknak 11-12 kg (24-26 lbs), profiknak 13-14 kg. A vékony húr (0,65-0,66 mm) több sebességet ad, de hamarabb szakad; a vastagabb (0,70 mm) tartósabb. A húrt 3-6 havonta cseréltesd akkor is, ha nem szakadt el – elveszti a rugalmasságát.

## Cipő – ne sportcipőben játssz!

Soha ne játssz futócipőben vagy hagyományos sportcipőben. A futócipő előre-hátra mozgásra van tervezve, a tollaslabdához viszont oldalsó stabilitás és gyors irányváltás kell. A specifikus badminton cipő alacsony talpú, erős oldalsó támasztással és nem nyomot hagyó (non-marking) gumitalppal. A megfelelő cipő nem csak a teljesítményt javítja, hanem 60-70 százalékkal csökkenti a bokasérülések kockázatát is.

## Labda – toll vagy műanyag?

A tollas labda autentikus érzést és játékot ad, de drága és hamar tönkremegy (egy mérkőzés alatt 4-6 darabot is elhasználhatsz). Edzéshez és kezdőknek a műanyag (nylon) labda gazdaságos választás, és sokkal tartósabb. A tollas labdánál figyelj a sebességszámra: 76-77 (lassú, meleg helyiségbe), 78 (közepes, általános használatra), 79 (gyors, hideg helyiségbe).

## Markolat és kiegészítők

A nyélen lévő overgrip 1-2 hónap alatt elkopik – ne sajnáld lecserélni. A nedvszívó (towel) grip jobban tapad izzadás közben, a sima szintetikus tartósabb. Vegyél egy jó tollaslabda táskát, amely legalább 6 ütő tárolására alkalmas és termoreflektív béléssel rendelkezik – nyáron az autóban a húr feszessége gyorsan elromlik a hőtől.

## Mennyit költs?

Kezdőknek: egy 25-40 ezer forintos ütő, egy 20-30 ezer forintos cipő, és egy csomag nylon labda bőven elég az első évre. Haladóknak: 50-80 ezer forintos ütő, professzionális cipő, és váltóütő hasonló paraméterekkel. Profiknak: 80 ezer forint feletti ütő, két-három párhuzamosan használt ütő különböző húrfeszítéssel.

## A legjobb tanács

Mielőtt vásárolnál, próbáld ki az ütőt. A legtöbb jobb sportszerbolt vagy klub kínál tesztütőket. Egy 30 perces játékból sokkal többet megtudsz egy ütőről, mint bármilyen specifikációs táblázatból. Az „ideális" ütő szubjektív – ami a párodnak tökéletes, neked lehet, hogy egyáltalán nem fekszik.`,
  },
  {
    id: '6',
    title: 'Versenyzés tollaslabdában: hogyan készülj fel az első tornádra?',
    slug: 'tollaslabda-versenyre-felkeszules',
    excerpt:
      'Az első verseny mindenkinek izgalmas és ijesztő. Ez a gyakorlati útmutató segít a nevezéstől a meccs napjáig minden részletet előkészíteni, hogy a pályán már csak a játékra koncentrálhass.',
    category: 'Versenyzés',
    author: 'Tóth András',
    date: '2026-03-05',
    readTime: 8,
    image: '/blog-6-tournament.jpg',
    content: `Eljött a pillanat: úgy döntöttél, hogy benevezel az első hivatalos tornádra. Gratulálunk – ez egy fontos lépés a játékodban. Ez a cikk végigvezet a teljes folyamaton, hogy elkerüld a tipikus kezdő hibákat, és a legjobb formádat tudd hozni a pályán.

## A megfelelő torna kiválasztása

Először keress „kezdő" vagy „C/D kategóriás" tornát a Magyar Tollaslabda Szövetség (MTSZ) eseménynaptárában vagy az országos amatőr ligák oldalain. Ne válassz olyan tornát, ahol egyértelműen erősebb játékosok indulnak – egy 6-0, 6-0 vereség nem épít, csak elkedvetlenít. Ideális, ha az első tornádon nagyjából egyforma szintű ellenfelekkel találkozol.

## Nevezés és logisztika

A nevezést a torna előtt 1-2 héttel kell leadni, általában online űrlapon. Fizesd be a nevezési díjat időben, és kérj visszaigazolást. Olvasd el a kiírást figyelmesen: hány mérkőzéses csoportkört játszanak, milyen labdát használnak (toll vagy nylon), és mekkora a maximális csapatlétszám. Számolj az utazási idővel is – jó, ha legalább 1 órával a meccs előtt a helyszínen vagy.

## A torna előtti hét

Az utolsó héten ne erőltesd az edzést. A keményebb fizikai munka 5-7 nappal korábban már nem javít a formádon, csak elfárasztasz. Hétfő-kedd: normál edzés, szerda-csütörtök: könnyű technikai edzés, péntek: pihenés vagy nagyon könnyű mozgás, szombat (verseny napja): meccs. Az alvás és a folyadékbevitel ezen a héten a legfontosabb.

## Mit vigyél magaddal?

Legalább 2 ütő (egy elszakadt húr meccs közben véget vethet a tornádnak), 2-3 váltóing, csere zokni, törülköző, vízpalack vagy izotóniás ital, banán és energiaszelet, gyorstapasz a hólyagra, sportszalag (kineziológiai vagy normál), kis elsősegély csomag (fájdalomcsillapító, ragtapasz), és egy meleg felsőrész a meccsek közötti várakozáshoz.

## A bemelegítés

A bemelegítés legalább 20-25 perces legyen: 5 perc könnyű kocogás, 10 perc dinamikus nyújtás (lábkörök, csípőforgatás, vállrotációk), 5 perc árnyékütések ütővel, és 5 perc rövid labdamenetek a pároddal. Soha ne menj hidegen pályára egy meccs előtt – a forgatóhüvely- és combhajlító sérülések szinte mindig elégtelen bemelegítésből erednek.

## A meccs közben

A versenyen a legtöbb kezdő hibája, hogy „mindent meg akar nyerni rögtön". Helyette: koncentrálj a folyamatra, ne az eredményre. Játssz egyszerű, magas labdákat, várj a saját ütésedre, és építsd fel a pontokat. Ha vesztesz egy pontot, használd a 3 másodperces resetet, és a következő pontra koncentrálj. A párodnak (ha párosban játszol) bátoríts minden labda után – egy csapatként sokkal jobban játszotok.

## Bíró és szabályok

A legtöbb amatőr tornán a meccseket a játékosok maguk bíráskodják, vagy egy közös bíró figyel. Ismerd a legfontosabb szabályokat: 21 pontos szettek, 2 szett előny, 30-as csúcs, váltakozó szervaoldal pontszerzés után. A vitatott labdáknál maradj higgadt – a szportszerűség hosszabb távon többet ér, mint egy kétes pont.

## A torna után

Akár nyertél, akár vesztettél: ne hagyd elveszni az élményt. Még aznap este írd le, mi ment jól, mi nem, és mit gyakorolnál a következő tornáig. Pihend ki a fáradtságot 2-3 napig, majd kezdd el az edzést a tapasztalatok beépítésével. Az első torna mindig a leghasznosabb – sokkal többet tanulsz egy hivatalos meccsen, mint hónapok edzésén.`,
  },
]
