(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($firebaseArray, FBRef, $scope, Sightings) {
    var home = this;

    var query = FBRef.child('sightings').orderByChild("timestamp").limitToLast(5);

    home.filteredsightings = $firebaseArray(query);
    home.sightingArr = home.filteredsightings;


     home.map = ($("map"));
     console.log(home.map.children('marker'))
     home.showMarkers = function() {
      for (var key in home.map.markers)
        { home.map.markers[key].setMap(home.map); };
    };
    home.showMarkers();

    // home.positions = home.testArray;


    home.testArray = [
      {
        where:{
          lat: 37.830761486552774,
          lng: -122.273539228125
        },
        critter: 'bobcat'
      },{
        where:{
          lat: 37.88958086290525,
          lng: -122.27250925986328
        },
        critter: 'bobolink'
      },{
        where:{
          lat: 37.88930991353866,
          lng: -122.2431551644043
        },
        critter: 'cougar'
      },
    ];










  }
})();
