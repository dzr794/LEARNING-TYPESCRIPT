(()=>{
  let flash: { name:string, age?:number, powers:string[], getName?: () => string} = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  }

  // * No es posible agregar nuevos atributos al tipo de objeto inicial.
  flash = {
    name: 'Clark Kent',
    // age: 30,
    powers: ['Súper fuerza', 'Rayos laser'],
    getName(){
      return this.name;
    }
  }

  console.log( flash.getName?.() );
  
})()