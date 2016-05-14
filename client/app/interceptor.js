angular.module('reddit').factory('authInterceptor', function ($location) {
  return {
    request: function(config) {
      console.log(config);
      return config;
    },

    responseError: function(response) {
      console.log(response);
      return response;
      }
    }
  });
