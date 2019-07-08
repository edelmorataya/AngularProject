
(() => {
    'use strict'

    let hobbiesModule = angular.module("mainApp");

    hobbiesModule.controller('hobbiesController', function(){
        let vm = this;
        vm.c = 'this is my test result';

        let setDefaults = () => {
            loadData();
            vm.inihobbie();
        }
        
        let loadData = () => {
            vm.ptabHeaders = JSON.parse (localStorage.getItem("tab-headers"));
            vm.hobbies = JSON.parse (localStorage.getItem("hobbies"));

            if(!vm.ptabHeaders) {
            vm.ptabHeaders= ["Name", "Description"];
            localStorage.setItem ("tab-headers", JSON.stringify(vm.ptabHeaders));
            }
            if (!vm.hobbies) {
                vm.hobbies = [
                    {}
                ];
            vm.hobbies.forEach (hobbie => hobbie.id = getRandomId());
            saveData();

            }
        }
        vm.inihobbie = () => {
            vm.hobbie = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("hobbies", JSON.stringify(vm.hobbies));
        }


        vm.savehobbie = () => {
            if (vm.hobbie.name && vm.hobbie.description ) {
                if (vm.hobbie.id) {
                    vm.hobbies.forEach(hobbie => { if (hobbie.id == vm.hobbie.id) hobbie = vm.hobbie; });
                } else {
                    vm.hobbie.id = getRandomId();
                    vm.hobbies.push(vm.hobbie);
                }
                saveData();
                vm.inihobbie();    
            }
        }

        vm.modifyhobbie = (hobbie) => {
            vm.hobbie = hobbie;
         }

        vm.deletehobbie = (index) => {
            vm.hobbies.splice(index, 1);
            saveData();
        }

        setDefaults();

    });

    

})();