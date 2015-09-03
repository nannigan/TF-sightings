(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController( sightingFactory ) {
    var list = this;

  list.sightingArr = sightingFactory.sightingArr();

  console.log(list.sigtingsData);

  }
})();
