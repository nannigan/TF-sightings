(function() {
    'use strict';

    angular.module('sightings')
    .controller('SightingSingleController', SightingSingleController);

    /** @ngInject */

    function SightingSingleController($scope, asight){

        var sight = this;

        sight.item = asight;

        asight.$loaded().then(function () {

          sight.data = {
            critter: asight.critter,
            name: asight.name,
            when: asight.when,
            where: asight.where
           }
 console.log(sight.data.critter);

});




       }









})();
