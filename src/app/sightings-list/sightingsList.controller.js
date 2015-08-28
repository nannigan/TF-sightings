(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($state,sightingsDataFactory) {
    var list = this;

   list.sightingsData = sightingsDataFactory;
   list.mine = true ? ($state.current.name == 'my-list') : ($state.current.name != 'my-list');


    console.log(list.mine);

  }
})();
