(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditLogin', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/forms/auth/login.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['authService']

  function controller(authService) {
    var vm = this;
    vm.loginSubmit = function () {
      console.log('login ctrl');
      authService.login(vm.login)
    }
  }

})();
