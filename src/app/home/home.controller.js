(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($firebaseArray, FBRef) {
    var home = this;

    var query = FBRef.child('sightings').orderByChild("timestamp").limitToLast(5);

    home.filteredsightings = $firebaseArray(query);
    home.sightingArr = home.filteredsightings;

    console.log(home.filteredsightings);



  }
})();
