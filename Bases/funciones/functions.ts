(()=>{
  const hero = `Jorge el curioso`;

  function getHeroName():string {
    return hero;
  }

  const activateBatiSignal = ():string => {
    return "Batiseñal activada!";
  }

  console.log(typeof activateBatiSignal);

  const heroName = getHeroName();
  
})()