ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ServiceArea_1 = new ol.format.GeoJSON();
var features_ServiceArea_1 = format_ServiceArea_1.readFeatures(json_ServiceArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_ServiceArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_1.addFeatures(features_ServiceArea_1);
var lyr_ServiceArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_1, 
                style: style_ServiceArea_1,
                popuplayertitle: 'Service Area',
                interactive: true,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_1_0.png" /> 500,0000000<br />\
    <img src="styles/legend/ServiceArea_1_1.png" /> 1000,0000000<br />\
    <img src="styles/legend/ServiceArea_1_2.png" /> 1500,0000000<br />\
    <img src="styles/legend/ServiceArea_1_3.png" /> 2000,0000000<br />\
    <img src="styles/legend/ServiceArea_1_4.png" /> 2500,0000000<br />\
    <img src="styles/legend/ServiceArea_1_5.png" /> 3000,0000000<br />\
    <img src="styles/legend/ServiceArea_1_6.png" /> <br />' });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_BusStop_3 = new ol.format.GeoJSON();
var features_BusStop_3 = format_BusStop_3.readFeatures(json_BusStop_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BusStop_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStop_3.addFeatures(features_BusStop_3);
var lyr_BusStop_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStop_3, 
                style: style_BusStop_3,
                popuplayertitle: 'Bus Stop',
                interactive: true,
                title: '<img src="styles/legend/BusStop_3.png" /> Bus Stop'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_ServiceArea_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_BusStop_3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_ServiceArea_1,lyr_Roads_2,lyr_BusStop_3];
lyr_ServiceArea_1.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_Roads_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', });
lyr_BusStop_3.set('fieldAliases', {'name': 'name', 'highway': 'highway', 'Foto': 'Foto', });
lyr_ServiceArea_1.set('fieldImages', {'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', });
lyr_BusStop_3.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ServiceArea_1.set('fieldLabels', {'id': 'no label', 'cost_level': 'inline label - always visible', });
lyr_Roads_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_BusStop_3.set('fieldLabels', {'name': 'header label - always visible', 'highway': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_BusStop_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});