(function() {
  'use strict';

  angular
    .module('sightings', ['ui.router'])
    // just showing currently using dependencies
    //.module('sightings', [ 'ngMap','ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router','sightingsListData']);
    .controller('AppController', AppController );
  function AppController() {
        var app = this;

        app.message = 'hello worldly folk!';


      }
})();
