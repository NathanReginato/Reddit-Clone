(function() {
  "use strict"

  angular.module('reddit')
  .factory('authService', factory)

  factory.$inject= ['$http', '$localStorage', '$state'];

  function factory ($http, $localStorage, $state) {
    return {
      signup: signup,
      login: login,
      logout: logout
    }

    function signup(formValues) {
      return $http.post('http://localhost:3000/api/v1/signup', formValues)
      .then(function(res) {
        console.log(res);
        $localStorage.$default({ token: res.data.token });
        $state.go('app')
      })
    }

    function login(formValues) {
      return $http.post('http://localhost:3000/api/v1/login', formValues)
      .then(function(res) {

      })
    }

    function logout(formValues) {
      return $http.post('http://localhost:3000/api/v1/logout', formValues)
      .then(function(res) {

      })
    }
  }
})();
