(()=>{
  class Avenger {
    constructor(
      public name:string,
      public realName:string,
    ){
      console.log(`Constructor Avenger llamado`);
    }

    protected getFullName(){
      return `${this.name} ${this.realName}`; 
    }
  }

  class Xmen extends Avenger {
    constructor(
      name:string, 
      realName:string,
      public isMutant:boolean = true,
    ){
      super(name, realName);
      console.log(`Constructor de Xmen llamado`);
      
    }

    public getRealNameFromXmen():string{
      return this.getFullName();
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');

  console.log(wolverine);
  console.log(wolverine.getRealNameFromXmen());
  
})()