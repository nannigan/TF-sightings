(function() {
  'use strict';

  angular
  .module('sightings')
  .directive('sightingsList', sightingsList);

 var sightingsData = [{critter:'cow'},{critter:'crow'},{critter:'cougar'}];

  /** @ngInject */
  function sightingsList() {

    var directive = {
          restrict: 'EA', // using attribute since am using in table
          templateUrl: 'app/sightings-list/a-sighting.html',
          scope: {
            sightingsData: '='
          },
          controller: SightingsListController,
          controllerAs: 'vm',
          bindToController: true,
          transclude: true
          };
      console.log("before 'return directive'")//logs out before 'return directive'
      return directive;
            /** @ngInject */
    function SightingsListController() {
        var vm = this;
        console.log('hellooooo controller');
        vm.something = "something is a string";
        console.log(vm.something);


        vm.Data = sightingsData;
        console.log(vm.Data[0].critter);

    }// controller
  }
})();









