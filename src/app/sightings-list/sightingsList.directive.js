(function() {
  'use strict';

  angular
  .module('sightings')
  .directive('sightingsList', sightingsList);




  /** @ngInject */
  function sightingsList() {


    var directive = {
          restrict: 'A', // using attribute since am using in table
          templateUrl: 'app/sightings-list/sightings-list.template.html',
          scope: {
            sightingArr: '=',
            mine: '='

            }

          };
      return directive;

  }

})();









