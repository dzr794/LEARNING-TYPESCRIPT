(()=>{
  type Avenger = {
    name: string;
    weapon: string;
  }

  const ironman:Avenger = {
    name: "Ironman",
    weapon: "Armorsuit"
  }

  const captainAmerica:Avenger = {
    name: "Capi",
    weapon: "Escudote"
  }

  const thor:Avenger = {
    name: "Thor",
    weapon: "Mjolnir"
  }

  const avengers: Avenger[] = [ironman, captainAmerica, thor];

  for (const avenger of avengers) {
    console.log(avenger);
    
  }
})()