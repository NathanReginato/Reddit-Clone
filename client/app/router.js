(function() {
  'use strict'

  angular.module('reddit')
  .config(setupRoutes);

  setupRoutes.$inject = [
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
  ];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $httpProvider.interceptors.push("authInterceptor");

    $stateProvider
      .state('app', {
        url: "/",
        template: "<reddit-layout></reddit-layout>"
      })
      .state('auth', {
        url: "/auth",
        template: "<reddit-auth></reddit-auth>"
      });
  }

})();
