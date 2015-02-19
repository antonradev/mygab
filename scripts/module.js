'use strict';

var components = angular.module('mygab.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('mygab', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'mygab.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'restangular',
  'ngSanitize',
  'ngTouch',
  'ngStorage'
]);
angular.componentFactory.moduleDecorator(app);