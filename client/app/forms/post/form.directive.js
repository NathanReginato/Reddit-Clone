(function() {
  'use strict'

  angular.module('reddit')
  .directive('postForm', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/forms/post/form.directive.html'
    }
  }

})();
