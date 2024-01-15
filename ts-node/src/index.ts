import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('charmander');

(Pokemon.prototype as any).custom = 'jojojo';

console.log(charmander);
