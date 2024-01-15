import { Pokemon } from "./classes/Pokemon";

const charmander = new Pokemon('charmander');

// ! No puedo extender este objeto debido a el decorador que cree llamado 'bloquearPrototipo'
// // (Pokemon.prototype as any).custom = 'jojojo';

charmander.guardarEnDB(10);

console.log(charmander);

