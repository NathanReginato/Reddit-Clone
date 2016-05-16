(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditComments', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/posts/posts.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['postsService', 'newPostService']

  function controller(postsService, newPostService) {
    var vm = this;
    postsService.get().then(function(posts){
      vm.posts = posts
    })
  }
})();
