(() => {
	'use strict';
	let mainModule = angular.module ("mainApp", ["ui.router"]);

	let mainModConfig = ($stateProvider, $locationProvider, $urlRouterProvider) => {
		$locationProvider.html5Mode(false);
		$urlRouterProvider.otherwise('/app/home');

		let states = [
			{
				name: 'app',
				options: {
					url: '/app',
					abstract: true,
					templateUrl: 'app/app.html',
					controller: 'AppController',
					controllerAs: 'vm'
				}
			},
			{
				name: 'app.home',
				options: {
					title: "Homepage",
					url: '/home',
					templateUrl: 'app/js/controllers/home/home.html',
					controller: 'homeController',
					controllerAs: 'vm'
				}
			},
			{
				name: 'app.carousel',
				options: {
					title: "Carousel",
					url: '/carousel',
					templateUrl: 'app/js/controllers/carousel/carousel.html',
					controller: 'carouselController',
					controllerAs: 'vm'
				}
			},
			{
				name: 'app.courses',
				options: {
					title: "Courses",
					url: '/courses',
					templateUrl: 'app/js/controllers/courses/courses.html',
					controller: 'coursesController',
					controllerAs: 'vm'
				}
			}

		];
		states.forEach(state => $stateProvider.state(state.name, state.options));
	}

	mainModule.config(mainModConfig);
	mainModConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
	
	mainModule.controller('AppController', function($state) {
		let vm = this;

		vm.isNavCollapsed = true;
		vm.isCollapse = false;
		vm.isCollapsedHorizontal = false;

		vm.navbarItems = $state.get();
	});


})();