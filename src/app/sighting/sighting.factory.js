(function() {
    'use strict';

    angular.module('sightings')
    .factory('Sightings', Sightings)
    .factory('Users', Users);
    //.factory('CurrentUser', CurrentUser);

    /** @ngInject */

    function Sightings($firebaseArray, FBRef) {

        var ref = FBRef.child('sightings');
        return $firebaseArray(ref);

    }
    function Users($firebaseArray, FBRef){
        var uref = FBRef.child('users');
        return $firebaseArray(uref);
    }
    //function CurrentUser(Users)

})();
