(()=>{
  interface Xmen{
    name:string;
    realName:string;
    mutantPower( id: number ):number;
  }

  interface Human{
    age:number
  }

  class Mutant implements Xmen,Human {
    public age:number;
    public name: string;
    public realName: string;

    mutantPower(id: number): number {
      return 1;
    }
    
    constructor(
      age:number,
      name:string,
      realName:string
    ){
      this.age = age;
      this.name = name;
      this.realName = realName;
    }
  }
})()