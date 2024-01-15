// definición del decorador
export function printToConsole( constructor: Function ){
  console.log(constructor); 
}

// definicion de decorador como funcion de flecha con condicionales para cambiar la funcionalidad del decorador
export const printToConsoleConditional = ( print:boolean = false ):Function => {
  if (print) {
    return printToConsole;
  }else{
    return () => {}
  }
}

// Este decorador evita que un Objeto sea extensible
export const bloquearPrototipo = (constructor:Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

export const readOnly = (readOnly:boolean = true):Function  => {
  // aqui no se usa descriptor, ya que ese es unico para METODOS (funciones)
  return (target:any, key:string) => {
    console.log({target, key});
    
    const descriptor:PropertyDescriptor = {
      get() {
        console.log(this);
        return this.value;
      },
      set(this, value)
      {
        Object.defineProperty(this, key, {
          value: value,
          writable: !readOnly,
          enumerable: false,
          
        })
      }
    };

    return descriptor;
  }
}

// decorador para validar que un parametro se encuentre entre los rangos validos
export const validRange = (min:number, max:number):Function => {
  return (target:any, propertyKey:string, descriptor: PropertyDescriptor) => {
    /*
    * Forma de obtener datos de la función que esta siendo decorada.
    ? console.log({target, propertyKey, descriptor});
    */

    // capturo el proceso original de la función que esta siendo decorada (ya que estamos a punt de sobre escribirla)
    const originalMethod = descriptor.value;

    // sobre escribiendo el comportamiento de la función decorada para realizar validaciones
    descriptor.value = (id:number) => {
      if (id < min || id > max) {
        return console.error(`El id debe de estar entre ${min} y ${max} (id ingresado:${id})`);
      }else{
        return originalMethod(id);
      }
    }
  }
}
