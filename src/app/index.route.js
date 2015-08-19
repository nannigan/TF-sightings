(function() {
  'use strict';

  angular
    .module('sightings')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/auth/log-in.html',
        // controller: 'MainController',
        // controllerAs: 'main'
      })
      .state('log-out', {
        url: '/log-out',
        templateUrl: 'app/auth/log-in.html',
        // controller: 'MainController',
        // controllerAs: 'main'
      })

      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'app/auth/register.html'})
      .state('our-list', {
        url: '/our-list',
        templateUrl: 'app/lists/our-list.html',})
      .state('my-list', {
        url: '/my-list',
        templateUrl: 'app/lists/my-list.html',})
      .state('new-sighting', {
        url: '/new-sighting',
        templateUrl: 'app/sightings/new-sighting.html',})
      .state('sighting',{
        url:'/sighting',
        templateUrl:'app/sightings/sighting.html'
   });

    $urlRouterProvider.otherwise('/');
  }

})();
