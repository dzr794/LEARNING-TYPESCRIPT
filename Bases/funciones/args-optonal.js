"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        console.log({ firstName: firstName });
        console.log({ lastName: lastName });
        if (firstName === undefined) {
            throw new Error("Undefined param in 'fullName'");
        }
        return "".concat(firstName, " ").concat(lastName || "-----");
    };
    var name = fullName('Tony', 'Stark');
    var noName;
    var name2 = fullName('Tony', noName);
    console.log({ name: name });
    console.log({ name2: name2 });
})();
