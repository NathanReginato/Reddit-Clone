angular.module('reddit').run(function ($rootScope, $state, $window) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.$$route.loggedIn && !$localStorage.token) {
      $state.go('app');
    }
  });
});
