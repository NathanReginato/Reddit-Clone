angular.module('reddit')
  .run(function ($rootScope, $state, $localStorage) {
  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      if ($localStorage.token && fromState.name === 'app') {
        e.preventDefault();
      }
    })
});

// toState.module === 'auth' &&
