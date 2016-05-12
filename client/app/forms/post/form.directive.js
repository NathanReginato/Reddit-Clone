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

  controller.$inject = ['newPostService']

  function controller(newPostService) {
    var vm = this;
    vm.submitPost = function () {
      newPostService.new(vm.post)
    }
  }

})();
