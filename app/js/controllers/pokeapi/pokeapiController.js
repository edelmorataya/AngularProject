
(() => {
    'use strict'

    let pokeapiModule = angular.module("mainApp");

    pokeapiModule.controller('pokeapiController', function($pokeapiService){
        let vm = this;
        vm.test = 'this is my test result';

        let setDefaults = () => {
            loadData();
        }

        let loadData = () => {
            vm.headers = ["#", "poke", "Categories", "Created", "Updated", "Icon"];
            /*getPoke();*/
        }

        /*let getPoke = () => {
            $http({ method: "GET", url: "http://pokeapi.co/api/v2/pokemon/" }).then((response) => { console.log(response); }, (error) => { console.error(error); });
        }*/
        

        vm.getpokeByNumber = () => {

            $pokeapiService.getByNumber(
                vm.searchText,
                (response) => { if (response.data.total == 0) vm.pokes = []; else vm.pokes = new Array(response.data); console.log(JSON.stringify(vm.pokes)) },
                (error) => { console.error(error); }
                
            );
            
        }

        
        vm.getRandomPoke = () => {
            $pokeapiService.getRandomPoke(
                (response) => { vm.pokes = new Array(response.data); console.log(vm.pokes)},
                (error) => { console.error(error); }
            );
        }


        setDefaults();
    });
    

}


)();