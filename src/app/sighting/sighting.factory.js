(function() {
    'use strict';

    angular.module('sightings').factory('Sightings', Sightings);

    /** @ngInject */

    function Sightings($firebaseArray, FBRef) {
      //return  {
       // all: function(){
           var ref = FBRef.child('sightings');

        return $firebaseArray(ref);
      // },
      // currentUser: function(){
      //      var ref = FBRef.child('sightings');

      //   return $firebaseArray(ref);
      // },

      // }

    }
})();
