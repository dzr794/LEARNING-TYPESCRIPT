(()=>{
  let avengers:number = 10;
  const villians:number = 20;

  if (avengers < villians) {
    console.log("Nos jodimos");
  }else{
    console.log("estamos bien");
  }

  avengers = Number("55A");
  console.log({avengers});
  
})()