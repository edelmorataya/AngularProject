
(() => {
    'use strict'

    let pokeapiModule = angular.module("mainApp");

    pokeapiModule.controller('pokeapiController', function($http){
        let vm = this;
        vm.test = 'this is my test result';

        let setDefaults = () => {
            loadData();
        }

        let loadData = () => {
            vm.headers = ["#", "poke", "Categories", "Created", "Updated", "Icon"];
            getPoke();
        }

        let getPoke = () => {
            $http({ method: "GET", url: "http://pokeapi.co/api/v2/pokemon/" }).then((response) => { console.log(response); }, (error) => { console.error(error); });
        }

        vm.getpokeByQuery = () => {
            $pokeapiService.getByQuery(
                vm.searchText,
                (response) => { if (response.data.total == 0) vm.pokes = []; else vm.pokes = convertResponseDate(response.data.result); },
                (error) => { console.error(error); }
            );
        }
        setDefaults();
    });
    

}


)();