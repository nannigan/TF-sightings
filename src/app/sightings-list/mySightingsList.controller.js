(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('MyListController', MyListController);

  /** @ngInject */
  function MyListController( sightingsDataFactory) {
    var my = this;
    my.sightingsData = sightingsDataFactory;
    my.mine = true;

    console.log(my.mine);

  }
})();
