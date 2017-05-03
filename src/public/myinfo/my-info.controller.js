(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'favoriteMenuItem', '$scope'];
function MyInfoController(MenuService, favoriteMenuItem, $scope) {
  var myInfoCtrl = this;
  myInfoCtrl.favoriteMenuItem = favoriteMenuItem;
  $scope.user = window.user;
  $scope.favMenuItem = window.favMenuItem;
  if ($scope.user==undefined) {
    $scope.error=true;
  } else {
    $scope.error = false;
  }
}

})();
