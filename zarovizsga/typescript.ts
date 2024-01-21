function osszesOszto(szam: number): number[] {
    const osszesSzam: number[] = [];

    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osszesSzam.push(i);
        }
    }

    return osszesSzam;
}

function parosDarab(szamok: number[]): number {
    const parosokDb: number = 0;

    for (let i: number = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            parosokDb++;
        }
    }
return parosokDb;

}