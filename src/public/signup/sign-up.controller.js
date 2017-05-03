(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', '$scope'];
function SignUpController(MenuService, $scope) {
  var signUpCtrl = this;

  signUpCtrl.submit = function (favoriteDish) {
    var promise = MenuService.checkFavoriteDish(favoriteDish);

    promise.then(function(response) {

      signUpCtrl.favorite = response.data;
      window.user = signUpCtrl.user;
      window.favMenuItem = signUpCtrl.user.favorite;
      signUpCtrl.saveMsg = true;
    })
    .catch(function (error) {
      signUpCtrl.falseMenuItem = true;
    });
  };
}

})();
