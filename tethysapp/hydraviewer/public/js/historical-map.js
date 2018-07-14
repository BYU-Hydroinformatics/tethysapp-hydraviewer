$(function() {

  // With JQuery
  $('#slider1').slider({
  	formatter: function(value) {
  		return 'Current value: ' + value;
  	}
  });

  // Get the Open Layers map object from the Tethys MapView
  var map = TETHYS_MAP_VIEW.getMap();
  var $layers_element = $('#layers');

  var base_map = new ol.layer.Tile({
            crossOrigin: 'anonymous',
            source: new ol.source.XYZ({
                // attributions: [attribution],
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/' +
                'World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

  map.getLayers().item(0).setVisible(false);
  map.addLayer(base_map);

  water_layer = $layers_element.attr('data-water-url');

  var water_layer = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: water_layer
            })
        });

  // // Add the overlay to the map
  map.addLayer(water_layer)

  return
});