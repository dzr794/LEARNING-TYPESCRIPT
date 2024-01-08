"use strict";
(function () {
    var myCustomVariable = 'Jorge';
    console.log(myCustomVariable);
    myCustomVariable = 5;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "David",
        age: 30,
        powers: [5],
        getName: function () {
            if ('name' in this) {
                return this.name;
            }
            throw new Error('this no es del tipo esperado.');
        },
    };
})();
