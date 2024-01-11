(()=>{
  
  abstract class Mutante {
    constructor(
      public name:string,
      public realName:string,
    ){}
  }

  class Xmen extends Mutante {
    public salvarMundo():void{
      console.log('Mundo Salvado!');
    }
  }
  class Villano extends Mutante {
    public conquistarMundo():void{
      console.warn('El mundo esta siendo conquistado!');
    }
  }

  const wolverine:Xmen = new Xmen('Wolverine', 'Logan');
  const magneto:Villano = new Villano('Magneto', 'Megan');
  
  // wolverine.salvarMundo();
  // magneto.conquistarMundo();
   const printName = (character:Mutante):void => {
    console.log(character.name);
   }

  //  printName(wolverine);
  //  printName(magneto);
  
})()