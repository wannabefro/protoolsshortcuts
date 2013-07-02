'use strict'

function ProtoolsCtrl($scope, $http) {
  $http.get('shortcuts/protools.json').success(function(data){
    $scope.shortcuts = data;
  });

  $scope.select = function(shortcut) {
  $scope.selected = shortcut;
  };
}


