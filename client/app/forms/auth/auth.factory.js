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
      console.log(formValues);
      // return $http.post('http://localhost:3000/api/v1/signup', formValues)
      // .then(function(res) {
      //
      // })
    }

    function login(formValues) {
      console.log(formValues);
      // return $http.post('http://localhost:3000/api/v1/login', formValues)
      // .then(function(res) {
      //
      // })
    }

    function logout(formValues) {
      console.log(formValues);
      // return $http.post('http://localhost:3000/api/v1/logout', formValues)
      // .then(function(res) {
      //
      // })
    }
  }
})();
