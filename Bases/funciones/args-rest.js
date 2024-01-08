"use strict";
(function () {
    // usamos el operador REST '...' el cual atrapa todos los otros parametros dentro de un array, en este caso array de strings
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(" "));
    };
    var superman = fullName('Klak', 'Joseph', 'Kent', "Carajo!!!");
    console.log({ superman: superman });
})();
