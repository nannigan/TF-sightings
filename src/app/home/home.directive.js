(function() {
  'use strict';

  angular
  .module('sightings')
  .directive('home', home);




  /** @ngInject */
  function home() {


    var directive = {
          restrict: 'A',
          templateUrl: 'app/home/home.template.html',
          scope: {
            sightingArr: '=',


            }

          };
      return directive;

  }

})();









