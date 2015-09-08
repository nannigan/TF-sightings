/* jshint asi:true */
(function() {
    'use strict'

    angular.module('sightings')
        .controller('LoginController', function($scope, Auth, $location, $q, FBRef, $timeout) {
            $scope.passwordLogin = function(email, pass) {
                $scope.err = null
                Auth.$authWithPassword({
                    email: email,
                    password: pass
                }, {
                    rememberMe: true
                }).then(
                    redirect, showError
                )
            }

            $scope.createAccount = function(email, pass, confirm) {
                $scope.err = null;
                if (!pass) {
                    $scope.err = 'Please enter a password'
                } else if (pass !== confirm) {
                    $scope.err = 'Passwords do not match'
                } else {
                    Auth.$createUser({
                            email: email,
                            password: pass
                        })
                        .then(function() {
                            // authenticate so we have permission to write to Firebase
                            return Auth.$authWithPassword({
                                email: email,
                                password: pass
                            }, {
                                //rememberMe: true
                            });
                        })
                        .then(createProfile)
                        .then(redirect, showError);
                }

                function createProfile(user) {

                    var ref = FBRef.child('users/' + user.uid),
                        def = $q.defer()
                    ref.set({
                        email: email,
                        name: firstPartOfEmail(email)
                    }, function(err) {
                        $timeout(function() {
                            if (err) {
                                def.reject(err)
                            } else {
                                def.resolve(ref)
                            }
                        })
                    })
                    return def.promise
                }
            };

            function firstPartOfEmail(email) {
                return ucfirst(email.substr(0, email.indexOf('@')) || '')
            }

            function ucfirst(str) {
                str += '';
                var f = str.charAt(0).toUpperCase()
                return f + str.substr(1)
            }

            function redirect() {
                $location.path('/')
            }

            function showError(err) {
                $scope.err = err
            }

        })

}())
