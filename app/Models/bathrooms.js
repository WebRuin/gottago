var mongoose = require('mongoose');

// Create a new schema for our tweet data
var schema = new mongoose.Schema({
    id          : Number
  , name        : String
  , address     : Boolean
  , city        : String
  , state       : String
  , zip         : String
});

// Create a static getTweets method to return tweet data from the db
schema.statics.getBathrooms = function(page, skip, callback) {

  var bathrooms = []

  // Query the db, using skip and limit to achieve page chunks
  Tweet.find({},'twid active author avatar body date screenname',{skip: start, limit: 10}).sort({date: 'desc'}).exec(function(err,docs){

    // If everything is cool...
    if(!err) {
      bathrooms = docs;  // We got tweets
      bathrooms.forEach(function(tweet){
        bathrooms.active = true; // Set them to active
      });
    }

    // Pass them back to the specified callback
    callback(bathrooms);

  });

};

// Return a Tweet model based upon the defined schema
module.exports = Tweet = mongoose.model('Tweet', schema);
