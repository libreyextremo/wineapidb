const mocha = require('mocha');
const assert = require('assert');
const WineModel = require('../models/wine_model');


describe('Wine collection tests', function(){

  //tests
  it('Mocha works', function(){
    assert('Ok' === 'Ok');
  });

  // saving a record in wine collection
  it('Saving a record in wine collection', function(done){

    var wineRecord1 = new WineModel({
      API_id: '1',
      API_winename: 'Finca Antigua Tempranillo',
      API_description: 'Red wine Barrel. 6 months in American oak barrels.',
      API_characteristics: 'Finca Antigua Tempranillo is a red wine from D.O. La Mancha produced by Finca Antigua.' +
      'This wine is a single-variety of Tempranillo (100%). The grapes to make this wine were harvested the second week ' +
      'of September. Regarding the vinification, the grapes fermented in stainless steel deposits with temperature control, ' +
      'and then they were macerated for 19 days. Lastly, the wine was aged for 8 months in American oak barrels.',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Finca Antigua',
      API_variety: 'Tempranillo',
      API_volume: '75 cl.',
      API_alcohol: '14.0%',
      API_serve: '16ºC',
      API_rating: 90,
      API_rating_entity: 'W.O.',
      API_price: 6.3,
      API_price_currency: '€',
      API_url_picture: 'wine_1.jpg'
    });

    var wineRecord2 = new WineModel({
      API_id: '2',
      API_winename: 'Maravides 12 meses 2014',
      API_description: 'Red wine Crianza. 12 months in oak barrels.',
      API_characteristics: 'Maravides 12 meses is a red wine from Castilla La Mancha produced by Bodegas y Viñedos Balmoral. This wine is a blend of 4 different grape varieties: Tempranillo, ' +
      'Syrah, Merlot and Cabernet Sauvignon. The grapes used to make Maravides 12 come from vinyards situated in municipality of Alpera, in Albacete. The vineyards lie at an altitude of around ' +
      '1000 metres, which results in not only the grapes but also the wine containing a great freshness. ',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Bodegas y Viñedos Balmoral',
      API_variety: 'Merlot',
      API_volume: '75 cl.',
      API_alcohol: '14.0%',
      API_serve: '18ºC',
      API_rating: 90,
      API_rating_entity: 'Peñin',
      API_price: 15.90,
      API_price_currency: '€',
      API_url_picture: 'wine_2.jpg'
    });

    var wineRecord3 = new WineModel({
      API_id: '3',
      API_winename: 'Volver 2015',
      API_description: 'Red wine Barrel.',
      API_characteristics: 'Volver is a red wine from D.O. Castilla la Mancha ' +
      'produced by Bodegas Volver. This is a monovarietal of Tempranillo.' +
      'The grapes used for Volver grow in vineyards planted in the Finca Los Juncares. ' +
      'Planted in 1957, with 29 hectares of land. The soils are sandy and limy.',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Volver',
      API_variety: 'Tempranillo',
      API_volume: '75 cl.',
      API_alcohol: '15.0%',
      API_serve: '16ºC',
      API_rating: 92,
      API_rating_entity: 'Parker',
      API_price: 11.25,
      API_price_currency: '€',
      API_url_picture: 'wine_3.jpg'
    });

    var wineRecord4 = new WineModel({
      API_id: '4',
      API_winename: 'Volver Magnum 2014',
      API_description: 'Red wine Barrel.',
      API_characteristics: 'Volver is a red wine from D.O. Castilla la Mancha ' +
      'produced by Bodegas Volver. This is a monovarietal of Tempranillo.' +
      'The grapes used for Volver grow in vineyards planted in the Finca Los Juncares. ' +
      'Planted in 1957, with 29 hectares of land. The grape harvest is done by hand and a selection of the best grapes are chosen later at the winery on the table.',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Volver',
      API_variety: 'Tempranillo',
      API_volume: '75 cl.',
      API_alcohol: '15.0%',
      API_serve: '16ºC',
      API_rating: 93,
      API_rating_entity: 'Parker',
      API_price: 11.25,
      API_price_currency: '€',
      API_url_picture: 'wine_4.jpg'
    });

    var wineRecord5 = new WineModel({
      API_id: '5',
      API_winename: 'Paso a Paso Orgánico',
      API_description: 'Red wine Barrel.',
      API_characteristics: 'This wine is made solely from Tempranillo (100%) grapes ' +
      'which come from vineyards that are over 40 years old. The vineyards are situated at ' +
      'around 660 metre above sea level and are on Sandy soils. The area is home to an extreme ' +
      'continental climate, characterised by long icey winters and very hot summers. The montains ' +
      'act as a natural barrier from the sea humidity, resulting in a drier climate',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Volver',
      API_variety: 'Tempranillo',
      API_volume: '75 cl.',
      API_alcohol: '14.4%',
      API_serve: '16ºC',
      API_rating: 90,
      API_rating_entity: 'Peñin',
      API_price: 6.50,
      API_price_currency: '€',
      API_url_picture: 'wine_5.jpg'
    });

    var wineRecord6 = new WineModel({
      API_id: '6',
      API_winename: 'Paso a Paso Tempranillo',
      API_description: 'Red wine Barrel.',
      API_characteristics: 'Paso a Paso Tempranillo is a red wine from DO La Mancha ' +
      'prepared by Bodegas Volver, one of the wineries in the Jorge Ordóñez group which, ' +
      'together with the supervision of winemaker Rafael Canizares, has produced quality wines since 2004.',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Volver',
      API_variety: 'Tempranillo',
      API_volume: '75 cl.',
      API_alcohol: '14.0%',
      API_serve: '16ºC',
      API_rating: 89,
      API_rating_entity: 'Parker',
      API_price: 6.50,
      API_price_currency: '€',
      API_url_picture: 'wine_6.jpg'
    });

    var wineRecord7 = new WineModel({
      API_id: '7',
      API_winename: 'Envínate Albahra 2015',
      API_description: 'Red wine Aged in cement eggs.',
      API_characteristics: 'Envínate Albahra is a red wine produced by Envínate in Albacete. ' +
      'The winery was founded by four young adults who met while studying oenology, and decided to ' +
      'set up Envínate to develop wines in the different zones from where they came from.',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Envínate',
      API_variety: 'Garnacha Tintorera',
      API_volume: '75 cl.',
      API_alcohol: '14.0%',
      API_serve: '',
      API_rating: 93,
      API_rating_entity: 'Peñin',
      API_price: 10.65,
      API_price_currency: '€',
      API_url_picture: 'wine_7.jpg'
    });

    var wineRecord8 = new WineModel({
      API_id: '8',
      API_winename: 'Martué 2013',
      API_description: 'Red wine Crianza.',
      API_characteristics: 'Red wine which results of an exhaustive blend of Cabernet ' +
      'Sauvignon (33%), Merlot (22%), Tempranillo (21%), Petit Verdot (13%) and Syrah (11%). ' +
      'Each variety has been fermented separately and blended subsequently.',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Martué',
      API_variety: 'Cabernet Sauvignon, Tempranillo, Petit Verdot, Syrah, Merlot',
      API_volume: '75 cl.',
      API_alcohol: '14.5%',
      API_serve: '16ºC',
      API_rating: 88,
      API_rating_entity: 'Peñin',
      API_price: 7.45,
      API_price_currency: '€',
      API_url_picture: 'wine_8.jpg'
    });

    var wineRecord9 = new WineModel({
      API_id: '9',
      API_winename: 'Finca Antigua Merlot 2013',
      API_description: 'Red wine Oak.',
      API_characteristics: 'This wine is a varietal Merlot (100%) from Sierra de la Higuera, its own vineyard of 40 hectares is planted 855 metres above sea level, on loam soil high in calcium carbonate. In terms of processing, fermentation takes place in stainless steel tanks with temperature control. Subsequently, the wine goes through a maceration for 18 days and finally a short aging for 5 months in French oak barrels.',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Finca Antigua',
      API_variety: 'Merlot',
      API_volume: '75 cl.',
      API_alcohol: '14.0%',
      API_serve: '16ºC',
      API_rating: 87,
      API_rating_entity: 'Peñin',
      API_price: 6.60,
      API_price_currency: '€',
      API_url_picture: 'wine_9.jpg'
    });

    var wineRecord10 = new WineModel({
      API_id: '10',
      API_winename: 'Pago Florentino 2014',
      API_description: 'Red wine Reserva.',
      API_characteristics: 'This wine is a single variety Cencibel grown at Finca La Solana located on a slope of the mountain, an area of granite clay stones with a large mineral load.',
      API_denomination_of_origen: 'D.O. La Mancha',
      API_winery: 'Pago Florentino',
      API_variety: 'Cencíbel',
      API_volume: '75 cl.',
      API_alcohol: '14.5%',
      API_serve: '16ºC',
      API_rating: 90,
      API_rating_entity: 'Peñin',
      API_price: 25.05,
      API_price_currency: '€',
      API_url_picture: 'wine_10.jpg'
    });

    wineRecord1.save().then(function() {
      assert(wineRecord1.isNew === false);
      wineRecord2.save().then(function() {
        assert(wineRecord2.isNew === false);
        wineRecord3.save().then(function() {
          assert(wineRecord3.isNew === false);
          wineRecord4.save().then(function() {
            assert(wineRecord4.isNew === false);
            wineRecord5.save().then(function() {
              assert(wineRecord5.isNew === false);
              wineRecord6.save().then(function() {
                assert(wineRecord6.isNew === false);
                wineRecord7.save().then(function() {
                  assert(wineRecord7.isNew === false);
                  wineRecord8.save().then(function() {
                    assert(wineRecord8.isNew === false);
                    wineRecord9.save().then(function() {
                      assert(wineRecord9.isNew === false);
                      wineRecord10.save().then(function() {
                        assert(wineRecord10.isNew === false);
                        done();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

  });

});
