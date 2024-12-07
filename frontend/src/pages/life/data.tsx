import { BabyIcon, CoinsIcon, HouseIcon, SchoolIcon, UserIcon } from "lucide-react";

const pestounskaPece = [
    {
      "category": "Pěstounská péče",
      "question": "Víš, co znamená, že vyrůstáš v pěstounské péči?",
      "answers": {
        "ano": "Fosterův tip: Jestli máš dost odvahy, přečti si zákon o sociálně-právní ochraně dětí. § 47 je věnovaný pěstounské péči.",
        "ne": "To, že jseš v pěstounské péči, znamená, že o tebe pečuje někdo jiný než rodič. O svěření do péče pěstouna nebo pěstounů rozhodl soud. Pěstouni, podobně jako rodiče, jsou zodpovědní za tvoji výchovu. Fosterův tip: Jestli máš dost odvahy, přečti si zákon o sociálně-právní ochraně dětí. § 47 je věnovaný pěstounské péči."
      },
      "tip": "Jestli máš dost odvahy, přečti si zákon o sociálně-právní ochraně dětí. § 47 je věnovaný pěstounské péči.",
      "link": "odkaz na zákon v rámci nějakých oficiálních webových stránek",
      "plan": "Sepiš si všechno, co tě zajímá k pěstounské péči a vyptej se na to pracovníka/pracovnice doprovázející organizace. Je důležité, abys rozuměl/a tomu, co se kolem tebe děje."
    },
    {
      "category": "Pěstounská péče",
      "question": "Víš, jak dlouho trvá pěstounská péče?",
      "answers": {
        "ano": "Fosterův tip: Studuj, co nejdéle to jde, ať pěstounka běží.",
        "ne": "Pěstounská péče automaticky trvá do tvých 18 let. Pokud budeš dále nezaopatřeným dítětem, tzn. budeš studovat, pak může pěstounská péče trvat až do 26 let. Fosterův tip: Studuj, co nejdéle to jde, ať pěstounka běží."
      },
      "tip": "Studuj, co nejdéle to jde, ať pěstounka běží.",
      "link": "odkaz na zákon v rámci nějakých oficiálních webových stránek",
      "plan": "Pokud dále studuješ, zajisti si vždy na začátku školního roku potvrzení o studiu. Dokládá se jím na úřadu práce trvání pěstounské péče."
    },
    {
      "category": "Pěstounská péče",
      "question": "Víš, jaké jsou pravidelně vyplácené dávky pěstounské péče a jak se týkají zrovna tebe?",
      "answers": {
        "ano": "Fosterův tip: Přesnou výši dávek najdeš v zákoně o sociálně-právní ochraně dětí nebo na stránkách úřadu práce a Ministerstva práce a sociálních věcí.",
        "ne": "Každý měsíc jsou v rámci pěstounské péče vypláceny dávky sloužící v podstatě jako výplata pro pěstouna (příspěvek při pěstounské péči nebo odměna pěstouna) a dávka na úhradu potřeb dítěte, ze které by měli pěstouni hradit náklady spojené s péčí o tebe. Příspěvek na úhradu potřeb dítěte náleží od 18 let tobě, nebo si můžeš vybrat opakující se zaopatřovací příspěvek - v případě, že ještě studuješ a chceš se osamostatnit. Fosterův tip: Přesnou výši dávek najdeš v zákoně o sociálně-právní ochraně dětí nebo na stránkách úřadu práce a Ministerstva práce a sociálních věcí."
      },
      "tip": "Přesnou výši dávek najdeš v zákoně o sociálně-právní ochraně dětí nebo na stránkách úřadu práce a Ministerstva práce a sociálních věcí.",
      "link": "odkaz na úřad práce, MPSV, případně na nějaký náš materiál shrnující dávky PP",
      "plan": "Zjisti si výši příspěvku na úhradu potřeb dítěte a podmínky pro získání opakujícího se zaopatřovacího příspěvku. Prober s doprovázející pracovnicí nebo pracovníkem výhody a rizika těchto dávek, aby ses mohl/a rozhodnout, kterou budeš pobírat."
    },
    {
      "category": "Pěstounská péče",
      "question": "Víš, jak bude vypadat pěstounská péče po tvých 18. narozeninách?",
      "answers": {
        "ano": "Fosterův tip: Kvůli jednorázovému zaopatřovacímu příspěvku určitě pěstounskou péči neukončuj. Dostaneš ho i později. Je super ho využít například na kauci na byt.",
        "ne": "Když nebudeš dále chodit do školy, v 18 letech pěstounská péče a s ní i dávky skončí. Jestli budeš dále studovat, pěstounská péče pokračuje. Buď může mít podobu jako doposud (dávky pro pěstouny a příspěvek na úhradu potřeb dítěte), nebo se můžeš osamostatnit a požádat o opakující se zaopatřovací příspěvek. Každý měsíc tak budeš dostávat peníze na živobytí. Při konci pěstounské péče máš nárok na jednorázový zaopatřovací příspěvek. Fosterův tip: Kvůli jednorázovému zaopatřovacímu příspěvku určitě pěstounskou péči neukončuj. Dostaneš ho i později. Je super ho využít například na kauci na byt."
      },
      "tip": "Kvůli jednorázovému zaopatřovacímu příspěvku určitě pěstounskou péči neukončuj. Dostaneš ho i později. Je super ho využít například na kauci na byt.",
      "link": "odkaz na úřad práce, MPSV, případně na nějaký náš materiál shrnující dávky PP",
      "plan": "Odpověz si na otázky: Kdy skončíš se školou? Co plánuješ potom? Chceš zůstat bydlet u pěstounů nebo plánuješ osamostatnění? Vše prober s pracovníkem/pracovnicí doprovázející organizace, ať máš možnost se na vše připravit."
    }
];

