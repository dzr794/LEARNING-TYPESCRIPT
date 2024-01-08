"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const stringsArray = ['a', 'b', 'jorge el curioso'];
    const [a, , jorge] = stringsArray;
    const laTupla = ['abc', 123, true];
    const [abc, numero, sisa] = laTupla;
})();
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.65132
    };
    const printAvengersPower = (_a) => {
        var { poder } = _a, resto = __rest(_a, ["poder"]);
        console.log({ poder });
        console.log(resto.activo);
    };
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit"
    };
    const captainAmerica = {
        name: "Capi",
        weapon: "Escudote"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const nombre = 'fernando';
    const getName = () => {
        console.log("Función creada con CONST para evitar que se sobre escriba.");
    };
})();
//# sourceMappingURL=main.js.map