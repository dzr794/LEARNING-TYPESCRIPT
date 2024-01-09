"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            console.log('Mundo Salvado!');
        }
    }
    class Villano extends Mutante {
        conquistarMundo() {
            console.warn('El mundo esta siendo conquistado!');
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villano('Magneto', 'Megan');
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
    printName(magneto);
})();
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
})();
//# sourceMappingURL=main.js.map