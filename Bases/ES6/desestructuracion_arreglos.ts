(()=>{
  
  // declaro un primer arreglo de prueba
  const stringsArray: string[] = ['a', 'b', 'jorge el curioso']

  // desestructuro el arreglo en multiples variables
  // * Al desestructurar un arreglo es importante recordar que se usan los brackets []
  // debo de poner la cantidad exacta de indices del arreglo
  const [a,,jorge] = stringsArray;

  // ahora puedo llamarlos como variables independientes
  //? console.log({jorge, a});

  // Puedo tambien desestructurar tuplas
  const laTupla : [string, number, boolean] = ['abc', 123, true];

  // puedo conocer el tipo de dato exacto al poner el cursor sobre la desestructuracion en variables.
  const [abc, numero, sisa] = laTupla;
  //? console.log({abc,numero,sisa});

  
})()