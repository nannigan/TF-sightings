(function() {
    'use strict';

    angular.module('sightings').controller('SightingController', SightingController);
  // controller for non Auth users
    /** @ngInject */

    function SightingController($scope, Sightings)
    {
        var sight = this;
        sight.sightingArr = Sightings;
        console.log(Sightings);



    }



})();
