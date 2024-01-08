(()=>{
  // usamos el operador REST '...' el cual atrapa todos los otros parametros dentro de un array, en este caso array de strings
  const fullName = (firstName:string, ...restArgs:string[] ):string => {
    return `${firstName} ${restArgs.join(" ")}`
  }

  const superman = fullName('Klak', 'Joseph', 'Kent', "Carajo!!!");

  console.log({superman});
  
})()