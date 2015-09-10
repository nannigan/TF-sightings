(function() {
  'use strict';

  angular.module('sightings').controller('SightingMyController', SightingMyController);
    // https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
    // https://sightingsinthehood.firebaseio.com/
    /** @ngInject */

    function SightingMyController($firebaseArray, Firebase, Sightings, user, FBRef)
    {
      var sight = this;



      var query = FBRef.child('sightings').orderByChild("userid").equalTo(user.uid);

      sight.mysightingArr =  $firebaseArray(query);


      var q = FBRef.child('sightings').orderByChild("userid").equalTo(user.uid).limitToFirst(1);
      sight.namer = $firebaseArray(q);















    }

    //TODO make impossible to submit after submit--currently submits record with empty strings


  })();
