(()=>{
  class Apocalipsis{

    static instance:Apocalipsis;

    private constructor(
      private _name:string
    ){}

    static callApocalipsis():Apocalipsis{
      if ( !Apocalipsis.instance ) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis. Y soy ÚNICO!')
      }

      return Apocalipsis.instance;
    }

    set name( n:string ){
      this._name = n;
    }

    
    get name() : string {
      return this._name;
    }
    
  }

  // ! Este tipo de llamados no funciona porque ahora el constructor es privado
  // const apocalipsis1 = new Apocalipsis('Soy apocalipsis1... soy el unico');
  // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2... soy el unico');
  // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3... soy el unico');

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  // console.log(apocalipsis1, apocalipsis2, apocalipsis3);

  apocalipsis2.name = 'David, el único!';
  // console.log(apocalipsis1, apocalipsis2, apocalipsis3);
  
  // console.log(apocalipsis3.name);
  
})()