const skolaAPrace = [
    {
      "category": "Škola a práce (Učeníčko, makáníčko)",
      "question": "Studuješ, chodíš někam do školy?",
      "answers": {
        "ano": "Nezapomeň, že středoškoláci by měli na začátku každého školního roku dodat své zdravotní pojišťovně potvrzení o studiu, aby za ně stát hradil zdravotní pojištění.",
        "ne": "Jestli nechodíš do školy, tak pracuješ a máš pracovní smlouvu? Nebo jsi evidovaný/á na úřadu práce? Pokud neplatí ani jedna z těchto možností, vzniká ti dluh na zdravotním pojištění."
      },
      "tip": "Vydrž chodit do školy co nejdéle, na dospělost je času dost :)",
      "link": "",
      "plan": "Zeptej se na své zdravotní pojišťovně, jestli máš hrazené zdravotní pojištění. Pokud ti vznikl dluh, začni ho splácet."
    },
    {
      "category": "Škola a práce (Učeníčko, makáníčko)",
      "question": "Víš, co chceš jednou dělat za práci?",
      "answers": {
        "ano": "Fosterův tip: Někteří kariéroví poradci poskytují své služby i zdarma. Zkus si ho vygooglit.",
        "ne": "Pokud si nejsi jistý/á, co chceš v životě jednou dělat, můžeš využít služeb kariérového poradce, pracovníků úřadu práce nebo můžeš zkusit absolvovat třeba rekvalifikační kurz. Např. úřad práce nabízí rekvalifikační kurzy zdarma nebo za velmi příznivé ceny."
      },
      "tip": "Někteří kariéroví poradci poskytují své služby i zdarma. Zkus si ho vygooglit.",
      "link": "",
      "plan": "Zjisti si, jaká povolání můžeš dělat se vzděláním, které máš nebo budeš mít. Máš jiné sny a plány? Zjisti si, co pro ně musíš splnit."
    },
    {
      "category": "Škola a práce (Učeníčko, makáníčko)",
      "question": "Víš, jaké jsou ve škole nebo v práci tvoje silné stránky a na jaké povolání se hodíš?",
      "answers": {
        "ano": "Fosterův tip: Každý je na něco šikovný, jen je potřeba to hledat a najít.",
        "ne": "Je důležité zmapovat si své silné stránky a podle nich pak uvažovat o budoucí práci. Zaměř se na to, jaké předměty ti ve škole jdou a jaké tě baví. Zeptej se svého okolí – dospěláků, kamarádů, učitelů – v čem vnímají tvoje vlohy. Na internetu se dají najít i osobnostní testy, ale spoléhej se spíše na svůj vlastní názor."
      },
      "tip": "Každý je na něco šikovný, jen je potřeba to hledat a najít.",
      "link": "soupis toho, na co může být člověk šikovný",
      "plan": "Stáhni si soupis toho, v čem může být člověk dobrý, a zaškrtej svoje silné stránky. Co ti to prozradilo?"
    },
    {
      "category": "Škola a práce (Učeníčko, makáníčko)",
      "question": "Umíš napsat životopis a motivační dopis?",
      "answers": {
        "ano": "Fosterův tip: V životopise a motivačním dopise buď upřímný/á. Nezapomeň na své dobré stránky.",
        "ne": "Kvalitně zpracovaný životopis a motivační dopis jsou při oslovování budoucích zaměstnavatelů velmi důležité. Strukturu nemusíš vymýšlet, stačí, když si stáhneš vzor z internetu a doplníš tam své vlastní informace."
      },
      "tip": "V životopise a motivačním dopise buď upřímný/á. Nezapomeň na své dobré stránky.",
      "link": "vzor životopisu, vzor motivačního dopisu",
      "plan": "Stáhni si vzor životopisu a motivačního dopisu a zkus si je vyplnit."
    }
]

