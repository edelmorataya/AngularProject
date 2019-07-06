
(() => {
    'use strict'

    let peopleModule = angular.module("mainApp");

    peopleModule.controller('peopleController', function(){
        let vm = this;
        vm.c = 'this is my test result';

        let setDefaults = () => {
            loadData();
            vm.iniperson();
        }
        
        let loadData = () => {
            vm.ptabHeaders = JSON.parse (localStorage.getItem("tab-headers"));
            vm.people = JSON.parse (localStorage.getItem("people"));

            if(!vm.ptabHeaders) {
            vm.ptabHeaders= ["Id", "Nombre", "Costo", "Proveedor", "No. Lote", "Fecha Cad"];
            localStorage.setItem ("tab-headers", JSON.stringify(vm.ptabHeaders));
            }
            if (!vm.people) {
                vm.people = [
                    {}
                ];
            vm.people.forEach (person => person.id = getRandomId());
            saveData();

            }
        }
        vm.iniperson = () => {
            vm.person = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("people", JSON.stringify(vm.people));
        }


        vm.saveperson = () => {
            if (vm.person.name && vm.person.gender && vm.person.age ) {
                if (vm.person.id) {
                    vm.people.forEach(person => { if (person.id == vm.person.id) person = vm.person; });
                } else {
                    vm.person.id = getRandomId();
                    vm.people.push(vm.person);
                }
                saveData();
                vm.iniperson();    
            }
        }

        vm.modifyperson = (person) => {
            vm.person = person;
         }

        vm.deleteperson = (index) => {
            vm.people.splice(index, 1);
            saveData();
        }

        setDefaults();

    });

    

})();