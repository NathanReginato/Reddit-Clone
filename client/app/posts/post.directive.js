(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditPost', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/posts/post.directive.html',
      controller: controller
    }
  }

  controller.$inject = ['postsService']

  function controller(postsService) {
    var vm = this;
    activate();

  function activate() {
    postsService.get().then(function(posts) {
      console.log(posts);
      vm.posts = posts;
    })
  }

  }
})();
