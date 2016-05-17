(function() {
  'use strict'

  angular.module('reddit')
  .config(setupRoutes);

  setupRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider'
  ];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $httpProvider.interceptors.push("authInterceptor");

    $stateProvider
      .state('app', {
        url: "/",
        template: "<reddit-layout></reddit-layout>",
        resolve:{
          simpleObj: function(){
            return {value: 'simple!'};
         },
        }
      })
      .state('auth', {
        url: "/auth",
        template: "<reddit-auth></reddit-auth>",
        module: 'auth'
      });
  }

})();
