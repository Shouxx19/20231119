/*
TYPESCRIPT

- Keszits alprogramot, ami....
    - Eldonti, hogy a parameterul kapott szamok tombben van e negativ szam
    Egy parameterul kapott sugarbol megallapitja a kor keruletet es teruletet
            - Tuplet alkalmazz
            - Kerulet: 2 * sugar * PI
            - Terulet: sugar * sugar * PI

- Keszits interfacet Auto neven
    - Gyarto (szoveg)
    - Tipus  (szoveg)
    - Hengerurtartalom (szam)
    - BenzinesE (logikai)
*/
function VanENegativ(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    return i < szamok.length;
}
function KorKerTer(r) {
    var ker = 2 * r * Math.PI;
    var ter = r * r * Math.PI;
    return [ker, ter];
}
console.log(VanENegativ([5, 12, 0, 23, -1, 54]));
console.log(VanENegativ([5, 12, 0, 23, 54]));
console.log(KorKerTer(3));
/*
-Keszits publikus GitHub repositorit a sajat felhasznaloi fiokodban
-Inditsd el a Git BasH-t, es a jelenlegi TS projektedben inicializalj gitet
-A lokalis repo-t kosd ossze az online repoddal
-Toltsd fel a jelenlegi allapotot a githubra

TS!!
-Keszits alprogramot, ami kivalasztja egy auto tombbol a legkisebb ccm autot
-Keszits alprogramot, ami megadja a paramtereul kapott auto tombbol a benzinesek db szamat
- A valtoztatasokat toltsd fel a github repodba.
*/
function MinAuto(autok) {
    var minAuto = autok[0];
    for (var i = 1; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < minAuto.hengerurtartalom) {
            minAuto = autok[i];
        }
    }
    return minAuto;
}
function BenzinesDb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE /*== true*/) {
            db++;
        }
    }
    return db;
}
var a1 = {
    gyarto: "Opel",
    tipus: "Corsa",
    hengerurtartalom: 1200,
    benzinesE: true
};
var a2 = {
    gyarto: "Volkswagen",
    tipus: "Polo",
    hengerurtartalom: 1400,
    benzinesE: false
};
var a3 = {
    gyarto: "Skoda",
    tipus: "Octavia",
    hengerurtartalom: 1600,
    benzinesE: true
};
var autok = [a1, a2, a3];
console.log(MinAuto(autok));
console.log(BenzinesDb(autok));
