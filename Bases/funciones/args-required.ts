(()=>{
  
  const fullName = (firstName:string, lastName:string):(string|never) => {
    
    console.log({firstName});
    console.log({lastName});
    

    if (firstName === undefined || lastName === undefined) {
      throw new Error("Undefined param in 'fullName'");
    }
    return `${firstName} ${lastName}`;
    
  }

  const name = fullName('Tony', 'Stark');
  
  let noName:string;

  //! Esto da un error pero es uno personalizado, así que es aproposito
  // // const name2 = fullName('Tony', noName);

  console.log({name});
  
  
})()