/**
 * Created by Han Chen on 24/02/2015.
 */
app.service("$service",function($http){
  this.authData=null;
  this.getUserRankings=function(){
    $http.get("https://watminers.firebaseio.com/users/jack/name.json")
      .then(function(response){

      });
  };
  //TODO didUserRank() boolean
  //TODO addRankings() @param userdata onSuccess, onError
});