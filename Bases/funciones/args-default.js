"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        console.log({ firstName: firstName });
        console.log({ lastName: lastName });
        if (firstName === undefined) {
            throw new Error("Undefined param in 'fullName'");
        }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || "-----").toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || "-----");
        }
    };
    var name = fullName('Tony', 'Stark');
    var noName;
    var name2 = fullName('Tony', noName, true);
    console.log({ name: name });
    console.log({ name2: name2 });
})();
//# sourceMappingURL=args-default.js.map