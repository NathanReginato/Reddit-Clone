(function() {
  'use strict'

  angular.module('reddit')
  .directive('postForm', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/forms/post/form.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = []

  function controller() {
    var vm = this;
    vm.submitPost = function () {
      console.log(vm.post);
    }
  }

})();
