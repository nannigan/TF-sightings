(function()
{
    'use strict';

    angular.module('sightings').controller('SightingLogNewController', SightingLogNewController);
    // https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
    // https://sightingsinthehood.firebaseio.com/
    /** @ngInject */

    function SightingLogNewController($state, $scope, FBRef, $firebaseArray, Firebase, Sightings, user, Users, $timeout)
    {
        var sight = this;

        sight.sightingArr = Sightings;
        sight.usersArr = Users;

        // , Upload
        // $scope.uploadPic = function(file) {
        //   file.upload = Upload.upload({
        //     url: 'https://sightingsinthehood.firebaseapp.com/src/assets/images',
        //     method: 'POST',
        //     headers: {
        //       'my-header': 'my-header-value'
        //     },
        //     fields: {username: $scope.username},
        //     file: file,
        //     fileFormDataName: 'myFile'
        //   });

        //   file.upload.then(function (response) {
        //     $timeout(function () {
        //       file.result = response.data;
        //     });
        //   }, function (response) {
        //     if (response.status > 0)
        //       $scope.errorMsg = response.status + ': ' + response.data;
        //   });

        //   file.upload.progress(function (evt) {
        //     // Math.min is to fix IE which reports 200% sometimes
        //     file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        //   });
        //   }

        sight.setPinLatLng = function(evt)
        {
            var ll = evt.latLng;
            sight.where = {
                lat: ll.lat(),
                lng: ll.lng()
            };
            sight.thanks = true;
        };

        sight.getDatetime = function(){
            return (new Date);
        };
        sight.now = sight.getDatetime();

        //console.log($scope.data.date >= $scope.now);

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
            sight.critter = "";
            sight.where = "";
            sight.when = "";
            sight.details = "";
            $state.go('my-list');
        };


    }

    //TODO make impossible to submit after submit--currently submits record with empty strings


})();
