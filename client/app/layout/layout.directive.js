(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditLayout', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/layout/layout.directive.html'
    }
  }

})();
