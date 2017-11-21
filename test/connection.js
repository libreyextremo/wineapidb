const mongoose = require('mongoose');

// use ES6 promises library instead of mongoose promise library
mongoose.Promise = global.Promise;

// It should connect to the database before tests run
before(function(done){

  // Connect to mongodb
  mongoose.connect('mongodb://localhost/wineapidb', { useMongoClient: true });
  // launch when connection is opened
  console.log('Launch connection.js');
  mongoose.connection.once('open', function(){
    console.log('MongoDB connection has been made succesfully.');
    done();
  }).on('error', function(error){
    console.log('MongoDB connection error:', error);
  });

});

// These actions will be done before each test
beforeEach(function(done){
  mongoose.connection.collections.wines.drop(function(){
  done();
  });
});

// These actions will be done after each test
afterEach(function(done){
  //console.log('after test actions: nothing');
  done();
});
