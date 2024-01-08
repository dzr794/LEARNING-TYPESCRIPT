(()=>{
  // strictNullCheck
  let nada:(boolean | undefined | null) = null;

  nada = undefined;
  nada = true;

  console.log(nada);
  
})()