"use strict";
(function () {
    var sumar = function (a, b) {
        return a + b;
    };
    console.log(sumar(5, 6));
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    console.log(unirheroes("batman", "superman", "spiderman"));
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
//# sourceMappingURL=ejercicio_practico_2.js.map