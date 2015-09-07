/* jshint asi:true */
(function() {

    'use strict'

    angular.module('sightings')
        .controller('AccountController', function($scope, user, Auth, FBRef, $firebaseObject, $timeout) {
            var profile = $firebaseObject(FBRef.child('users/' + user.uid))

            profile.$bindTo($scope, 'profile')

            $scope.user = user

            $scope.messages = []

            $scope.logout = function() {
                Auth.$unauth()
            }

            $scope.changePassword = function(oldPass, newPass, confirm) {
                $scope.err = null
                if (!oldPass || !newPass) {
                    error('Please enter all fields')
                } else if (newPass !== confirm) {
                    error('Passwords do not match')
                } else {
                    Auth.$changePassword({
                            email: profile.email,
                            oldPassword: oldPass,
                            newPassword: newPass
                        })
                        .then(function() {
                            success('Password changed')
                        }, error)
                }
            }

            $scope.changeEmail = function(pass, newEmail) {
                $scope.err = null
                Auth.$changeEmail({
                        password: pass,
                        newEmail: newEmail,
                        oldEmail: profile.email
                    })
                    .then(function() {
                        profile.email = newEmail
                        profile.$save()
                        success('Email changed')
                    })
                    .catch(error)
            };

            function error(err) {
                alert(err, 'danger')
            }

            function success(msg) {
                alert(msg, 'success')
            }

            function alert(msg, type) {
                var obj = {
                    text: msg + '',
                    type: type
                };
                $scope.messages.unshift(obj);
                $timeout(function() {
                    $scope.messages.splice($scope.messages.indexOf(obj), 1)
                }, 10000)
            }
        })
}())
