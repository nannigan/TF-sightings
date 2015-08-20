// use moment.js to harvest datetime

(function() {
  'use strict';

  angular
    .module('sightings')
    .directive('sighting', sighting);

  /** @ngInject */
  function sighting() {
//enhancement  moment-- could give a choice now or when?


  return{
    restrict: E,

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
