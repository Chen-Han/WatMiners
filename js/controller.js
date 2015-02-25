/**
 * Created by Han Chen on 24/02/2015.
 */
app.controller("InputCtrl", ["$scope", "$rootScope","$service","$state", "$stateParams",
  function ($scope,$rootScope,$service,$state,$stateParams) {
  if($service.authData===null){
    $state.go("home");
  }
/*  else if($service.didUserRank()){
    $scope.go("display-table");
  }*/
  else{
    $scope.rankings=[];
    function createItem (){
      return {
        jobID:"",
        ranking:"Ranked",
        preference:0
      };
    }
    //initiating rankings
    for(var i=0;i<3;i++){
      $scope.rankings.push(createItem());
    }
    $scope.addAnother=function(){
      $scope.rankings.push(createItem());
    };
    $scope.submit=function(){
      var onSuccess=function(){
        $state.go("display-table");
      };
      var onError=function(errorMessage){
        $scope.message=errorMessage;
      };
      $service.addRankings(angular.copy($scope.rankings),onSuccess,onError);
    };
  }
}])
  .controller("IntroCtrl",["$scope", "$rootScope","$state", "$stateParams","$firebaseAuth","$service",
    function ($scope,$rootScope,$state,$stateParams,$firebaseAuth,$service) {
      var ref = new Firebase("https://watminers.firebaseio.com");
      $scope.authObj = $firebaseAuth(ref);

      $scope.login=function(){
        $scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
          $service.authData=authData;
          console.log("Logged in as:", authData);
          $state.go("ranking-input");
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
      };
  }])

  .controller("DisplayCtrl",["$scope", "$rootScope", function ($scope,$rootScope) {

  }]);