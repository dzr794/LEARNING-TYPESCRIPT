(()=>{
  
  class Avenger {
    // * no es necesario poner las propiedades aqui;
    // private name:string;
    // private team:string;
    // public realName?:string;
    static avgAge:number = 35;
    static getClassName():string{
      //? Esto retorna el nombre de la clase, NO la propiedad 'name' de una instancia
      return this.name;
    }

    // * En el trabajo es mas comun que se vea la inicializacion directamente en los parametros del constructor
    constructor(
      private name:string, 
      private team:string, 
      public realName?:string
    ){}

    public bio():string {
      return `${this.name} (${this.team})`;
    }
  }

  const antMan:Avenger = new Avenger('Antman', 'Capi', 'Scorr');
  // console.log({antMan});
  // console.log(Avenger.avgAge);
  // console.log(antMan.bio());
  // console.log(`${Avenger.name} = ${Avenger.getClassName()}`);
  
  
})()