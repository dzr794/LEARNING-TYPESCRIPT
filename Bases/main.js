"use strict";
(() => {
    class Avenger {
        static getClassName() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger('Antman', 'Capi', 'Scorr');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant = true, _debilidad = false, _afinidad = 'michis') {
            super(name, realName);
            this.isMutant = isMutant;
            this._debilidad = _debilidad;
            this._afinidad = _afinidad;
        }
        get debilidad() {
            return this._debilidad;
        }
        set debilidad(d) {
            this._debilidad = d;
        }
        get afinidad() {
            return this._afinidad;
        }
        set afinidad(a) {
            this._afinidad = a;
        }
        getRealNameFromXmen() {
            return this.getFullName();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine.debilidad);
    wolverine.debilidad = true;
    console.log(wolverine.debilidad);
    console.log(wolverine.afinidad);
    wolverine.afinidad = 'juegos';
    console.log(wolverine.afinidad);
})();
//# sourceMappingURL=main.js.map