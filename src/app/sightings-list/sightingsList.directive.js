(function() {
  'use strict';

  angular
    .module('sightings')
    .directive('sightingsList', sightingsList);

  /** @ngInject */
  function sightingsList() {

  var sightingsArr = [
    {
      critter:'cow',
      user: {id: 1,
          name: 'Suzy Queu'},
      where: 'corner of hollywood and vine',
      when: 'saturday at 3 oclock',
      details: 'foggy afternoon'
    },
    {
      critter:'crow',
      user: {id: 2,
      name: 'George L'},
      where: 'corner of this and that',
      when: 'June 15 2015',
      details: 'sure was black'
    },
    {
      critter:'cougar',
      user: {id: 3,
      name: 'jesse james'},
      where: 'my back yard',
      when: 'yesterday at 3 am',
      details: 'big kitty'
    }];

    var directive = {
      restrict: 'E',
      templateUrl: 'app/sightings-list/sightings-list.html',
      scope: {
          critter: '@',
          user: '=',
          where: '@', //will be &
          when: '@', //will be &
          details: '@'

      },
      controller: SightingsListController,
      controllerAs: 'sl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SightingsListController() {
      var vm = this;
      vm.critter = sightingsArr.map(function(x){ return x.critter;});
      vm.user = sightingsArr.map(function(x){ return x.user;});
      vm.where = sightingsArr.map(function(x){ return x.where;});
      vm.when = sightingsArr.map(function(x){ return x.when;});
      vm.details = sightingsArr.map(function(x){ return x.critter;});
      var arr = [vm.critter,vm.user,vm.where, vm.when, vm.details];
      console.log(arr);

    }
  }

})();









