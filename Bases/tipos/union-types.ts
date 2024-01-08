(()=>{
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  }

  let myCustomVariable: (string | number | Hero) = 'Jorge';
  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);

  myCustomVariable = 5;
  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);
  
  myCustomVariable = {
    name: "David",
    age: 30,
    powers: [5],
    getName() {
      if ('name' in this) {
        return this.name;
      }
      throw new Error('this no es del tipo esperado.')
    },
  }
  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);
  
  
})()