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
   
})();