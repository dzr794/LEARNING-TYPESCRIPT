// Crear interfaces
interface Automovil {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Automovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
}

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

interface reir{
  (g:Guason):void;
}


const reir:reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface Ciudadanos{
  nombre:string,
  edad:number,
  id:number,
}

interface poblacion{
  (ciudadanos:Ciudadanos[]):number;
}

const ciudadGotica:poblacion = ( ciudadanos:Ciudadanos[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Personas {
  nombre:string,
  edad:number,
  sexo:string,
  estadoCivil:string
  imprimirBio(): void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Personas {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;

  imprimirBio(): void {
    console.log("la descripción");
  }

  constructor(
    _nombre: string,
    _edad: number,
    _sexo: string,
    _estadoCivil: string,
  ){
    this.nombre = _nombre;
    this.edad = _edad;
    this.sexo = _sexo;
    this.estadoCivil = _estadoCivil;
  }
}