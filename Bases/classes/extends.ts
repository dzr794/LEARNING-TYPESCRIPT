(()=>{
  class Avenger {
    constructor(
      public name:string,
      public realName:string,
    ){
      // console.log(`Constructor Avenger llamado`);
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
      protected _debilidad:boolean = false,
      private _afinidad:string = 'michis',
    ){
      super(name, realName);
      // console.log(`Constructor de Xmen llamado`);
      
    }

    get debilidad():boolean{
      return this._debilidad;
    }

    set debilidad(d:boolean){
      this._debilidad = d;
    }

    get afinidad():string{
      return this._afinidad;
    }

    set afinidad(a:string){
      this._afinidad = a;
    }

    public getRealNameFromXmen():string{
      return this.getFullName();
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');

  //* Juego un poco con los getter y setter de parametros de privados y protegidos
  // console.log(wolverine.debilidad);
  // wolverine.debilidad = true;
  // console.log(wolverine.debilidad);

  // console.log(wolverine.afinidad);
  // wolverine.afinidad = 'juegos';
  // console.log(wolverine.afinidad);
  
  
  
  
  
})()