(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($firebaseArray, FBRef, $scope, $state) {
    var home = this;

    var query = FBRef.child('sightings').orderByChild("when").limitToLast(5);



    home.filteredsightings = $firebaseArray(query);
    home.sightingArr = home.filteredsightings;


 $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

 $scope.gotoCritter = function(critter){
    $state.go(critter);
  }

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };



















  }
})();