const penize = [
    {
      "category": "Peníze",
      "question": "Stačí ti tvoje peníze, například kapesné nebo příjem z brigády, na vše, co si z nich potřebuješ pořídit?",
      "answers": {
        "ano": "Fosterův tip: Vždycky se dá někde ušetřit, i když se zdá, že je to nemožné.",
        "ne": "Pokud s penězi nevystačíš, je potřeba se zamyslet, za co je utrácíš a kde se dá ušetřit. Nebo hledej cestu, jak si vydělat další peníze, například brigádu. A třeba je možné požádat dospěláky o zvýšení kapesného."
      },
      "tip": "Vždycky se dá někde ušetřit, i když se zdá, že je to nemožné.",
      "link": "manuál peníze",
      "plan": "Zkus se podívat po nějaké brigádě. Koukni se na internet, zeptej se známých. Ale pozor - na brigádu musíš mít ukončenou základní školu."
    },
    {
      "category": "Peníze",
      "question": "Umíš si vytvořit svůj osobní rozpočet?",
      "answers": {
        "ano": "Fosterův tip: Když se naučíš hospodařit s penězi teď, až budeš pracovat a žít samostatně, bude se ti ho hodit.",
        "ne": "Osobní rozpočet zahrnuje příjmy, výdaje a jejich srovnání. Pokud máš příjmy vyšší než výdaje, je to v pohodě. Pokud jsou ale výdaje vyšší než příjmy, máš problém a ten je potřeba řešit."
      },
      "tip": "Když se naučíš hospodařit s penězi teď, až budeš pracovat a žít samostatně, bude se ti ho hodit.",
      "link": "vzor osobního rozpočtu, manuál Peníze",
      "plan": "Vytvoř si svůj osobní rozpočet. Stáhni si vzor, doplň příjmy a výdaje a vzájemně je porovnej."
    },
    {
      "category": "Peníze",
      "question": "Máš založený bankovní účet a využíváš bankovní služby?",
      "answers": {
        "ano": "Fosterův tip: Stáhni si kartu do mobilu nebo chytrých hodinek a nemusíš ani vyndavat peněženku z batohu.",
        "ne": "Mít svůj bankovní účet je fajn už před dospělostí. Jsou dětské a studentské bankovní účty. U některých bank je možné je založit i bez souhlasu dospěláků. K účtu zpravidla dostaneš platební kartu."
      },
      "tip": "Stáhni si kartu do mobilu nebo chytrých hodinek a nemusíš ani vyndavat peněženku z batohu.",
      "link": "manuál Peníze - oddíl bankovní služby",
      "plan": "Zjisti si podmínky založení bankovního účtu a zkus požádat dospěláky, zda by ti s tím nepomohli."
    },
    {
      "category": "Peníze",
      "question": "Spoříš si něco?",
      "answers": {
        "ano": "Pochvala za to, že myslíš na svoji budoucnost.",
        "ne": "Je super odkládat si pravidelně alespoň malé finanční částky na stranu – spořit si je. Peníze se ti pak mohou hodit, když si chceš pořídit něco dražšího nebo tě zastihne nějaký nečekaný finanční výdaj. Je možné ukládat si je doma do prasátka nebo mít třeba spořicí účet v bance, kde se peníze zhodnocují."
      },
      "tip": "Když si každý měsíc dáš na stranu 200 korun, za rok je to 2400 korun a s tím už se dá ledacos podniknout.",
      "link": "manuál Peníze - oddíl spoření",
      "plan": "Vymysli si svůj spořicí plán – kolik peněz si budeš pravidelně odkládat stranou. Budeš spořit týdně, nebo měsíčně? Stačí malá částka. Spoř si podle plánu."
    }
]

