(()=>{
  // las funciones que tienen un tipado de "NEVER" siempre terminan en error
  // en este caso se usa un tipado unido para poder retornad tanto "never" como "number"
  const error = (message:string):(never|number) => {
    if (false) {
      throw new Error(message);
    }

    return 1;
  }

  error('Aiuda!');
})()