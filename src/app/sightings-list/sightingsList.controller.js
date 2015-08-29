(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController( sightingsDataFactory ) {
    var list = this;

  list.sightingsData = sightingsDataFactory;

  console.log(list.sigtingsData);

  }
})();
