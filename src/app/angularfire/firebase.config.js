/* jshint asi:true */
(function() {
    'use strict'

    angular.module('firebase.config', [])

    .constant('FIREBASE_URL', 'https://tfsighting.firebaseio.com')
        .constant('FIREBASE_LOGIN_PROVIDERS', ['password'])
        .constant('loginRedirectPath', '/login')


}())
