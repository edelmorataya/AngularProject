
(() => {
    'use strict';

    let module = angular.module("mainApp");

    module.filter('agefilter', function(){
        return function (items, edad){
            
            let filtered = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if(edad == "1"){
                    if (item.age >= 18){
                        filtered.push(item);
                    }
                }
                if(edad == "2"){
                    if (item.age <= 17){
                        filtered.push(item);
                    }
                }
                   console.log(filtered)
             }
        return filtered;

     };

    });




})();

