(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($firebaseArray, sightingFactory,FIREBASE_URL_SIGHTINGS) {
    var main = this;


   var ref = new Firebase(FIREBASE_URL_SIGHTINGS);


    var query = ref.orderByChild("timestamp").limitToLast(5);

    main.filteredsightings = $firebaseArray(query);
    main.sightingArr = main.filteredsightings

    console.log(main.filteredsightings);



  }
})();
