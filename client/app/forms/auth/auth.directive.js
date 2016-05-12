(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditAuth', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/forms/auth/auth.directive.html'
    }
  }
})();
