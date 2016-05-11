(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditComments', directive);

  function directive() {
    return {
      restrict: 'E',
      templateUrl: './app/posts/posts.directive.html',
      controller: controller
    }
  }

  controller.$inject = ['postsService']

  function controller(postsService) {
    var vm = this;
    activate();

    function activate() {
      postsService.get().then(function(posts) {
        vm.posts = posts;
      })
    }
  }
})();
