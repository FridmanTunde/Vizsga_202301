function osszesOszto(szam) {
    var osszesSzam = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osszesSzam.push(i);
        }
    }
    return osszesSzam;
}
function parosDarab(szamok) {
    var parosokDb = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            parosokDb++;
        }
    }
    return parosokDb;
}
