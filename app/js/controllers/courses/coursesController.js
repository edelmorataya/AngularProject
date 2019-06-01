
(() => {
    'use strict'

    let coursesModule = angular.module("mainApp");

    coursesModule.controller('coursesController', function(){
        let vm = this;
        vm.c = 'this is my test result';

        let setDefaults = () => {
            loadData();
            vm.iniCourse();
        }
        
        let loadData = () => {
            vm.tabHeaders = JSON.parse (localStorage.getItem("tab-headers"));
            vm.courses = JSON.parse (localStorage.getItem("courses"));

            if(!vm.tabHeaders) {
            vm.tabHeaders= ["Id", "Nombre", "Duracion", "FechaIni", "FechaFin", "Catedratico"];
            localStorage.setItem ("tab-headers", JSON.stringify(vm.tabHeaders));
            }
            if (!vm.courses) {
                vm.courses = [
                    { id: 1,  nombre: "Test", duracion: "1", fechaini: new Date("05/04/2019"), fechafin: new Date("05/05/2019"), catedratico: "TestCat" }
                ];
            vm.courses.forEach (course => course.id = getRandomId());
            saveData();

            }
        }
        vm.iniCourse = () => {
            vm.course = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("courses", JSON.stringify(vm.courses));
        }


        vm.saveCourse = () => {
            if (vm.course.nombre && vm.course.duracion && vm.course.fechaini && vm.course.fechafin && vm.course.catedratico) {
                if (vm.course.id) {
                    vm.courses.forEach(course => { if (course.id == vm.course.id) course = vm.course; });
                } else {
                    vm.course.id = getRandomId();
                    vm.courses.push(vm.course);
                }
                saveData();
                vm.iniCourse();    
            }
        }

        setDefaults();

    });

    

})();