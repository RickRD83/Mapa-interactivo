ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([616234.610000, 9639897.526820, 616878.243880, 9640420.378942]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Areadeestudio_3 = new ol.format.GeoJSON();
var features_Areadeestudio_3 = format_Areadeestudio_3.readFeatures(json_Areadeestudio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Areadeestudio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areadeestudio_3.addFeatures(features_Areadeestudio_3);
var lyr_Areadeestudio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areadeestudio_3, 
                style: style_Areadeestudio_3,
                popuplayertitle: 'Area de estudio',
                interactive: true,
                title: '<img src="styles/legend/Areadeestudio_3.png" /> Area de estudio'
            });
var format_Informaciondelarea_4 = new ol.format.GeoJSON();
var features_Informaciondelarea_4 = format_Informaciondelarea_4.readFeatures(json_Informaciondelarea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Informaciondelarea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informaciondelarea_4.addFeatures(features_Informaciondelarea_4);
var lyr_Informaciondelarea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Informaciondelarea_4, 
                style: style_Informaciondelarea_4,
                popuplayertitle: 'Informacion del area',
                interactive: true,
                title: '<img src="styles/legend/Informaciondelarea_4.png" /> Informacion del area'
            });
var format_AreasAfectadas_5 = new ol.format.GeoJSON();
var features_AreasAfectadas_5 = format_AreasAfectadas_5.readFeatures(json_AreasAfectadas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_AreasAfectadas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasAfectadas_5.addFeatures(features_AreasAfectadas_5);
var lyr_AreasAfectadas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasAfectadas_5, 
                style: style_AreasAfectadas_5,
                popuplayertitle: 'Areas Afectadas',
                interactive: true,
    title: 'Areas Afectadas<br />\
    <img src="styles/legend/AreasAfectadas_5_0.png" /> Alto<br />\
    <img src="styles/legend/AreasAfectadas_5_1.png" /> Medio<br />\
    <img src="styles/legend/AreasAfectadas_5_2.png" /> Bajo<br />' });
var format_Linderosdelasareasafectadas_6 = new ol.format.GeoJSON();
var features_Linderosdelasareasafectadas_6 = format_Linderosdelasareasafectadas_6.readFeatures(json_Linderosdelasareasafectadas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Linderosdelasareasafectadas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linderosdelasareasafectadas_6.addFeatures(features_Linderosdelasareasafectadas_6);
var lyr_Linderosdelasareasafectadas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linderosdelasareasafectadas_6, 
                style: style_Linderosdelasareasafectadas_6,
                popuplayertitle: 'Linderos de las areas afectadas',
                interactive: true,
                title: '<img src="styles/legend/Linderosdelasareasafectadas_6.png" /> Linderos de las areas afectadas'
            });
var format_Informacindecalles_7 = new ol.format.GeoJSON();
var features_Informacindecalles_7 = format_Informacindecalles_7.readFeatures(json_Informacindecalles_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Informacindecalles_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informacindecalles_7.addFeatures(features_Informacindecalles_7);
var lyr_Informacindecalles_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Informacindecalles_7, 
                style: style_Informacindecalles_7,
                popuplayertitle: 'Información de calles',
                interactive: true,
    title: 'Información de calles<br />\
    <img src="styles/legend/Informacindecalles_7_0.png" /> Alto<br />\
    <img src="styles/legend/Informacindecalles_7_1.png" /> Medio<br />\
    <img src="styles/legend/Informacindecalles_7_2.png" /> Bajo<br />' });
var format_Linderos_8 = new ol.format.GeoJSON();
var features_Linderos_8 = format_Linderos_8.readFeatures(json_Linderos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Linderos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linderos_8.addFeatures(features_Linderos_8);
var lyr_Linderos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linderos_8, 
                style: style_Linderos_8,
                popuplayertitle: 'Linderos',
                interactive: true,
                title: '<img src="styles/legend/Linderos_8.png" /> Linderos'
            });
var format_ExposicionVulnerable_9 = new ol.format.GeoJSON();
var features_ExposicionVulnerable_9 = format_ExposicionVulnerable_9.readFeatures(json_ExposicionVulnerable_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_ExposicionVulnerable_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExposicionVulnerable_9.addFeatures(features_ExposicionVulnerable_9);
var lyr_ExposicionVulnerable_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExposicionVulnerable_9, 
                style: style_ExposicionVulnerable_9,
                popuplayertitle: 'Exposicion Vulnerable',
                interactive: true,
    title: 'Exposicion Vulnerable<br />\
    <img src="styles/legend/ExposicionVulnerable_9_0.png" /> Alto<br />\
    <img src="styles/legend/ExposicionVulnerable_9_1.png" /> Medio<br />\
    <img src="styles/legend/ExposicionVulnerable_9_2.png" /> Bajo<br />' });
