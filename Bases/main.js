"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger('Antman', 'Capi', 'Scorr');
    console.log({ antMan });
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map