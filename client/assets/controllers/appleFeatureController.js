dailySun.controller("appleFeatureController", ['appleFeatureFactory', '$http', '$window', '$location', '$scope', function(appleFeatureFactory,$http,$window,$location,$scope){

  console.log("Controller Loaded");
  this.test = function() {
    appleFeatureFactory.testing(function(res) {
    });
  }
  
}])
      