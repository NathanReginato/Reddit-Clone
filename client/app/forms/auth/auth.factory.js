(function() {
  "use strict"

  angular.module('reddit')
  .factory('authService', factory)

  factory.$inject= ['$http', '$localStorage', '$state'];

  function factory ($http, $localStorage, $state) {
    return {
      signup: signup,
      login: login,
    }

    function signup(formValues) {
      return $http.post('http://localhost:3000/api/v1/signup', formValues)
      .then(function(res) {
        $localStorage.$default({ token: res.data.token });
        $state.go('app')
      })
      .catch(function(err){
        return err
      })
    }

    function login(formValues) {
      return $http.post('http://localhost:3000/api/v1/login', formValues)
      .then(function(res) {
        $localStorage.$default({ token: res.data.token });
        $state.go('app')
      })
      .catch(function(err){
        return err
      })
    }
  }
})();
