/* jshint asi:true */
(function() {
    'use strict'

    angular.module('firebase.config', [])

    .constant('FB_URL', 'https://tfsighting.firebaseio.com')
        .constant('FB_LOGIN_PROVIDERS', ['password'])
        .constant('loginPath', '/login')


}())
