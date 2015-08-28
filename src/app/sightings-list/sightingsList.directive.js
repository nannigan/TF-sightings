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
            sightingsData: '=',
            mine: '&'
           },

          };
      return directive;
           // /** @ngInject */
    // function link(scope, el, attrs, $state) {
    //   if ($state.current.name == 'my-list')
    //   { list.myList = true;

    // }};
      //sightingsDataFactory, $state
      //   var vm = this;

      //   sightingsData = sightingsDataFactory;
      //   // attributes on directove instance

      //   if ($state.current.name == 'my-list')
      //    { vm.myList = $state.current.name;}
      //  //filter

      //  if ($state.current.url == '/')
      //   {vm.sightingsData = vm.sightingsData.slice(0,2)}
      // //filter




    //}// controller
  }

})();









