(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.factory("localStorage", function (entService){

        let entSer = function (a){
            this.loadData = () => {
                let data = JSON.parse(localStorage.getItem(a));
                if (!data){
                    return entService[a].staticData;
                }
                return data;
            }

            this.loadHeaders = () => {
                return entService[entName].headers;     
            }

            this.save = (ent) => {
                let ents = this.loadData();

                ents.sort ((x, z) => {
                    if (x.id < z.id)
                        return -1;
                    if (x.id > z.id)
                        return 1;
                    return 0;
                });

                let addId = ents[ents.length -1].id + 1;
                ent.id = addId;

                ents.push(ent);
                localStorage.setItem(entName, JSON.stringify(ents));

            }

            this.replace = (ents) => {
                localStorage.setItem(entName, JSON.stringify(ents));
            }

            this.update = (entUpdate) => {
                let ents = this.loadData();
                let index = ents.map(ent => ent.id).indexOf(entUpdate.id);

                if (index != -1){
                    ents[index] = entUpdate;
                }

                this.replace(ents);
            }

            this.delete = (index) => {
                let ents = this.loadData();
                ents.splice(index, 1);
                this.replace(ents);
            }
        };

        return entSer;
    });
})();