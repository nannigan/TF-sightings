(function(){
    'use strict';

    angular.module('sightings').factory('sightingFactory', sightingFactory);

    /** @ngInject */

    function sightingFactory ($firebaseArray,FIREBASE_URL_SIGHTINGS)
    {
      var ref = new Firebase(FIREBASE_URL_SIGHTINGS);
      return {

        sightingArr: function(){
           return $firebaseArray(ref);
          },


      };





      }

    })();




