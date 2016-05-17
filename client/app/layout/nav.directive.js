(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditNav', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/layout/nav.directive.html',
      controller: function () {
        var vm = this;
        vm.showForm = false;
      }
    }
  }

})();
