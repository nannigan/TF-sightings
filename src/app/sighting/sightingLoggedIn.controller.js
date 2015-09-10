(function() {
    'use strict';

    angular.module('sightings').controller('SightingLoggedInController', SightingLoggedInController);
    // https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
    // https://sightingsinthehood.firebaseio.com/
    /** @ngInject */

    function SightingLoggedInController($scope, Sightings, user, Users, $timeout)
    {
        var sight = this;




        sight.sightingArr = Sightings;
        sight.usersArr = Users;
        console.log (sight.usersArr);



// }




        //http://stackoverflow.com/questions/25859514/how-to-get-current-user-on-firebase

        sight.setPinLatLng = function(evt)
        {
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




        sight.addSighting = function()
        {


            var stringDate = $scope.data.date.toString();


            Sightings.$add(

            {
                name: sight.user.name,
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
            // sight.id = "";
            // sight.user = "";
            // sight.name = "";
            sight.critter = "";
            sight.where = "";
            sight.when = "";
            sight.details = "";
        };


    }

    //TODO make impossible to submit after submit--currently submits record with empty strings


})();
