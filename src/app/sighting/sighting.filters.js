(function() {
    'use strict';

    angular.module('sightings')
    .filter('firstLetterCap',firstLetterCap)


    /** @ngInject */


function firstLetterCap(str) {
  return str.charAt(0).toUpperCase()

};



    //function CurrentUser(Users)

})();
