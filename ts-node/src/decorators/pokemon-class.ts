// definición del decorador
function printToConsole( constructor: Function ){
  console.log(constructor); 
}

// definicion de decorador como funcion de flecha
const printToConsoleConditional = ( print:boolean = false ):Function => {
  if (print) {
    return printToConsole;
  }else{
    return () => {}
  }
}

// El decorador se ejecuta solo UNA VEZ (al momento de la transpilación del codigo)
@printToConsoleConditional(true)
export class Pokemon{
  public publicAPI: string = 'https://pokeapi.co';

  constructor(
    public name: string,
  ){}
}