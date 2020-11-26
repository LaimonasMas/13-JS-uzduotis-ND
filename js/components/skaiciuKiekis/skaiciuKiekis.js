import { duomenys } from "../../data/data.js";

function kiekis(skaiciuSarasas) {
    let skaicius = 0;
    const size = skaiciuSarasas.length;
    for (let i=0; i<size; i++) {
        skaicius++;
    }
    return skaicius;
}
kiekis(duomenys);

export { kiekis }