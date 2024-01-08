(()=>{
  
  const fullName = (firstName:string, lastName?:string, upper:boolean = false):(string|never) => {
    
    console.log({firstName});
    console.log({lastName});
    

    if (firstName === undefined) {
      throw new Error("Undefined param in 'fullName'");
    }

    if (upper) {
      return `${firstName} ${lastName || "-----"}`.toUpperCase();
    }else{
      return `${firstName} ${lastName || "-----"}`;
    }
    
  }

  const name = fullName('Tony', 'Stark');
  
  let noName:string;

  const name2 = fullName('Tony', noName, true);

  console.log({name});
  console.log({name2});
  
})()