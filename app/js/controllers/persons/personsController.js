
(() => {
    'use strict'

    let personsModule = angular.module("mainApp");

    personsModule.controller('personsController', function(localStorage){
        let vm = this;
        vm.c = 'this is my test result';

        let setDefaults = () => {
            localStorage = new localStorage("individual");
            loadData();
            vm.initializeindividual();
        }

        let loadData = () => {
            loadHeaders();
            loadpersons();            
        }

        let loadHeaders = () => {
            vm.headers = localStorage.loadHeaders();
        }

        let loadpersons = () => {
            vm.persons = localStorage.loadData();
        }

        vm.initializeindividual = () => {
            vm.individual = {};
        }


        vm.saveindividual = () => {
            if (vm.individual.name && vm.individual.lastname && vm.individual.age ) {
                if (vm.individual.id) {
                    localStorage.update(vm.person);
                } else {
                    vm.individual.id = Math.floor(Math.random() * 100) + 1;
                    vm.persons.push(vm.individual);
                }
                setDefaults();
                vm.initializeindividual();  
            }
        }


        Math.floor(Math.random() * 100) + 1

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