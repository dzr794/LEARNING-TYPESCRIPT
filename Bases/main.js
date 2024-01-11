"use strict";
var Validations;
(function (Validations) {
    Validations.validateTxt = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()));
    };
})(Validations || (Validations = {}));
console.log(Validations);
console.log(Validations.validateTxt('fer'));
console.log(Validations.validateTxt('fernaflo'));
//# sourceMappingURL=main.js.map