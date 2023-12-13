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

interface Auto{
    gyarto:string;
    tipus:string;
    hengerurtartalom:number;
    benzinesE:boolean;
}

function VanENegativ(szamok:number[]):boolean{
    var i:number = 0;

    while(i < szamok.length && !(szamok[i] < 0)){
        i++;
    }

    return i < szamok.length; 
}

function KorKerTer(r:number):[number, number]{
    var ker:number = 2 * r * Math.PI;
    var ter:number = r * r * Math.PI;

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


