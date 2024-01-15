import { bloquearPrototipo, printToConsoleConditional, readOnly, validRange } from "../decorators/decoradores";


// El decorador se ejecuta solo UNA VEZ (al momento de la transpilación del codigo)
@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon{
  @readOnly()
  public publicAPI: string = 'https://pokeapi.co';

  constructor(
    public name: string,
  ){}

  // se agrego un decorador que permite validar el rango de la variable (en este caso una única variable)
  @validRange(1,150)
  public guardarEnDB( id:number ){
    console.log(`Pokemon con ID:${id} guardado en la DB.`);
    
  }
}