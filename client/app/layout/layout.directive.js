(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditLayout', directive);

  function directive() {
    return {
      restrict: 'E',
      templateUrl: './app/layout/layout.directive.html'
    }
  }

})();
