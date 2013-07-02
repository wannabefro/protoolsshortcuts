'use strict';

angular.module('protools', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/shortcuts', {templateUrl: 'partials/protools-shortcuts.html', controller: ProtoolsCtrl}).
      otherwise({redirectTo: '/shortcuts'});
  }]);
