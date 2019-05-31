
(() => {
    'use strict'

    let carouselModule = angular.module('mainApp');

    carouselModule.controller('carouselController', function(){
        let vm = this;
        vm.slide =[{
            id: 0,
            name: 'Imagen 1',
            dato: 'Primer imagen',
            image: 'img/1.jpg',
        },
        {
            id: 1,
            name: 'Imagen 2',
            dato: 'segunda imagen',
            image: 'img/2.jpg',
        },
        {
            id: 2,
            name: 'Imagen 3',
            dato: 'tercera imagen',
            image: 'img/3.jpg',
        },
        {
            id: 3,
            name: 'Imagen 4',
            dato: 'Descripcion imagen',
            image: 'img/4.jpg',
        },
        {
            id: 4,
            name: 'Imagen 5',
            dato: 'Descripcion imagen',
            image: 'img/5.jpg',
        }

    ];
        

    });

}


)();