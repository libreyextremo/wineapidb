const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and model
const WineModelSchema = new Schema({
  API_id: String,
  API_winename: String,
  API_description: String,
  API_characteristics: String,
  API_denomination_of_origen: String,
  API_winery: String,
  API_variety: String,
  API_volume: String,
  API_alcohol: String,
  API_serve: String,
  API_rating: Number,
  API_rating_entity: String,
  API_price: Number,
  API_price_currency: String,
  API_url_picture: String
});

// set relation between ClientModelSchema and clientmodel
const WineModel = mongoose.model('wines', WineModelSchema);

module.exports = WineModel;
