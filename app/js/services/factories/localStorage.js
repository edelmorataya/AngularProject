(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.factory("localStorage", function (){

        let loadData = () => {
            vm.ptabHeaders = JSON.parse (localStorage.getItem("tab-headers"));
            vm.persons = JSON.parse (localStorage.getItem("persons"));

            if(!vm.ptabHeaders) {
            vm.ptabHeaders= ["Id", "Nombre", "Costo", "Proveedor", "No. Lote", "Fecha Cad"];
            localStorage.setItem ("tab-headers", JSON.stringify(vm.ptabHeaders));
            }
            if (!vm.persons) {
                vm.persons = [
                    {}
                ];
            vm.persons.forEach (individual => individual.id = getRandomId());
            saveData();
            }
        }
        loadData();
    });
})();