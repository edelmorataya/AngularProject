
(() => {
    'use strict';

    let module = angular.module("mainApp");

    module.filter('agefilter', function(){
        return function (input){
            if(input>=18){
            return input
            }
        }

    })

})();

