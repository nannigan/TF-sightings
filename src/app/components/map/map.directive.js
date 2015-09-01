(function() {
  'use strict';
//check out geofire?
  angular
    .module('sightings')
    .directive('sightingsMap', sightingsMap);

  /** @ngInject */
  function sightingsMap() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/map.template.html',
      scope: {

      },
      controller: MapController,
      controllerAs: 'map',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MapController() {
      var map = this;


    }
  }

})();
