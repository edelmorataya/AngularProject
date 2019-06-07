
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

        }
        setDefaults();

    });

}


)();