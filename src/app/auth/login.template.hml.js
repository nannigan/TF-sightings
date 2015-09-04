(function() {
  'use strict';

  angular
  .module('sightings')
  .directive('login', login);




  /** @ngInject */
  function login() {


    var directive = {
          restrict: 'A',
          templateUrl: 'app/auth/login.template.html',
          scope: {
            loggedin: '=',


            }

          };
      return directive;

  }

})();









