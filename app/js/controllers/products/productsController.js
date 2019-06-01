
(() => {
    'use strict'

    let productsModule = angular.module("mainApp");

    productsModule.controller('productsController', function(){
        let vm = this;
        vm.c = 'this is my test result';

        let setDefaults = () => {
            loadData();
            vm.iniproduct();
        }
        
        let loadData = () => {
            vm.ptabHeaders = JSON.parse (localStorage.getItem("tab-headers"));
            vm.products = JSON.parse (localStorage.getItem("products"));

            if(!vm.ptabHeaders) {
            vm.ptabHeaders= ["1", "2", "3", "4", "5", "6"];
            localStorage.setItem ("tab-headers", JSON.stringify(vm.ptabHeaders));
            }
            if (!vm.products) {
                vm.products = [
                    { id: 1,  nombre: "Test", costo: "1", proveedor: 'Sample Provider', nol: 10, fechacad: "TestCat" }
                ];
            vm.products.forEach (product => product.id = getRandomId());
            saveData();

            }
        }
        vm.iniproduct = () => {
            vm.product = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("products", JSON.stringify(vm.products));
        }


        vm.saveproduct = () => {
            if (vm.product.nombre && vm.product.costo && vm.product.proveedor && vm.product.nol && vm.product.fechacad) {
                if (vm.product.id) {
                    vm.products.forEach(product => { if (product.id == vm.product.id) product = vm.product; });
                } else {
                    vm.product.id = getRandomId();
                    vm.products.push(vm.product);
                }
                saveData();
                vm.iniproduct();    
            }
        }

        setDefaults();

    });

    

})();