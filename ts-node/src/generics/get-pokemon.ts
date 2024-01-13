import axios from "axios";

export const getPokemon = async( pokeId:number ) => {
  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);

  console.log(resp);

}