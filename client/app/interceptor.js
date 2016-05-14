angular.module('reddit')
  .factory('authInterceptor', function ($location) {
    return {
      request: function(config) {
        if (localStorage.getItem('token')) {
          config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
        }

        return config;
      },

      responseError: function(response) {
        if (response.status == 403) {
          localStorage.clear();
          $location.path('/');
        }
        return response;
      }
    };
  })
