(()=>{
  
  //! Hay que evitar el uso de var, ya que facilita la generación de errores.
  //// var NO_USAR_MAS = "DEJA DE USAR var!!!";

  // * usar en lo posible CONST
  const nombre:string = 'fernando';

  const getName = ():void => {
    console.log("Función creada con CONST para evitar que se sobre escriba.");
  }

  //? Declarar variables con 'let' unicamente, cuando estemos seguros de que van a cambiar.


})()