(function() {
    'use strict';

    angular.module('sightings')
    .controller('SightingController', SightingController);
  // controller for non Auth users
    /** @ngInject */

    function SightingController($scope, Sightings)
    {
        var sight = this;
        sight.sightingArr = Sightings.allsightings();

        $scope.reverse = true;
        $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
      };



    }



})();
