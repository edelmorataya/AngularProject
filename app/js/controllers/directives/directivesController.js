
(() => {
    'use strict'

    let directivesModule = angular.module("mainApp");

    directivesModule.controller('directivesController', function(){
        let vm = this;
        vm.content = [['a', 'b'],['c', 'd']];

        let setDefaults = () => {
            vm.flowerHeaders = ['Index','First','Middle','Last', 'Even', 'Odd', 'Name'];
            vm.flowers = [
                {name: 'Orchid', color: "Pink" },
                {name: 'Marguerite', color: "Yellow" },
                {name: 'Paradise flower', color: "Orange" }
            ];

            vm.templates = [
                {name: 'Orchid', color: "Pink",  image: 'img/f1.jpg', url: "app/js/controllers/directives/template1.html" },
                {name: 'Marguerite', color: "Yellow", image: 'img/f1.jpg', url: "app/js/controllers/directives/template2.html"  }
            ];
            vm.template = vm.templates[0];

            vm.evaluateIfShowHide = () => {
                return vm.ifShowHide;
            }

        }
        setDefaults();

    });

}


)();