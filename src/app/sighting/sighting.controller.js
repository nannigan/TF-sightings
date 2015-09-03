(function(){
    'use strict';

    angular.module('sightings').controller('SightingController', SightingController);
// https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
// https://sightingsinthehood.firebaseio.com/
    /** @ngInject */
  function SightingController(sightingFactory) {
  var sight = this;


    sight.sightingArr = sightingFactory.sightingArr();

    sight.addSighting = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
      sight.sightingArr.$add({
               user: {id: sight.id,
                name: sight.name},
              critter: sight.critter,
                where: sight.where,
                when: sight.when,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });
      sight.id = "";
      sight.user = "";
      sight.name = "";
      sight.critter = "";
      sight.where = "";
      sight.when = "";
        };
    };

//TODO make impossible to submit after submit--currently submits record with empty strings


    // function SightingController(sightingFactory)
    // {
    //     var sighting = this;
    //     //var sightings = $firebaseArray(fRef);
    //      sight.sightingsD = $firebaseArray(fRef);
    //     // console.log(sight.sightings)
    //     //var sight = {};
    //     // will be by firebases id
    //     //read  sight = {
    //     //    where: sightingsDataFactory.where,
    //     //    when: sightingsDataFactory.when,
    //     //    critter: sightingsDataFactory.critter,
    //     //    user: sightingsDataFactory.user.id,
    //     //    username: sightingsDataFactory.user.name
    //     //    }

    //     //    sight.sight = sight;
    //      var newSighting = { // user: {
    //             //   id = sight.user.id,
    //             //   name = sight.user.name
    //             //  },
    //             //user: sight.name,
    //             critter: sight.critter,
    //             where: sight.where,
    //             when: sight.when,
    //             //timestamp: Firebase.ServerValue.TIMESTAMP
    //             };
    //     //create
    //     sight.addSighting = function(newSighting)
    //     {
    //       console.log('ok trying to add a sighting')
    //        // $add on a synchronized array is like Array.push() except it saves to the database!
    //         sight.sightings.$add(newSighting).$save(newSighting);
    //         console.log(sight.sightings);
    //     };
    //   }

    })();
