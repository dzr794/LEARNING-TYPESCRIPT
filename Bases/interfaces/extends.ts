(()=>{
  
  interface Carro{
    llantas:number;
    modelo:string;
  }

  interface Volvo extends Carro{
    seguro:boolean;
  }

  let volvo:Volvo = {
    llantas:4,
    modelo:'X',
    seguro:false
  }

})()