'use strict';

angular.module('mygab.components')
        .controller('navbarComponentCtrl',
                function ($scope, appGlobalName, $element) {

                    $scope.test = $element;

                    $scope.appGlobalName = appGlobalName;

                })
        .component('navbar', function () {

            return {
                controller: 'navbarComponentCtrl'
            };

        });
