(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($state,sightingsDataFactory,$scope) {
    var list = this;

list.sightingsData = sightingsDataFactory;
  // list.mine = true ? ($state.current.name == 'my-list') : ($state.current.name != 'my-list');


   //  console.log(list.mine);

  }
})();
