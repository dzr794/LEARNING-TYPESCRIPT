"use strict";
(function () {
    var myCustomVariable = 'Jorge';
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 5;
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
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
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=union-types.js.map