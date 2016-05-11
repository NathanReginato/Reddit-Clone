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
      templateUrl: './app/posts/post.directive.html'
    }
  }

})();
