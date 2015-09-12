(function() {
  'use strict';

  angular.module('sightings').controller('SightingMyController', SightingMyController);

    /** @ngInject */

    function SightingMyController($firebaseArray, Firebase, Sightings, user, FBRef)
    {
      var sight = this;

// TODO  refactor as factory method resolved in router
      var query = FBRef.child('sightings').orderByChild("userid").equalTo(user.uid);

      sight.mysightingArr =  $firebaseArray(query);


      var q = FBRef.child('sightings').orderByChild("userid").equalTo(user.uid).limitToFirst(1);
      sight.namer = $firebaseArray(q);



    }



})();
