(function() {
  'use strict'

  angular.module('reddit')
  .directive('layout', directive);

  function directive() {
    return {
      restrict: 'E',
      templateUrl: './app/layout/layout.directive.html',
      controller: function () {
        console.log("I was called");
      }
    }
  }

})();
