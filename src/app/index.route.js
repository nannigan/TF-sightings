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
      .state('log in')
      .state('sign up')
      .state('our list')
      .state('my list')
      .state('new sighting')
      .state('sightings:sighting');

    $urlRouterProvider.otherwise('/');
  }

})();
