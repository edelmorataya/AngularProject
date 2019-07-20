
(() => {
    'use strict'

    let personsModule = angular.module("mainApp");

    personsModule.controller('personsController', function(localStorage){
        let vm = this;
        vm.c = 'this is my test result';


        let setDefaults = () => {
            loadData();
            vm.iniindividual();
            vm.entService = new entService ('individual')
            vm.entService.save(object);

        }
        
        let loadData = () => {
            vm.ptabHeaders = JSON.parse (localStorage.getItem("tab-headers"));
            vm.persons = JSON.parse (localStorage.getItem("persons"));

            if(!vm.ptabHeaders) {
            vm.ptabHeaders= ["Name", "Lastname", "Age"];
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
        vm.iniindividual = () => {
            vm.individual = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("persons", JSON.stringify(vm.persons));
        }


        vm.saveindividual = () => {
            if (vm.individual.name && vm.individual.lastname && vm.individual.age ) {
                if (vm.individual.id) {
                    vm.persons.forEach(individual => { if (individual.id == vm.individual.id) individual = vm.individual; });
                } else {
                    vm.individual.id = getRandomId();
                    vm.persons.push(vm.individual);
                }
                saveData();
                vm.iniindividual();    
            }
        }

        vm.modifyindividual = (individual) => {
            vm.individual = individual;
         }

        vm.deleteindividual = (index) => {
            vm.persons.splice(index, 1);
            saveData();
        }

        setDefaults();

    });

    

})();