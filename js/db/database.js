var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

var url = "mongodb://localhost:27017"

var search = function(){

}

module.exports.insert = function(data, database, callback){
	MongoClient.connect(url, function(err, db){
		assert.equal(null, err);
		console.log("Connected correctly to server.");

		var collection = db.collection(database);
		collection.insert(data, function(err, result){
			callback(err, result);
			db.close();
		})
	})
}

module.exports.update = function(data, database, callback){
	MongoClient.connect(url, function(err, db){
		assert.equal(null, err);
		console.log("Connected correctly to server.");

		var collection = db.collection(database);
		collection.update(data, function(err, result){
			callback(err, result);
			db.close();
		})
	})
}

module.exports.search = function(data, database, callback){
	MongoClient.connect(url, function(err, db){
		assert.equal(null, err);
		console.log("Connected correctly to server.");

		var collection = db.collection(database);
		collection.findOne(data, function(err, result){
			callback(err, result);
			db.close();
		})
	})
}

module.exports.remove = function(data, database, callback){
	MongoClient.connect(url, function(err, db){
		assert.equal(null, err);
		console.log("Connected correctly to server.");

		var collection = db.collection(database);
		collection.insert(data, function(err, result){
			callback(err, result);
			db.close();
		})
	})
}
