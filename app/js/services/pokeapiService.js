(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.service("$pokeapiService", function($http, apiUrl) {

        let buildConfiguration = (options) => {
            let config = {
                method: "GET",
                url: apiUrl.pokeapi.mainUrl,
            };

            if (options.method) {
                config.method = options.method;
            }

            if (options.urlComplement) {
                config.url += options.urlComplement;
            }

            return config;
        }
        /*----Consultar pokemon por nombre. ---*/
       /* this.getByName = (searchText, actionSuccess, actionError) => {
            let config = buildConfiguration({ urlComplement: searchText});
            console.log (config);
            $http(config).then(actionSuccess, actionError);
            console.log("service get by name" + JSON.parse(config));
        }/*

        /*----Consultar pokemon por número.---*/

        this.getByNumber = (searchText, actionSuccess, actionError) => {
            let config = buildConfiguration({ urlComplement: apiUrl.pokeapi.version + "/" + searchText});
            console.log (config);
            $http(config).then(actionSuccess, actionError);
        }
        /*----Consultar pokemon por tipo.---*/
        /*----Consultar pokemon por habilidad.---*/
        /*----Consultar pokemon random.---*/
        this.getRandomPoke = (actionSuccess, actionError) => {
            let config = buildConfiguration({ urlComplement:  apiUrl.pokeapi.random + "/" });
            $http(config).then(actionSuccess, actionError);
        }




    });

})();