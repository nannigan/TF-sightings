

(function() {
  'use strict';

  angular
    .module('sightings')
    .directive('sighting', sighting);

  /** @ngInject */
  function sighting(sightingsDataFactory) {
//enhancement  moment.js -- could give a choice of 'just now' or specific choice from timecalendar widget?


  return{
    restrict: AE,

  }
    // var directive = {
    //   restrict: 'E',
    //   templateUrl: 'app/components/navbar/navbar.html',
    //   scope: {
    //       creationDate: '='
    //   },
    //   controller: NavbarController,
    //   controllerAs: 'vm',
    //   bindToController: true
    // };

    //return directive;

    /** @ngInject */
    // function NavbarController(moment) {
    //   var vm = this;

    //   // "vm.creation" is avaible by directive option "bindToController: true"
    //   vm.relativeDate = moment(vm.creationDate).fromNow();
    // }
  }

})();
