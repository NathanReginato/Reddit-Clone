(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditPost', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/posts/post.directive.html',
      controller: function () {
        console.log("I was called");
      }
    }
  }

})();
