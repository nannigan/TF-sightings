/* jshint asi:true */
(function () {
    'use strict'

    angular.module('firebase.ref', ['firebase', 'firebase.config'])

        .factory('FBRef', function($window, FB_URL) {
            return new $window.Firebase(FB_URL)
        })

}())
