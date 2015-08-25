(function() {
  'use strict';

  angular
  .module('sightings')
  .directive('sightingsList', sightingsList);

 var sightingsData = [
        {
        critter:'cow',
        user: {id: 1,
               name: 'Suzy Queu'},
        where: 'corner of hollywood and vine',
        when: 'saturday at 3 oclock',
        photo: 'y',
        details: 'foggy afternoon'
        },
        {
        critter:'crow',
        user: {id: 2,
               name: 'George L'},
        where: 'corner of this and that',
        when: 'June 15 2015',
        photo: 'n',
        details: 'sure was black'
        },
        {
        critter:'cougar',
        user: {id: 3,
               name: 'jesse james'},
        where: 'my back yard',
        when: 'yesterday at 3 am',
        photo: 'n',
        details: 'big kitty'
        }];

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
          };
      return directive;
            /** @ngInject */
    function SightingsListController() {
        var vm = this;

        vm.sightingsData = sightingsData;

    }// controller
  }
})();









