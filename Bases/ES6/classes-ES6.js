(()=>{
  
  class Avenger {

    constructor(name='No Name', power = 0){
      //? las propiedades puedes salir de la nada en JS
      this.name = name;
      this.power = power;
    }

  }

  class FlyingAvenger extends Avenger {
    constructor(name, power){
      //? ya que se extiende de otra clase es necesario llamar a super para pasar los parametros del constructor de la clase que extiende
      super(name, power);
      this.fly = true;
    }
  }

  let hulk = new Avenger('Hulk', 9001);
  let falcon = new FlyingAvenger('Falcon', 50);

  console.log({ hulk });
  console.log({ falcon });

})()