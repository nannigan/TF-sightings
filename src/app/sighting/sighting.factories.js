(function() {
    'use strict';

    angular.module('sightings')
    .factory('Sightings', Sightings)
    .factory('Users', Users);
    //.factory('CurrentUser', CurrentUser);

    /** @ngInject */

    function Sightings(Firebase, $firebaseArray,$firebaseObject, FBRef) {
     return {
        allsightings: function(){
            var ref = FBRef.child('sightings');
             return $firebaseArray(ref);
           },
        singlesighting: function(recordId){
           var baseRef = FBRef.child('sightings');
           return $firebaseObject(baseRef.child(recordId));
         }
           // user ?? how to
        // mysightings: function(){
        //    var query = FBRef.child('sightings').orderByChild("userid").equalTo(user.uid);
        //    return $firebaseArray(query);
        // }
      };
    }

    function Users($firebaseArray, FBRef){
        var uref = FBRef.child('users');
        return $firebaseArray(uref);
    }


})();
