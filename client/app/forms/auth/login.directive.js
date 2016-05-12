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

  controller.$inject = ['newPostService']

  function controller(newPostService) {
    var vm = this;
    vm.submitPost = function () {
      newPostService.new(vm.post)
    }
  }

})();
