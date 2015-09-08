/* jshint asi:true */
(function(){
    'use strict';

    angular.module('sightings')
    .config(routeConfig)
    .constant('SECURED_STATES',{})
    .run(routeChecker)

    function routeChecker($rootScope, $location, Auth, SECURED_STATES, loginPath, $state)
    {
        Auth.$onAuth(check)

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, err){
            if (err === 'AUTH_REQUIRED')
            {
                $state.go('log-in')
            }
        })

        function check(user)
        {
            if (!user && authRequired($location.path()))
            {
                $location.path(loginPath)
            }
        }

        function authRequired(path)
        {
            return SECURED_STATES.hasOwnProperty(path)
        }
    }

    /** @ngInject */

    function routeConfig($stateProvider, $urlRouterProvider, SECURED_STATES)
    {

        $stateProvider.stateAuthenticated = function(name, state)
        {
            state.resolve = state.resolve || {}
            state.resolve.user = function(Auth)
            {
                return Auth.$requireAuth()
            }
            $stateProvider.state(name, state)
            SECURED_STATES[name] = true
            return $stateProvider
        }


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
        })

        // .state('sign-up',
        // {
        //   url: '/sign-up',
        //   templateUrl: 'app/auth/register.html',
        //   controller: 'RegisterController',
        //   controllerAs: 'register'
        //
        // })

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
            controllerAs: 'my',
            resolve: { currentAuth: function(Auth) {
        // $requireAuth returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $stateChangeError (see above)

                    return Auth.$requireAuth();
                  }}
        })

        .state('new-sighting',
        {
            url: '/new-sighting',
            templateUrl: 'app/sighting/new-sighting-form.html',
            controller: 'SightingController',
            controllerAs: 'sight',
            resolve: { currentAuth: function(Auth) {
        // $requireAuth returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $stateChangeError (see above)
                    return Auth.$requireAuth();
                  }
               },
            views: {
                '': {
                    templateUrl: 'app/sighting/new-sighting-form.html'
                },
                'map@new-sighting': {
                    templateUrl: 'app/components/map/map.template.html',
                    controller: 'SightingController',
                    controllerAs: 'sight'
                }

            }
        })

        .stateAuthenticated('account',
        {
            url: '/account',
            templateUrl: 'app/auth/account.html',
            controller: 'AccountController'
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
