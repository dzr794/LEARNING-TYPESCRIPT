export const printObject = (arg:any):void => {
  console.log(arg);
}

//! Esta funcion es una mala practica!
export function badGenericFunction( arg:any ):any {
  return arg;
}

/* 
* La forma correcta es utlizando <T> para capturar el tipo de dato de entrara y poder conocer el dato de salida
* (la T puede ser cualquier nombre)
*/
export function goodGenericFunction<T>( arg:T ):T {
  return arg;
}

//* Esto es lo mismo de arriba pero escrito en forma de funcion flecha (mejor)
export const genericFunctionArrow = <T>(arg:T) => arg;