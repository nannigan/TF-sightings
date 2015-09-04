(function() {
  'use strict';

  angular
  .module('sightings')
  .directive('main', main);




  /** @ngInject */
  function main() {


    var directive = {
          restrict: 'A',
          templateUrl: 'app/main/main.template.html',
          scope: {
            sightingArr: '=',


            }

          };
      return directive;

  }

})();









