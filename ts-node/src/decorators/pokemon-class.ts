// definición del decorador
function printToConsole( constructor: Function ){
  console.log(constructor); 
}

// definicion de decorador como funcion de flecha con condicionales para cambiar la funcionalidad del decorador
const printToConsoleConditional = ( print:boolean = false ):Function => {
  if (print) {
    return printToConsole;
  }else{
    return () => {}
  }
}

const bloquearPrototipo = (constructor:Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// El decorador se ejecuta solo UNA VEZ (al momento de la transpilación del codigo)
@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon{
  public publicAPI: string = 'https://pokeapi.co';

  constructor(
    public name: string,
  ){}
}