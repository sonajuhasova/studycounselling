mapboxgl.accessToken = 'pk.eyJ1Ijoic29uYWp1aGFzb3ZhIiwiYSI6ImNrN2QxNmt1YjA1aWIza3FrY3F6cmEyZnAifQ.yQnjU9hjmTyVa7hbbo2z-A';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/sonajuhasova/ck7d24w5p0ckv1ipou5dgwqu6',
    center: [10.160, 56.119],
    zoom: 15,
    pitch: 60,
    bearing: -17.6,
    container: 'map',
    antialias: true
});

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function () {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',

                // use an 'interpolate' expression to add a smooth transition effect to the
                // buildings as the user zooms in
                'fill-extrusion-height': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'height']
],
                'fill-extrusion-base': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'min_height']
],
                'fill-extrusion-opacity': 0.6
            }
        },
        labelLayerId
    );
});

///////////////////////////////////////////////////////////////
var map2 = new mapboxgl.Map({
    style: 'mapbox://styles/sonajuhasova/ck7d24w5p0ckv1ipou5dgwqu6',
    center: [10.150, 56.117],
    zoom: 17,
    pitch: 60,
    bearing: -17.6,
    container: 'map2',
    antialias: true
});

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map2.on('load', function () {
    // Insert the layer beneath any symbol layer.
    var layers = map2.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map2.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',

                // use an 'interpolate' expression to add a smooth transition effect to the
                // buildings as the user zooms in
                'fill-extrusion-height': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'height']
],
                'fill-extrusion-base': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'min_height']
],
                'fill-extrusion-opacity': 0.6
            }
        },
        labelLayerId
    );
});
