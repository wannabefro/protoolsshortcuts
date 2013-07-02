'use strict'

function ProtoolsCtrl($scope, $http) {
  $http.get('shortcuts/protools.json').success(function(data){
    $scope.shortcuts = data;
  });

  $scope.select = function(shortcut) {
  if ($scope.selected == shortcut){
    $scope.selected = '';
  } else {
      $scope.selected = shortcut;
    }
  };

  $scope.isSelect = function(shortcut) {
    if ($scope.selected == shortcut){
      return true;
    }
  };
}


