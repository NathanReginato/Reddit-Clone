angular.module('reddit')
.factory('authInterceptor', function ($location, $localStorage) {
  return {
    request: function(config) {
      if ($localStorage.token) {
        config.headers.Authorization = 'Bearer ' + $localStorage.token;
      }
      return config;
    },

    responseError: function(response) {
      if (response.status == 403) {
        $localStorage.$reset();
        $state.go('auth');
      }
      return response;
      }
    }
  });
