(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditPost', directive);

  function directive() {
    return {
      scope: {
        post: '='
      },
      restrict: 'E',
      templateUrl: './app/posts/post.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['postsService', 'newPostService']

  function controller(postsService, newPostService) {
    var vm = this;
    vm.posts = [];
    vm.deleteComment = function(comment_id) {
      console.log('call delete');
      postsService.deleteComment(comment_id)
    }
  }
})();
