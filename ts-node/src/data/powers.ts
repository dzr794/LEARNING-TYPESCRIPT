export interface Power {
  id: number;
  desc: string;
}

const powers:Power[] = [
  {
    id:1,
    desc: "Money money",
  },
  {
    id:2,
    desc: "Drugs",
  },
];

export const singlePower:Power = {
  id:3,
  desc: 'Riddles',
}

//* Al parecer solo se puede enviar una unica variable en la exportacion por defecto
export default powers;