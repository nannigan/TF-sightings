(function() {
    'use strict';

angular.module('sightingFilters',[])
.filter('firstLetterCap',firstLetterCap);


    /** @ngInject */


function firstLetterCap() {
  return function(input){
    return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
  };


}





})();
