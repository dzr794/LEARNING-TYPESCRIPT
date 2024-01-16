# Ejemplo de como usar librerias que no son nativas de typescript con Typescript

lineas de consola importantes:

* `npm i --save-dev @types/express` para añadir las dependencias de desarrollo de tipado de express en typescritp
* `npm install express --save` para instalar express en el directorio actual
* `tsc --init` para generar el **tsconfig.json** basico
  (cambiar en el tsconfig.json el "outdir:" a "./dist")
* `tsc -w` para activar el **modo "watch" de typescript** y que se transpile solo al guardar
* `node index.js` o `node ./dist/index.js` para compilar la app de express y que le pueda ver en el navegador

el uso de axios ayuda mucho al momento de realizar las peticiones REST

[Axios (axios-http.com)](https://axios-http.com/)
