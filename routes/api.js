const express = require('express');
const router = express.Router();
const WineModel = require('../models/wine_model');

// set reply to "localhost:4000/api/wines?pwineid=value&pdo=value&pwinery=value get request
// get wines list from the db
router.get('/wines', function(req, res, next) {
  console.log('GET /wines request');

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  let pwineid = req.query.wineid;
  let pdo = req.query.do;
  let pwinery = req.query.winery;

  if (pwineid == null) pwineid = '';
  if (pdo == null) pdo = '';
  if (pwinery == null) pwinery = '';


  WineModel.find(
      {
        API_winename: new RegExp(pwineid, 'i'),
        API_denomination_of_origen: new RegExp(pdo, 'i'),
        API_winery: new RegExp(pwinery, 'i')
      }
    ).then(function(listWines){
      res.send(listWines);
  }).catch(next);


});

// set reply to "server:4000/api/wine?id=2
// get wine from the db
router.get('/wine', function(req, res, next) {
  console.log('GET /api/wine request ' + 'id: ' + req.query.id);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  let pid = req.query.id;
  if (pid == null) pid = '';

  WineModel.findOne({API_id: pid}).then(function(wine){
      res.send(wine);
  }).catch(next);

});

module.exports = router;
