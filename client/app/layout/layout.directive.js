(function() {
  'use strict'

  angular.module('reddit')
  .directive('redditLayout', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: './app/layout/layout.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['$scope', 'simpleObj']

  function controller($scope, simpleObj) {
    console.log($scope.simpleObj);
    vm.currentUser = simpleObj
  }

})();