const bydleni = [
    {
      "category": "Bydlení",
      "question": "Víš, jak, s kým a kde chceš bydlet po tvých 18. narozeninách?",
      "answers": {
        "ano": "Fosterův tip: Se samostatným bydlením nemusíš spěchat. Ideální je si ho zařídit, když vyděláváš dostatek peněz, abys zaplatil/a všechny potřebné výdaje.",
        "ne": "Téma bydlení je důležité promýšlet už dopředu. Pokud bys chtěl/a bydlet samostatně, je potřeba vyřídit spoustu věcí a to zabere čas."
      },
      "tip": "Se samostatným bydlením nemusíš spěchat. Ideální je si ho zařídit, když vyděláváš dostatek peněz, abys zaplatil/a všechny potřebné výdaje.",
      "link": "manuál Bydlení",
      "plan": "Sepiš si, jak si představuješ své bydlení v budoucnosti. Co potřebuješ pro jeho zajištění?"
    },
    {
      "category": "Bydlení",
      "question": "Chceš i poté, co ti bude osmnáct, bydlet ve společné domácnosti s pěstouny?",
      "answers": {
        "ano": "Fosterův tip: Vše si dopředu pořádně promysli a připrav. Nikdo nechce skončit na ulici.",
        "ne": "Jestli nechceš nebo nemůžeš zůstat v domácnosti pěstounů, až ti bude 18, je potřeba hledat samostatné bydlení. Můžeš si najít nájemní byt, spolubydlení, ubytovnu, azylový dům, dům na půli cesty. Jestli studuješ, využij internát nebo vysokoškolskou kolej."
      },
      "tip": "Vše si dopředu pořádně promysli a připrav. Nikdo nechce skončit na ulici.",
      "link": "manuál Bydlení",
      "plan": "Začni se aktivně zajímat o nabídku bydlení v lokalitě, kde chceš žít – procházej inzeráty, nabídky realitních kanceláří, srovnávej ceny, vybavení, velikost bytů. Sepiš si, co od bydlení očekáváš."
    },
    {
      "category": "Bydlení",
      "question": "Znáš možnosti podporovaného bydlení?",
      "answers": {
        "ano": "Fosterův tip: Krizový tip: Dům na půli cesty je určený přímo mladým lidem z dětských domovů nebo pěstounské péče.",
        "ne": "Pokud by ses ocitl/a v krizové situaci, kdy nebudeš mít střechu nad hlavou, je možné využít nějakou formu podporovaného bydlení, např. dům na půli cesty, sociální a startovací byty, azylové domy apod. Informace najdeš na internetu nebo oslov sociálního pracovníka."
      },
      "tip": "Krizový tip: Dům na půli cesty je určený přímo mladým lidem z dětských domovů nebo pěstounské péče.",
      "link": "manuál Bydlení - podporované bydlení",
      "plan": "Vyhledej si na internetu možnosti podporovaného bydlení ve tvé lokalitě. Je dobré mít krizový plán i v okamžiku, kdy se zdá, že nebude potřeba."
    },
    {
      "category": "Bydlení",
      "question": "Máš představu, kolik měsíčně stojí samostatné bydlení?",
      "answers": {
        "ano": "Fosterův tip: Dobře zvaž, kolik bys do bydlení mohl/a každý měsíc investovat, aby ti také něco zbylo.",
        "ne": "Ceny bydlení se velmi liší podle místa (město, městká část, obec), kde byty jsou, podle velikosti, vybavení apod. Přehled si uděláš, když na internetu projdeš nabídky pár realitních kanceláří. Všímej si, jestli jsou v ceně zahrnuté poplatky za energie, nebo se připočítávají zvlášť."
      },
      "tip": "Dobře zvaž, kolik bys do bydlení mohl/a každý měsíc investovat, aby ti také něco zbylo.",
      "link": "manuál Bydlení",
      "plan": "Udělej si takový test: Stanov si místo, velikost bytu, požadované vybavení a projdi nabídky realitních kanceláří. Kolik tebou vybrané bydlení stojí? Měl/a bys na to ho zaplatit?"
    }
]

