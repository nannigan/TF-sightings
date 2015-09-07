(function() {
    'use strict';

    angular.module('sightings').factory('Sightings', Sightings);

    /** @ngInject */

    function Sightings($firebaseArray, FBRef) {
        var ref = FBRef.child('sightings');

        return $firebaseArray(ref);
    }
})();
