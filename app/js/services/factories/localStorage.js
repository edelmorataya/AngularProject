(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.factory("localStorage", function (collectNameConstant){

        let localStorageService = {}

        localStorageService.key = "persons";
        

        return localStorageService();
    });
})();