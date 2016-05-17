(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditNav', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/layout/nav.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = [
    '$localStorage', '$state'
  ]

  function controller($localStorage, $state) {
    var vm = this;
    vm.showForm = false;
    vm.logout = function() {
      $localStorage.$reset()
      $state.go('auth')
    };
  }
})();
