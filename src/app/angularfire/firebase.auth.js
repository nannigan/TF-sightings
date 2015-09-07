/* jshint asi:true */
(function () {
    'use strict'

    angular.module('firebase.auth', ['firebase', 'firebase.ref'])

        .factory('Auth', function($firebaseAuth, FBRef) {
            return $firebaseAuth(FBRef)
        })
}())
