(function() {
  'use strict';

  angular
  .module('sightings')
  .factory('sightingsDataFactory', sightingsDataFactory);



  /** @ngInject */
  function sightingsDataFactory() {
    console.log('hello I am in a factory');

        var sightingsData;
       sightingsData = [
        {
        critter:'cow',
        user: {id: 1,
               name: 'Suzy Queu'},
        where: 'corner of hollywood and vine',
        when: 'saturday at 3 oclock',
        photo: 'y',
        details: 'foggy afternoon'
        },
        {
        critter:'crow',
        user: {id: 2,
               name: 'George L'},
        where: 'corner of this and that',
        when: 'June 15 2015',
        photo: 'n',
        details: 'sure was black'
        },
        {
        critter:'cougar',
        user: {id: 3,
               name: 'jesse james'},
        where: 'my back yard',
        when: 'yesterday at 3 am',
        photo: 'n',
        details: 'big kitty'
        }];
        console.log(sightingsData);
        return sightingsData;
       }


})();








