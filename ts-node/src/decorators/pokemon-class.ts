function printToConsole( constructor: Function ){
  console.log(constructor);
  
}

// El decorador se ejecuta solo UNA VEZ (al momento de la transpilación del codigo)
@printToConsole
export class Pokemon{
  public publicAPI: string = 'https://pokeapi.co';

  constructor(
    public name: string,
  ){}
}