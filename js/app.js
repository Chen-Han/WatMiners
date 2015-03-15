/**
 * Created by Han Chen on 24/02/2015.
 */
var app=angular.module('app',["ui.router","ui.bootstrap","firebase"])
  .run( function( $rootScope ) {
    // Cut and paste the "Load the SDK" code from the facebook javascript sdk page.
    // Load the facebook SDK asynchronously
    /*(function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));*/
  });

var http = require("http");
var mongo = require("./db/database.js");
var user = require("./db/user.js");

var createUser = function(data, callback){
  mongo.insert(user(data), "user", callback);
}

var server = http.createServer(function(request, response) {

    if (request.method == "POST"){
        request.on("data", function(jsonBody){
            var parsedBody = JSON.parse(jsonBody);
            console.log(parsedBody);

            if(parsedBody.method == "create"){
                createUser(parsedBody, function(){
                  response.writeHead(200, {
                    "Content-Type": "plain/text",
                    "Content-Language":"utf-8"
                  });
                  response.write(JSON.stringify(parsedBody));
                  response.end();
                })
            }
        });
    }
});

server.listen(8080);
console.log("Server is listening");
