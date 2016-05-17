(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditComment', directive);

  function directive() {
    return {
      scope: {
        comment: '='
      },
      bindToController: true,
      restrict: 'E',
      templateUrl: './app/comments/comment.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['postsService', 'newPostService']

  function controller(postsService) {
    var vm = this;
    console.log(vm.comment);
    vm.deleteComment = function(comment_id) {
      postsService.deleteComment(comment_id)
    }
  }
})();
