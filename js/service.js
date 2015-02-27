/**
 * Created by Han Chen on 24/02/2015.
 */
app.service("$service",["$http","$firebaseAuth","$firebase",
  function($http,$firebaseAuth,$firebase){
  var service=this;
  this.authObj=null;
  this.refRanking=null;
  this.refJob=null;
  this.syncRanking=null;
  this.authData=null;
  this.login=function(onSuccess,onError){
    service.refRanking = new Firebase("https://watminers.firebaseio.com/rankings");
    service.authObj = $firebaseAuth(service.refRanking);
    service.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
      service.authData=authData;
      console.log("Logged in as:", authData); //for debug
      if(onSuccess) onSuccess();
      Firebase.goOffline();
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };
  this.getUserRankings=function(){
    $http.get("https://watminers.firebaseio.com/users/jack/name.json")
      .then(function(response){

      });
  };
  //TODO didUserRank() boolean
    this.didUserRank=function(onRanked,onNotRanked){
      Firebase.goOnline();
      var ref = new Firebase("https://watminers.firebaseio.com/rankings/"+service.authData.uid);
      var sync=$firebase(ref).$asArray();
      sync.$loaded().then(function(){
        Firebase.goOffline();
        if( sync.length>0 && onRanked)
        {
          onRanked();
        }else if(onNotRanked){
          onNotRanked();
        }
      }).catch(function(error){
        Firebase.goOffline();
        if(onNotRanked){
          onNotRanked();
        }
      });
    };
  //TODO addRankings() @param userdata onSuccess, onError
  this.addRankings=function(rankings,onSuccess,onError){
    Firebase.goOnline();
    var ref = new Firebase("https://watminers.firebaseio.com/rankings/"+service.authData.uid);
    var sync=$firebase(ref).$asArray();
    console.log(rankings);
    //service.syncRanking=$firebase(service.refRanking); //initialize syncing
    for(var i=0;i<rankings.length;i++){
      console.log(rankings[i]);
      rankings[i].displayName=service.authData.facebook.displayName;
    }
    /*service.syncRanking.$set(service.authData.uid,rankings).then(function(ref){},function(error){
      console.log(error);
    });*/
    sync.$add(rankings).then(function(ref){
      if (onSuccess) onSuccess();
      Firebase.goOffline();
    },function(error){
      console.log(error);
      Firebase.goOffline();
    });

    /*if(!service.refJob){
      service.refJob=new Firebase("https://watminers.firebaseio.com/jobs");
      //do something
    }*/
  };
    this.getRankings=function(onSuccess,onError){
      Firebase.goOnline();
      if(service.refRanking){
      var sync= $firebase(service.refRanking).$asArray();
      sync.$loaded().then(function(){
        if(onSuccess) onSuccess(sync);
        Firebase.goOffline();
      }).catch(function(error){
        console.log(error);
        Firebase.goOffline();
      });
      }else if(onError) onError();
    };
}]);