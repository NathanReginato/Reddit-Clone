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

  controller.$inject = ['postsService', 'newPostService', '$scope'];

  function controller(postsService, newPostService, $scope) {
    var vm = this;
    postsService.get().then(function(posts){
      vm.posts = posts
    })

     $scope.$watch(function(){
       return postsService.getCurrentPosts();
     }, function(newValue){
         vm.posts = newVal;
     });

  }
})();
