(function()
{
  'use strict';

  angular.module('sightings').config(routeConfig);

  /** @ngInject */

  function routeConfig($stateProvider, $urlRouterProvider)
  {
    $stateProvider.state('home',
    {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    }).state('log-in',
    {
      url: '/log-in',
      templateUrl: 'app/auth/log-in.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })

    .state('sign-up',
    {
      url: '/sign-up',
      templateUrl: 'app/auth/register.html',
      controller: 'RegisterController',
      controllerAs: 'register'

    })

    .state('our-list',
    {
      url: '/our-list',
      templateUrl: 'app/sighting/our-sightings-list.html',
      controller: 'SightingController',
      controllerAs: 'sight'
    })

    .state('my-list',
    {
      url: '/my-list',
      templateUrl: 'app/sighting/my-sightings-list.html',
      controller: 'SightingController',
      controllerAs: 'my'
    })

    .state('new-sighting',
    {
      url: '/new-sighting',
      templateUrl: 'app/sighting/new-sighting-form.html',
      controller: 'SightingController',
      controllerAs: 'sight',
      views:{
        '': { templateUrl: 'app/sighting/new-sighting-form.html'},
        'map@new-sighting' : {
          templateUrl: 'app/components/map/map.template.html',
          controller: 'MyMapController',
          controllerAs: 'mymap'
        }

      }
    })


    .state('sighting :id',
    {
      url: '/sighting',
      templateUrl: 'app/sighting/sighting.html',
      controller: 'SightingController',
      controllerAs: 'sight'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
