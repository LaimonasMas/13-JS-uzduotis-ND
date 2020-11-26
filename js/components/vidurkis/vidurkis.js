import { sum } from "../suma/suma.js";
import { kiekis } from "../skaiciuKiekis/skaiciuKiekis.js";
import { duomenys } from "../../data/data.js";

function vidurkis(atsakymas) {
    const ats = sum(duomenys) / kiekis(duomenys);
    return ats;
    }


export { vidurkis }