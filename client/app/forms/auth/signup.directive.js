(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditSignup', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/forms/auth/signup.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['authService']

  function controller(authService) {
    var vm = this;
    vm.signupSubmit = function () {
      console.log('ctrl sign');
      authService.signup(vm.signup)
    }
  }

})();
