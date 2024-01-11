import  * as HeroFile from "./classes/Hero";
import elNombreNoImporta, {Power,singlePower} from './data/powers';

const hero = new HeroFile.Hero('SpiderMan', 500, 18);

console.log(hero);
console.log(HeroFile.miEdad);

// ya que se utilizo "export default" en el archivo ./data/powers, se puede hacer un llamado directamente con un alias y eso contendria la variable dentro del export default;
console.log(elNombreNoImporta);
console.log(singlePower);








