
(() => {
    'use strict'

    let storeModule = angular.module("mainApp");

    storeModule.controller('storeController', function(){
        let vm = this;

        let setDefaults = () => {
            vm.cartitems = JSON.parse(localStorage.getItem("cart"));
            vm.cartflowers = vm.cartflower || [];
            vm.flowerHeaders = ['Precio','Nombre','Codigo','Arreglo de Imagenes', 'Descuento'];
            vm.flowers = [
                {name: 'Orchid', color: "Pink", price: '10.00', code: 123002, image: 'img/f1.jpg', discount: "1.00", description: "Orchid flower includes small pot"},
                {name: 'Marguerite', color: "Yellow", price: '15.00', code: 14402, image: 'img/f2.jpg', discount: "0.50", description: "Marguerite flower, with aditional seeds" },
                {name: 'Paradise flower', color: "Orange", price: '2.00', code: 56004, image: 'img/f3.jpg', discount: "0.30", description: "Orange and yellow Paradise flower pot"}
            ];
        }       
       

        vm.openproduct = (flower) => {
            flower.selected = !flower.selected;
            console.log('Run properly');
            vm.activeflower = flower;
        }
        vm.initializecartflower = () => {
            vm.cartflowers = {};
        }
        let saveData = () => {
            localStorage.setItem("cart", JSON.stringify(vm.cartflowers));
        }
        vm.addCart = () => {
               vm.cartflowers.push(vm.activeflower); 
                saveData();
                vm.initializecartflower();   
                
        }
        setDefaults();
    });

}


)();