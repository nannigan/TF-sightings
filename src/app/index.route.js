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
        templateUrl: 'app/sightings-list/our-sightings-list.html',
        controller: 'ListController',
        controllerAs: 'list'
      })
      .state('my-list', {
        url: '/my-list',
        templateUrl: 'app/sightings-list/my-sightings-list.html',
        controller: 'MyListController',
        controllerAs: 'my'

      })

      .state('new-sighting', {
        url: '/new-sighting',
        templateUrl: 'app/sighting/new-sighting.html',})
      .state('sighting:id',{
        url:'/sighting/id',
        templateUrl:'app/sighting/sighting.html'
   });

    $urlRouterProvider.otherwise('/');
  }

})();
