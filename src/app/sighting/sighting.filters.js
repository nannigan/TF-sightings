(function() {
    'use strict';

    angular.module('sightings')
    .filter('match',match)


    /** @ngInject */


function match($firebaseArray, FBRef, user) {
  return FBRef.child('sightings').userid;


};



    //function CurrentUser(Users)

})();
