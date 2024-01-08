"use strict";
(function () {
    // las funciones que tienen un tipado de "NEVER" siempre terminan en error
    // en este caso se usa un tipado unido para poder retornad tanto "never" como "number"
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Aiuda!');
})();
//# sourceMappingURL=never.js.map