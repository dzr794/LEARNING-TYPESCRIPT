
import { genericFunctionArrow } from "../generics/generics"
/*
* Como tengo un index.ts en /interfaces puedo importarlos de forma agrupada con la carpeta 
* Este index.ts debe de exportar cada uno de los modulos que deseo importar en otros archivos
*/
import { Hero, Villano } from "../interfaces" 



const deadpool = {
  name: 'DeadPool',
  realName: 'Wade Wilson',
  dangerLevel: 130
}

console.log( genericFunctionArrow<Hero>( deadpool ).realName );
console.log( genericFunctionArrow<Villano>(deadpool).dangerLevel );


