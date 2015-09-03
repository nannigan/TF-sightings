

(function() {
  'use strict';

  angular
    .module('sightings')
    .directive('sighting', sighting);

  /** @ngInject */
  function sighting(sightingFactory) {

    var directive = {
          restrict: 'A', // using attribute since am using in table
          templateUrl: 'app/sighting/sighting.template.html',
          scope: {
            sightingArr: '&',


            }

          };
      return directive;

  }
})();
