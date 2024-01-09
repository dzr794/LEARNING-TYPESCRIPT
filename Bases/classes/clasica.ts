(()=>{
  
  class Avenger {
    // * no es necesario poner las propiedades aqui;
    // private name:string;
    // private team:string;
    // public realName?:string;
    static avgAge:number = 35;

    // * En el trabajo es mas comun que se vea la inicializacion directamente en los parametros del constructor
    constructor(
      private name:string, 
      private team:string, 
      public realName?:string
    ){}
  }

  const antMan:Avenger = new Avenger('Antman', 'Capi', 'Scorr');
  console.log({antMan});
  console.log(Avenger.avgAge);
  
})()