const aboutMe = [
    {
      "category": "Kdo jsem já",
      "question": "Máš kolem sebe lidi, kterým věříš?",
      "answers": {
        "ano": "Tak si je hýčkej a buď za ně rád/a.",
        "ne": "Pokud má člověk pocit, že lidem kolem sebe nemůže věřit, je to náročná situace. Můžeš zkusit najít si přátele ve škole, při aktivitách ve volném čase. Každý kolem sebe nemusí mít hromadu kamarádů, ale je potřeba vědět, na koho se obrátit, když ti nebude dobře."
      },
      "tip": "Při seznamování na internetu vždycky dávej pozor. Neposílej fotky, podrobné informace o sobě a tak.",
      "link": "manuál Kdo jsem já",
      "plan": "Udělej si seznam lidí ze svého okolí a vytipuj ty, ke kterým máš nejblíže a na které by ses obrátil/a, kdybys potřeboval/a pomoc."
    },
    {
      "category": "Kdo jsem já",
      "question": "Znáš své silné a slabé stránky?",
      "answers": {
        "ano": "Super. Je dobré vědět, v čem jsou tvoje silné a slabé stránky.",
        "ne": "Je důležité vědět, v čem je člověk dobrý a co mu naopak moc nejde. Můžeš si udělat nějaký osobnostní test. Vyptej se kamarádů, dospěláků, učitelů, trenérů apod., v čem vnímají tvoje silné a slabší stránky."
      },
      "tip": "Měj rád i své slabší stránky, díky nim se můžeš posouvat stále dál. A navíc – nikdo není dokonalý.",
      "link": "manuál Kdo jsem já",
      "plan": "Sepiš si na papír, do počítače nebo mobilu své silné a slabé stránky. Vyptej se svého okolí. Napiš si, v čem ti silné stránky pomáhají a jak se dá pracovat na slabších stránkách."
    },
    {
      "category": "Kdo jsem já",
      "question": "Máš představu, jak by měl v budoucnosti vypadat tvůj život?",
      "answers": {
        "ano": "Fosterův tip: Ani mladý Foster netušil, jak bude žít velký dospělý Foster.",
        "ne": "To nevadí, málokdo přesně ví, jak by měl vypadat jeho život v budoucnosti. Ale můžeš o tom minimálně zkusit přemýšlet. Zajištěné bys měl/a mít praktické stránky života – bydlení, peníze, práce aj."
      },
      "tip": "Ani mladý Foster netušil, jak bude žít velký dospělý Foster.",
      "link": "manuál Kdo jsem já",
      "plan": "Pro plánování budoucnosti může dobře sloužit 'nástěnka vizí'. Na internetu nebo v časopisech najdi obrázky, inspirační citáty ale i tvé texty, které bys rád/a, aby jednou vystihovaly tvůj život a to, čeho chceš dosáhnout. Můžou to být obrázky party přátel, sportu, míst, kam se chceš podívat, rodiny, kterou bys chtěl/a mít, domu, auta, umění... no zkátka cokoliv. Vše si buď vytiskni, nalep a pověs někam, kde na nástěnku pravidelně uvidíš, nebo si vytvoř třeba tapetu do počítače nebo telefonu. Tak budeš mít svůj vysněný život pořád na očích. A nezapomeň nástěnku pravidelně aktualizovat."
    },
    {
      "category": "Kdo jsem já",
      "question": "Je ti příjemné komunikovat s ostatními lidmi?",
      "answers": {
        "ano": "Fosterův tip: Je potřeba umět mluvit s lidmi tváří v tvář (face to face). Všechno se nedá napsat přes mobil.",
        "ne": "Bojíš se, nevíš co říct, je ti nepříjemné mluvit s ostatními lidmi? Tento pocit mívá poměrně dost mladých lidí. Komunikace se dá naučit, stejně jako pravidla společenského chování. Můžeš oslovit pracovníka/pracovnici doprovázející organizace, najít si kouče, terapeuta..."
      },
      "tip": "Je potřeba umět mluvit s lidmi tváří v tvář (face to face). Všechno se nedá napsat přes mobil.",
      "link": "manuál Kdo jsem já",
      "plan": "Udělej si přehled situací, ve kterých se ti s ostatními špatně komunikuje. Zkus si je nacvičit třeba s dospělákem, kamarádem, sociální pracovnicí, koučem…"
    },
    {
      "category": "Kdo jsem já",
      "question": "Dokážeš si říct o pomoc, když ji potřebuješ?",
      "answers": {
        "ano": "Fosterův tip: Uleví se ti, už když o svém problému někomu řekneš.",
        "ne": "Člověk se vnímá jako silný, když si řeší své problémy sám. Ne vždy to ale musí být pravda. Je v pořádku říct si o pomoc. A lidé ve tvém okolí ti určitě rádi pomohou. Obrať se na kamarády, dospěláky, doprovázejícího pracovníka / doprovázející pracovnici. Nebo požádej o pomoc při hledání odborné pomoci."
      },
      "tip": "Uleví se ti, už když o svém problému někomu řekneš.",
      "link": "manuál Kdo jsem já",
      "plan": "Sepiš si, co ti v poslední době dělalo starosti a kdo ti s tím pomohl. Sepiš si, co ti v poslední době udělalo radost a komu jsi to řekl/a."
    }
]

export const completeTipsData = {...{...penize, ...bydleni, ...skolaAPrace, ...pestounskaPece, ...aboutMe}};

export const tipsCategories = [
    {
        name: "Peníze",
        id: "money",
        icon: <CoinsIcon />,
        tips: penize
    },
    {
        name: "Bydlení",
        id: "housing",
        icon: <HouseIcon />,
        tips: bydleni
    },
    {
        name: "Škola a práce",
        id: "school",
        icon: <SchoolIcon />,
        tips: skolaAPrace
    },
    {
        name: "Pěstounská péče",
        id: "fosterCare",
        icon: <BabyIcon />,
        tips: pestounskaPece
    },
    {
        name: "Kdo jsem já",
        id: "aboutMe",
        icon: <UserIcon />,
        tips: aboutMe    
    }
]