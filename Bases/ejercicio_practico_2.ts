(()=>{
  
  // Funciones Básicas
  const sumar = ( a:number, b:number ):number =>{
    return a + b;
  }
  console.log(sumar(5,6));
  
  
  const contar = ( heroes:string[] ):number => {
    return heroes.length;
  }
  const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);
  
  //Parametros por defecto
  const llamarBatman = ( llamar:boolean = true ):void => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  
  llamarBatman();
  
  // Rest?
  const unirheroes = ( ...personas:string[] ):string => {
    return personas.join(", ");
  }
  
  console.log(unirheroes("batman", "superman", "spiderman"));
  
  
  // Tipo funcion
  const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:[] ):void => {};
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: (n:number, s:string, b:boolean, a:[]) => void;
  noHaceNadaTampoco = noHaceNada;

})()
