(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('MyListController', MyListController);

  /** @ngInject */
  function MyListController( $firebaseArray, sightingFactory, FIREBASE_URL_SIGHTINGS) {
    var my = this;
    var ref = new Firebase(FIREBASE_URL_SIGHTINGS);
    my.sightingArr = $firebaseArray(ref);
    console.log(my.mine);

  }
})();
