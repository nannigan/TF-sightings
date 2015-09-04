(function() {
  'use strict';

  angular
  .module('sightings')
  .factory('sightingsDataFactory', sightingsDataFactory);

    //   var app = angular.module("sampleApp", ["firebase"]);

    // app.factory("chatMessages", ["$firebaseArray",
    //   function($firebaseArray) {
    //     // create a reference to the database where we will store our data
    //     var randomRoomId = Math.round(Math.random() * 100000000);
    //     var ref = new Firebase("https://docs-sandbox.firebaseio.com/af/array/full/" + randomRoomId);

    //     return $firebaseArray(ref);
    //   }
    // ]);


  /** @ngInject */
  function sightingsDataFactory() {
    console.log('hello I am in a factory');

        var sightingsData;
       sightingsData = [
        {
        id: 123,
        critter:'cow',
        user: {id: 1,
               name: 'Suzy Queu'},
        where: 'corner of hollywood and vine',
        when: 'saturday at 3 oclock',
        photo: 'y',
        details: 'foggy afternoon'
        },
        {
        id: 124,
        critter:'crow',
        user: {id: 2,
               name: 'George L'},
        where: 'corner of this and that',
        when: 'June 15 2015',
        photo: 'n',
        details: 'sure was black'
        },
        {
        id: 125,
        critter:'cougar',
        user: {id: 3,
               name: 'jesse james'},
        where: 'my back yard',
        when: 'yesterday at 3 am',
        photo: 'n',
        details: 'big kitty'
        }];

        return sightingsData;
       }


})();








