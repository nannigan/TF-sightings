(function() {
    'use strict';

    angular.module('sightings').controller('SightingController', SightingController);
    // https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
    // https://sightingsinthehood.firebaseio.com/
    /** @ngInject */

    function SightingController($scope, Sightings)
    {
        var sight = this;




        sight.sightingArr = Sightings;

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
//, Auth
        // $scope.authObj = Auth.authObj;
        // var authData = $scope.authObj.$getAuth();
        // sight.id = authData.uid;
        // console.log(authData);
        sight.logme = function(){
          console.log('clicky');
        };


        sight.addSighting = function()
        {
            console.log('clicky');

        //     var stringDate = $scope.data.date.toString();

        //     Sightings.$add(
        //     {
        //         user: {
        //             id: sight.id,
        //             name: sight.name
        //         },
        //         critter: sight.critter,
        //         where: {
        //             lat: sight.where.lat,
        //             lng: sight.where.lng
        //         },
        //         when: Date.parse(stringDate),
        //         details: sight.details || null,
        //         timestamp: Firebase.ServerValue.TIMESTAMP
        //     });
        //     console.log('saved')
        //     // sight.id = "";
        //     // sight.user = "";
        //     // sight.name = "";
        //     sight.critter = "";
        //     sight.where = "";
        //     sight.when = "";
        //     sight.details = "";
        };


    }

    //TODO make impossible to submit after submit--currently submits record with empty strings


})();
