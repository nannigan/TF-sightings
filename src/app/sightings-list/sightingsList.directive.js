(function() {
  'use strict';

  angular
  .module('sightings')
  .directive('sightingsList', sightingsList);



  /** @ngInject */
  function sightingsList(sightingsDataFactory) {

    var directive = {
          restrict: 'EA', // using attribute since am using in table
          templateUrl: 'app/sightings-list/sightings-list.template.html',
          scope: {
            sightingsData: '='
          },
          controller: SightingsListController,
          controllerAs: 'vm',
          bindToController: true,
          };
      return directive;
            /** @ngInject */
    function SightingsListController(sightingsDataFactory, $state) {
        var vm = this;

        vm.sightingsData = sightingsDataFactory;
        // vm.mylist = $state.current.name;
        if ($state.current.name == 'my-list')
         { vm.myList = $state.current.name;}


        console.log($state.current.name);
        console.log (vm.myList);
        //gets the 'my-list' value from the

    }// controller
  }
})();









