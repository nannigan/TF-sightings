(function() {
  'use strict';

  angular
  .module('sightings')
  .directive('sightingsList', sightingsList);



  /** @ngInject */
  function sightingsList(sightingsDataFactory) {

    var directive = {
          restrict: 'EA', // using attribute since am using in table
          templateUrl: 'app/sightings-list/a-sighting.html',
          scope: {
            sightingsData: '='
          },
          controller: SightingsListController,
          controllerAs: 'vm',
          bindToController: true,
          };
      return directive;
            /** @ngInject */
    function SightingsListController(sightingsData) {
        var vm = this;

        vm.sightingsData = sightingsData;
        console.log(vm.sightingsData);

    }// controller
  }
})();









