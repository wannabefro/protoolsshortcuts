'use strict';

angular.module('protools', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'partials/protools-shortcuts.html', controller: ProtoolsCtrl}).
      otherwise({redirectTo: '/'});
  }]);
