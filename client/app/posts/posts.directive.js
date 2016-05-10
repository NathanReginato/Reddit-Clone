(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditComments', directive);

  function directive() {
    return {
      restrict: 'E',
      templateUrl: './app/posts/posts.directive.html',
      controller: function () {
        console.log("I was called");
      }
    }
  }
})();
