var dailySun = angular.module("dailySun", ['ngRoute']);
dailySun.config(function($routeProvider){
   $routeProvider

   //These are your routes for directing to the different pages.
   .when("/", {
        templateUrl: "partials/directory.html",
        controller: "appleFeatureController",
        controllerAs: "AC"
     })
   .when("/applesFeature", {
      templateUrl: "partials/appleFeature/appleFeature.html",
      controller: "appleFeatureController",
      controllerAs: "AC"
   })
   .when("/sportTemplate", {
      templateUrl: "partials/sportTemplate/sportsTemplate.html",
      controller: "appleFeatureController",
      controllerAs: "AC"
   })
   .when("/appPromo", {
      templateUrl: "partials/appPromo/appPromo.html",
      controller: "appleFeatureController",
      controllerAs: "AC"
   })
     
});
