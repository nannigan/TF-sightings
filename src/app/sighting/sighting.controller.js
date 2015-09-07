(function()
{
    'use strict';

    angular.module('sightings').controller('SightingController', SightingController);
    // https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
    // https://sightingsinthehood.firebaseio.com/
    /** @ngInject */

    function SightingController($scope, sightingFactory)
    {
        var sight = this;

        sight.today = Date.now();
        console.log(sight.today);
        sight.sightingArr = sightingFactory.sightingArr();

        sight.addSighting = function()
        {
            //console.log(sight.where);
            var stringDate = $scope.data.date.toString();

            sight.sightingArr.$add(
            {
                // user: {id: sight.id,
                //  name: sight.name},
                critter: sight.critter,
                where: sight.where,
                when: Date.parse(stringDate),
                details: sight.details,
                timestamp: Firebase.ServerValue.TIMESTAMP
            });
            // sight.id = "";
            // sight.user = "";
            // sight.name = "";
            sight.critter = "";
            sight.where = "";
            sight.when = "";
            sight.details = "";
        }


    }

    //TODO make impossible to submit after submit--currently submits record with empty strings


})();
