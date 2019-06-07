
(() => {
    'use strict'

    let storeModule = angular.module("mainApp");

    storeModule.controller('storeController', function(){
        let vm = this;

        let setDefaults = () => {
            vm.flowerHeaders = ['Precio','Nombre','Codigo','Arreglo de Imagenes', 'Descuento'];
            vm.flowers = [
                {name: 'Orchid', color: "Pink", price: '10.00', code: 123002, image: 'img/f1.jpg', discount: "1.00" },
                {name: 'Marguerite', color: "Yellow", price: '15.00', code: 14402, image: 'img/f2.jpg', discount: "0.50" },
                {name: 'Paradise flower', color: "Orange", price: '2.00', code: 56004, image: 'img/f3.jpg', discount: "0.30" }
            ];

        }
        setDefaults();

    });

}


)();