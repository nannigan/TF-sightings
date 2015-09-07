/* jshint asi:true */
(function () {
    'use strict'

    angular.module('firebase.ref', ['firebase', 'firebase.config'])

        .factory('FBRef', function($window, FIREBASE_URL) {
            return new $window.Firebase(FIREBASE_URL)
        })

}())
