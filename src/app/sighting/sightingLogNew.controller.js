(function() {
  'use strict';

  angular.module('sightings').controller('SightingLogNewController', SightingLogNewController);
    // https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
    // https://sightingsinthehood.firebaseio.com/
    /** @ngInject */

    function SightingLogNewController($state, $scope,FBRef,$firebaseArray, Firebase, Sightings, user, Users, $timeout)
    {
      var sight = this;

      sight.sightingArr = Sightings;
      sight.usersArr = Users;
      console.log (sight.usersArr);


      sight.setPinLatLng = function(evt){
        var ll = evt.latLng;
        sight.where = {
          lat: ll.lat(),
          lng: ll.lng()
        };
        console.log(sight.where.lat);
        console.log(sight.where.lng);
      };



      sight.userid = user.uid;
           //timeout to trigger $apply without running into digest is already running error
           $timeout(
            function(){
             sight.user = Users.$getRecord(user.uid);
             }, 1000);

           var ref = FBRef.child('sightings');
           var sighting = $firebaseArray(ref);

           sight.addSighting = function(){
           var stringDate = $scope.data.date.toString();

            sighting.$add(
            {
              name: sight.user.name,
              email: sight.user.email,
              userid: sight.userid,
              critter: sight.critter,
              where: {
                lat: sight.where.lat,
                lng: sight.where.lng
              },
              when: Date.parse(stringDate),
              details: sight.details || null,
              timestamp: Firebase.ServerValue.TIMESTAMP
            });
            console.log('saved');
            sight.critter = "";
            sight.where = "";
            sight.when = "";
            sight.details = "";
            $state.go('my-list');
          };


        }

    //TODO make impossible to submit after submit--currently submits record with empty strings


  })();
