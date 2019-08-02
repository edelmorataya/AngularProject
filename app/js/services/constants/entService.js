(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.constant("entService", {
        "person": {
            "headers": ["Name", "Lastname", "Age"],
            "staticData": [
                {id: 0, name: "Firstname", lastname: "Lastname", age: 1}
            ]
        },
        "hobbies": {
            "headers": ["Name", "Description"],
            "staticData": [
                {id: 0, namea: "hobbie", description: "Sample description"}
            ]
        }
    });

    module.constant("apiUrl", {
        pokeapi: {
            mainUrl: "https://pokeapi.co/api/v2",
            pokemon: "/pokemon",
            type: "/type",
            ability: "/ability",
            version: "/version",
            random: "/pokemon/" + Math.floor(Math.random() * 100) + 1
        }
    });

    module.constant("entityData", {
        "individual": {
            "headers": ["Id", "Name", "LastName", "Age"],
            "staticData": [
                { id: 1, name: "Marleni", lastname: "Rustrian", age: 10 },
                { id: 2, name: "Leonel", lastname: "Castillo", age: 19 },
                { id: 3, name: "Angela", lastname: "Chajon", age: 25},
                { id: 4, name: "Christian", lastname: "Gonzalez", age: 50 },
                { id: 5, name: "Adelina", lastname: "Zepeda", age: 34 }
            ]
        },
        "hobbies": {
            "headers": ["id", "name", "description"],
            "staticData": [
                {id: 0, name: "Watching movies", description: "Action movies and comedies"}
            ]
        }
    });
   
})();