"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta a salvo"; };
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(2, 3));
    myFunction = greet;
    console.log(myFunction('David'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=tipo-function.js.map