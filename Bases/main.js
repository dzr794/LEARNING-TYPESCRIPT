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
            console.log(`Constructor Avenger llamado`);
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant = true) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log(`Constructor de Xmen llamado`);
        }
        getRealNameFromXmen() {
            return this.getFullName();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine);
    console.log(wolverine.getRealNameFromXmen());
})();
//# sourceMappingURL=main.js.map