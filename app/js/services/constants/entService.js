(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.constant("entService", {
        save: (mv) => {
            if (vm.mv.name && vm.mv.lastname && vm.mv.age ) {
                if (vm.mv.id) {
                    vm.persons.forEach(mv => { if (mv.id == vm.mv.id) a = vm.mv; });
                } else {
                    vm.a.id = getRandomId();
                    vm.persons.push(vm.mv);
                }
                saveData();
                vm.iniindividual();    
            }
        }
    });
   
})();