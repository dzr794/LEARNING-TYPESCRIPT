import { printObject, badGenericFunction, goodGenericFunction, genericFunctionArrow } from "./generics/generics";

// * test con funcion generica que retorna un void, no genera errores
// printObject(123);
// printObject( new Date() );
// printObject( {a:1, b:2, c:3} );
// printObject( [1,2,3,4,5] );
// printObject( 'Hola Mundo' );

// ? (alias) badGenericFunction(arg: any): any
console.log( badGenericFunction(1.1416).toFixed(2) );
// ! Estos 2 generarian un error que no es capaz de detectar Typescrip si no hago la funcion correctamente! (porque estoy retornando un 'any')
//// console.log( badGenericFunction('Holi').toFixed(2) );
//// console.log( badGenericFunction( new Date() ).toFixed(2) );

//? (alias) function goodGenericFunction<T>(arg: T): T
// * Ahora si me muestra correctamente las ayudas de cada tipo, y detecta los errores antes de transpilar
console.log(goodGenericFunction(123).toFixed(2));
console.log( genericFunctionArrow('123').length ); 

console.log( goodGenericFunction( new Date() ).getDay() );
