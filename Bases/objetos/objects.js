"use strict";
(function () {
    var _a;
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    // * No es posible agregar nuevos atributos al tipo de objeto inicial.
    flash = {
        name: 'Clark Kent',
        // age: 30,
        powers: ['Súper fuerza', 'Rayos laser'],
        getName: function () {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
