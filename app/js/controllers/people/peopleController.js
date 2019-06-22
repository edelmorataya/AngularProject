
(() => {
    'use strict'

    let peopleModule = angular.module("mainApp");

    peopleModule.controller('peopleController', function () {
        let vm = this;

        let setDefaults = () => {
            loadData();
            vm.inipeople();
        }

        let loadData = () => {
            vm.peopleHeader = JSON.parse(localStorage.getItem("tab-headers"));
            vm.people = JSON.parse(localStorage.getItem("people"));

            if (!vm.peopleHeader) {
                vm.peopleHeaders = [Name, Sex, Age];
                localStorage.setItem("tab-headers", JSON.stringify(vm.peopleHeader));
            }
            /*if (!vm.people) {
                vm.people = [
                    { name: Sam Smith, sex: Doubt, age: 27 }
                ];
            
            saveData();
            }*/

        }
        vm.inipeople = () => {
            vm.people = {};
        }

        /*let saveData = () => {
            localStorage.setItem("people", JSON.stringify(vm.people));
        }*/

setDefaults();

    });

}


) ();