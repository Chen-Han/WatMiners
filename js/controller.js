/**
 * Created by Han Chen on 24/02/2015.
 */
app.controller("InputCtrl", ["$scope", "$rootScope", function ($scope,$rootScope) {
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
}])
  .controller("IntroCtrl",["$scope", "$rootScope","$state", "$stateParams", function ($scope,$rootScope,$state,$stateParams) {
    $scope.login=function(){
      $state.go("ranking-input");
    };
  }])

  .controller("DisplayCtrl",["$scope", "$rootScope", function ($scope,$rootScope) {

  }]);