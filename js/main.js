import { vidurkis } from "./components/vidurkis/vidurkis.js";
import { kiekis } from "./components/skaiciuKiekis/skaiciuKiekis.js";
import { duomenys } from "../js/data/data.js";

const kiekis1 = kiekis(duomenys) 
const ats = vidurkis();

console.log(`Is pateiktu ${kiekis1} skaiciu, vidurkis gaunasi: ${ats}.`);

const tekstas = `Is pateiktu ${kiekis1} skaiciu, vidurkis gaunasi: ${ats}.`;

const h1DOM = document.querySelector('h1');

h1DOM.innerText = tekstas;










