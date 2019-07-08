(() => {
	'use strict';
	let mainModule = angular.module ("mainApp", ["ui.router", "ui.bootstrap"]);

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
			},
			{
				name: 'app.products',
				options: {
					title: "Products",
					url: '/products',
					templateUrl: 'app/js/controllers/products/products.html',
					controller: 'productsController',
					controllerAs: 'vm'
				}
			},
			{
				name: 'app.directives',
				options: {
					title: "Directives",
					url: '/directives',
					templateUrl: 'app/js/controllers/directives/directives.html',
					controller: 'directivesController',
					controllerAs: 'vm'
				}
			},
			{
				name: 'app.store',
				options: {
					title: "Store",
					url: '/store',
					templateUrl: 'app/js/controllers/store/store.html',
					controller: 'storeController',
					controllerAs: 'vm'
				}
			},
			{
				name: 'app.people',
				options: {
					title: "People",
					url: '/people',
					templateUrl: 'app/js/controllers/people/people.html',
					controller: 'peopleController',
					controllerAs: 'vm'
				}
			}
			,
			{
				name: 'app.pokeapi',
				options: {
					title: "Pokeapi",
					url: '/pokeapi',
					templateUrl: 'app/js/controllers/pokeapi/pokeapi.html',
					controller: 'pokeapiController',
					controllerAs: 'vm'
				}
			},
			{
				name: 'app.persons',
				options: {
					title: "Persons",
					url: '/persons',
					templateUrl: 'app/js/controllers/persons/persons.html',
					controller: 'personsController',
					controllerAs: 'vm'
				}
			},
			{
				name: 'app.hobbies',
				options: {
					title: "Hobbies",
					url: '/hobbies',
					templateUrl: 'app/js/controllers/hobbies/hobbies.html',
					controller: 'hobbiesController',
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