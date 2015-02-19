'use strict';

angular.module('mygab')
        .config(function ($stateProvider, stateFactory) {
            $stateProvider.state('index', stateFactory('Index', {
                url: '/',
                templateUrl: 'states/index/index-view.html'
            }));
        })
        .controller('IndexCtrl', function ($scope, $localStorage, $modal) {


            var initLocalStorage = function () {
                // Default Local Storage values
                $scope.$storage = $localStorage.$default({
                    savedGabs: []
                });

                $scope.savedGabs = $localStorage.savedGabs;
            };

            initLocalStorage();


            $scope.gabLength = {};
            $scope.gabLength.length = $localStorage.savedGabs.length;

            $scope.postGab = {content: ''};

            $scope.InsertGab = function () {
                
                $localStorage.savedGabs.push($scope.postGab);
                $scope.postGab = {};
                $scope.gabLength.length = $localStorage.savedGabs.length;
                
            };

            $scope.deleteGabs = function () {
                
                $scope.gabLength.length = 0;
                $localStorage.$reset();
                initLocalStorage();
                
            };

            $scope.deleteThisGab = function (gab) {

                $localStorage.savedGabs.splice($localStorage.savedGabs.indexOf(gab), 1);
                $scope.gabLength.length = $localStorage.savedGabs.length;

            };



            // Edit Gab Modal
            $scope.editThisGab = function (gab) {

                var moduleControllerFunction = function ($scope) {
                    
                    $scope.thisGab = gab;
                    
                };

                var editGabModal = $modal.open({
                    templateUrl: 'states/index/editGabModal.html',
                    controller: moduleControllerFunction
                });

            };
            
            console.log($scope);


        });
