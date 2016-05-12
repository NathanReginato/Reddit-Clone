(function() {
  'use strict'

  angular.module('reddit')
  .directive('commentForm', directive);

  function directive() {
    return {
      scope: {
        postid: '='
      },
      bindToController:true,
      restrict: 'E',
      templateUrl: './app/forms/comment/comment.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['newCommentService']

  function controller(newCommentService) {
    var vm = this;
    vm.submitComment = function () {
      newCommentService.new(vm.comment, vm.postid)
    }
  }

})();
