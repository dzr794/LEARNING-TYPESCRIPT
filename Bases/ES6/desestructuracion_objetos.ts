(()=>{
  
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.65132
  }  

  //* Desestructuración tradicional
  // const { poder, vision } = avengers;
  // console.log( poder.toFixed(2), vision.toUpperCase() );
  
  // * Puedo desestructurar el objeto de tipo Avengers dentro de los parametros de la función porque ya se especifico el tipo de dato.
  const printAvengersPower = ( {poder, ...resto}:Avengers ) => {
    
    console.log({poder});

    // puedo obtener ayudas de el resto de propiedades del objeto ingresado
    console.log(resto.activo);
    
  }

  //? Comento para que no estorbe
  // printAvengersPower(avengers);


})()