var format_Puntoscriticos_10 = new ol.format.GeoJSON();
var features_Puntoscriticos_10 = format_Puntoscriticos_10.readFeatures(json_Puntoscriticos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Puntoscriticos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntoscriticos_10.addFeatures(features_Puntoscriticos_10);
var lyr_Puntoscriticos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntoscriticos_10, 
                style: style_Puntoscriticos_10,
                popuplayertitle: 'Puntos criticos',
                interactive: true,
                title: '<img src="styles/legend/Puntoscriticos_10.png" /> Puntos criticos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(false);lyr_Areadeestudio_3.setVisible(true);lyr_Informaciondelarea_4.setVisible(true);lyr_AreasAfectadas_5.setVisible(true);lyr_Linderosdelasareasafectadas_6.setVisible(true);lyr_Informacindecalles_7.setVisible(true);lyr_Linderos_8.setVisible(true);lyr_ExposicionVulnerable_9.setVisible(true);lyr_Puntoscriticos_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_GoogleHybrid_2,lyr_Areadeestudio_3,lyr_Informaciondelarea_4,lyr_AreasAfectadas_5,lyr_Linderosdelasareasafectadas_6,lyr_Informacindecalles_7,lyr_Linderos_8,lyr_ExposicionVulnerable_9,lyr_Puntoscriticos_10];
lyr_Areadeestudio_3.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'azimuth': 'azimuth', });
lyr_Informaciondelarea_4.set('fieldAliases', {'id': 'id', 'parametro': 'Parametros', 'valor': 'Valor', 'unidad': 'Unidad', 'descripcion': 'Descripción', 'fuente_dato': 'Fuente del dato', });
lyr_AreasAfectadas_5.set('fieldAliases', {'id': 'id', 'Riesgo': 'Riesgo', 'Área (m2)': 'Área (m2)', 'prof_max_m': 'Profundidad Máxima (m)', });
lyr_Linderosdelasareasafectadas_6.set('fieldAliases', {'id': 'id', 'Distance': 'Distancia', 'azimuth': 'Azimuth', 'Rumbo': 'Rumbo', });
lyr_Informacindecalles_7.set('fieldAliases', {'dist': 'Distancia (m)', 'nombre_via': 'Nombre de la calle', 'ancho_m': 'Ancho (m)', 'nivel_ries': 'Nivel de Riesgo', 'estado_dre': 'Estado del drenaje', 'inund_max_': 'Altura máxima del agua (m)', 'pob_expues': 'Población expuesta', 'jerarquia_': 'Jerarquia', 'azimuth': 'Azimuth', 'Rumbo': 'Rumbo', 'popup': 'popup', });
lyr_Linderos_8.set('fieldAliases', {'id': 'id', 'Distance': 'Distancia (m)', 'azimuth': 'Azimuth', 'Rumbo': 'Rumbo', });
lyr_ExposicionVulnerable_9.set('fieldAliases', {'id': 'id', 'Coor_X': 'Coordenadas Este', 'Coor_Y': 'Coordenadas Norte', 'Infra': 'Infraestructura crítica', 'nombre': 'Nombre del lugar', 'infra_critica': 'Infraestructura crítica', 'uso_suelo': 'Uso del suelo', 'nivel_vul': 'Nivel de vulnerabilidad', });
lyr_Puntoscriticos_10.set('fieldAliases', {'id_punto': 'id_punto', 'causa_prin': 'Causa principal', 'urgencia': 'Urgencia', 'coordenada': 'Coordenadas Este', 'coordena_1': 'Coordenadas Norte', 'costo_repa': 'Costo de reparación', 'recomendac': 'Recomendación', 'fuente': 'Fuente de datos', 'frecuencia': 'Frecuencia', });
lyr_Areadeestudio_3.set('fieldImages', {'id': 'TextEdit', 'Area': '', 'azimuth': '', });
lyr_Informaciondelarea_4.set('fieldImages', {'id': 'TextEdit', 'parametro': 'TextEdit', 'valor': 'TextEdit', 'unidad': 'TextEdit', 'descripcion': 'TextEdit', 'fuente_dato': 'TextEdit', });
lyr_AreasAfectadas_5.set('fieldImages', {'id': 'TextEdit', 'Riesgo': 'TextEdit', 'Área (m2)': 'TextEdit', 'prof_max_m': 'TextEdit', });
lyr_Linderosdelasareasafectadas_6.set('fieldImages', {'id': 'TextEdit', 'Distance': 'TextEdit', 'azimuth': 'TextEdit', 'Rumbo': 'TextEdit', });
lyr_Informacindecalles_7.set('fieldImages', {'dist': 'TextEdit', 'nombre_via': 'TextEdit', 'ancho_m': 'TextEdit', 'nivel_ries': 'TextEdit', 'estado_dre': 'TextEdit', 'inund_max_': 'TextEdit', 'pob_expues': 'TextEdit', 'jerarquia_': 'TextEdit', 'azimuth': 'TextEdit', 'Rumbo': 'TextEdit', 'popup': 'TextEdit', });
lyr_Linderos_8.set('fieldImages', {'id': 'TextEdit', 'Distance': 'TextEdit', 'azimuth': 'TextEdit', 'Rumbo': 'TextEdit', });
lyr_ExposicionVulnerable_9.set('fieldImages', {'id': 'TextEdit', 'Coor_X': 'TextEdit', 'Coor_Y': 'TextEdit', 'Infra': 'TextEdit', 'nombre': 'TextEdit', 'infra_critica': 'TextEdit', 'uso_suelo': 'TextEdit', 'nivel_vul': 'TextEdit', });
lyr_Puntoscriticos_10.set('fieldImages', {'id_punto': 'TextEdit', 'causa_prin': 'TextEdit', 'urgencia': 'TextEdit', 'coordenada': 'TextEdit', 'coordena_1': 'TextEdit', 'costo_repa': 'TextEdit', 'recomendac': 'TextEdit', 'fuente': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_Areadeestudio_3.set('fieldLabels', {'id': 'hidden field', 'Area': 'inline label - always visible', 'azimuth': 'inline label - always visible', });
lyr_Informaciondelarea_4.set('fieldLabels', {'id': 'hidden field', 'parametro': 'inline label - always visible', 'valor': 'inline label - always visible', 'unidad': 'inline label - always visible', 'descripcion': 'inline label - always visible', 'fuente_dato': 'inline label - always visible', });
lyr_AreasAfectadas_5.set('fieldLabels', {'id': 'hidden field', 'Riesgo': 'inline label - always visible', 'Área (m2)': 'inline label - always visible', 'prof_max_m': 'inline label - always visible', });
lyr_Linderosdelasareasafectadas_6.set('fieldLabels', {'id': 'hidden field', 'Distance': 'inline label - always visible', 'azimuth': 'inline label - always visible', 'Rumbo': 'inline label - always visible', });
lyr_Informacindecalles_7.set('fieldLabels', {'dist': 'hidden field', 'nombre_via': 'hidden field', 'ancho_m': 'hidden field', 'nivel_ries': 'hidden field', 'estado_dre': 'hidden field', 'inund_max_': 'hidden field', 'pob_expues': 'hidden field', 'jerarquia_': 'hidden field', 'azimuth': 'hidden field', 'Rumbo': 'hidden field', 'popup': 'no label', });
lyr_Linderos_8.set('fieldLabels', {'id': 'hidden field', 'Distance': 'inline label - always visible', 'azimuth': 'inline label - always visible', 'Rumbo': 'inline label - always visible', });
lyr_ExposicionVulnerable_9.set('fieldLabels', {'id': 'hidden field', 'Coor_X': 'inline label - always visible', 'Coor_Y': 'inline label - always visible', 'Infra': 'inline label - always visible', 'nombre': 'inline label - always visible', 'infra_critica': 'hidden field', 'uso_suelo': 'inline label - always visible', 'nivel_vul': 'inline label - always visible', });
lyr_Puntoscriticos_10.set('fieldLabels', {'id_punto': 'hidden field', 'causa_prin': 'inline label - always visible', 'urgencia': 'inline label - always visible', 'coordenada': 'inline label - always visible', 'coordena_1': 'inline label - always visible', 'costo_repa': 'inline label - always visible', 'recomendac': 'inline label - always visible', 'fuente': 'inline label - always visible', 'frecuencia': 'inline label - always visible', });
lyr_Puntoscriticos_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});