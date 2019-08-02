
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
            vm.headersType = ["#", "Pokemon", "Type"];
            vm.headersAbility = ["#", "Pokemon", "Ability"];
            vm.headers = ["#", "Name", "Type", "Ability", "Icon"];
            /*getPoke();*/
        }

        /*let getPoke = () => {
            $http({ method: "GET", url: "http://pokeapi.co/api/v2/pokemon/" }).then((response) => { console.log(response); }, (error) => { console.error(error); });
        }*/
        

        vm.getPokeByNumber = () => {
            $pokeapiService.getPokeByNumber(
                vm.number,
                (response) => { vm.pokes = new Array(response.data); console.log(vm.pokes)},
                (error) => { console.error(error); }
            );
        }

        vm.getPokeByType = () => {
            $pokeapiService.getPokeByType(
                vm.type,
                (response) => { vm.pokes = new Array(response.data); console.log(vm.pokes)},
                (error) => { console.error(error); }
            );
        }

        vm.getPokeByAbility = () => {
            $pokeapiService.getPokeByAbility(
                vm.identifier,
                (response) => { vm.pokes = new Array(response.data); console.log(vm.pokes)},
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