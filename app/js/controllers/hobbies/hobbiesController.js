
(() => {
    'use strict'

    let hobbiesModule = angular.module("mainApp");

    hobbiesModule.controller('hobbiesController', function(localStorage){
        let vm = this;
        vm.c = 'this is my test result';

        let setDefaults = () => {
            localStorage = new localStorage("hobbies")
            loadData();
            vm.inihobbie();
        }
        
        let loadData = () => {
            loadHeaders();
            loadhobbies();            
        }

        let loadHeaders = () => {
            vm.headers = localStorage.loadHeaders();
        }    

        let loadhobbies = () => {
            vm.hobbies = localStorage.loadData();
        }

        vm.inihobbie = () => {
            vm.hobbie = {};
        }

        vm.savehobbie = () => {
            if (vm.hobbie.name && vm.hobbie.description ) {
                if (vm.hobbie.id) {
                    localStorage.update(vm.hobbie);
                } else {
                    vm.hobbie.id = Math.floor(Math.random() * 100) + 1;
                    vm.hobbies.push(vm.hobbie);
                }
                setDefaults();
                vm.inihobbie();    
            }
        }

        vm.modifyhobbie = (hobbie) => {
            vm.hobbie = hobbie;
         }
    
        vm.deletehobbie = (index) => {
            vm.hobbie.splice(index, 1);
            saveData();
        }
    
        setDefaults();

    });

    

})();

