angular.module('reddit').run(function ($rootScope, $state, $localStorage) {
  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    console.log('state change');
    if (!$localStorage.token) {
        e.preventDefault();
        $state.go('app');
    }
  });
});

// toState.module === 'auth' &&
