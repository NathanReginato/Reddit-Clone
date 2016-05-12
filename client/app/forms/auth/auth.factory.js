(function() {
  "use strict"

  angular.module('reddit')
  .factory('authService', factory)

  factory.$inject= ['$http'];

  function factory ($http) {
    return {
      signup: signup,
      login: login,
      logout: logout
    }

    function signup(formValues) {
      return $http.post('http://localhost:3000/auth/signup', formValues)
      .then(function(res) {

      })
    }

    function login(formValues) {
      return $http.post('http://localhost:3000/auth/login', formValues)
      .then(function(res) {

      })
    }

    function logout(formValues) {
      return $http.post('http://localhost:3000/auth/logout', formValues)
      .then(function(res) {

      })
    }
  }
})();
