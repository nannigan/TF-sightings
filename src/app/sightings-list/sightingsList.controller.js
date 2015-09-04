(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($firebaseArray, sightingFactory, FIREBASE_URL_SIGHTINGS) {
    var list = this;
    var ref = new Firebase(FIREBASE_URL_SIGHTINGS);

    list.sightingArr = $firebaseArray(ref);

    console.log(list.sigtingsArr);

  }
})();



