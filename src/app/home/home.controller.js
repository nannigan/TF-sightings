(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($firebaseArray, sightingFactory,FIREBASE_URL_SIGHTINGS) {
    var home = this;


   var ref = new Firebase(FIREBASE_URL_SIGHTINGS);


    var query = ref.orderByChild("timestamp").limitToLast(5);

    home.filteredsightings = $firebaseArray(query);
    home.sightingArr = home.filteredsightings

    console.log(home.filteredsightings);



  }
})();
