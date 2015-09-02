(function(){
    'use strict';

    angular.module('sightings').controller('SightingController', SightingController);
// https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
// https://sightingsinthehood.firebaseio.com/
    /** @ngInject */

    function SightingController(sightingsDataFactory, $firebaseArray, fRef)
    {
        var sighting = this;
        var sightings = $firebaseArray(fRef);
        //var sight = {};
        // will be by firebases id
        //read  sight = {
        //    where: sightingsDataFactory.where,
        //    when: sightingsDataFactory.when,
        //    critter: sightingsDataFactory.critter,
        //    user: sightingsDataFactory.user.id,
        //    username: sightingsDataFactory.user.name
        //    }

        //    sighting.sight = sight;
        //create
        sighting.addSighting = function()
        {
            // $add on a synchronized array is like Array.push() except it saves to the database!
            sightings.sightingsSet.$add(
            {
                // user: {
                //   id = sighting.user.id,
                //   name = sighting.user.name
                //  },
                critter: sighting.critter,
                where: sighting.where,
                when: sighting.when,
                timestamp: Firebase.ServerValue.TIMESTAMP
            }).$save();
        }
      }

    })();


