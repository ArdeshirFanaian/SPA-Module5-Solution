(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://afanaian-m5-solution.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
