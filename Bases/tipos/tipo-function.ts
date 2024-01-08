(()=>{
  
  const addNumbers = ( a:number, b:number):number => a+b;
  const greet = (name:string):string => `Hola ${name}`;
  const saveTheWorld = ():string => `El mundo esta a salvo`;

  let myFunction: ( a?:(number|string), ...restArgs:(number | string)[] ) => (number | string);

  //! Esta aplicación muestra un error porque 'myFunction' es de tipo "Function" y no "number"
  //// myFunction = 10;
  //// console.log(myFunction);

  myFunction = addNumbers;
  console.log( myFunction(2,3) );
  
  myFunction = greet;
  console.log(myFunction('David'));

  myFunction = saveTheWorld;
  console.log(myFunction());
  
  
  

})()