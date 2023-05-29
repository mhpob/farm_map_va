(function () {
  farmOS.map.behaviors.map_va = {
    attach: function (instance) {

      // From https://gismaps.vdem.virginia.gov/arcgis/rest/services/VBMP_Imagery?f=pjson
      var basemaps = [
        { "name": "VBMP_Imagery/MostRecentImagery_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2002_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2006_2007_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2006_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2009_Infrared_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2009_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2011_Infrared_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2011_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2012_Infrared_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2012_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2013_Infrared_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2013_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2014_Infrared_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2014_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2015_Infrared_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2015_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2017_Infrared_WGS", "type": "MapServer" },
        { "name": "VBMP_Imagery/VBMP2017_WGS", "type": "MapServer"},
        { "name": "VBMP_Imagery/VBMP2018_Infrared_WGS", "type": "MapServer"},
        { "name": "VBMP_Imagery/VBMP2018_WGS", "type": "MapServer"},
        { "name": "VBMP_Imagery/VBMP2019_Infrared_WGS", "type": "MapServer"},
        { "name": "VBMP_Imagery/VBMP2019_WGS", "type": "MapServer"},
        { "name": "VBMP_Imagery/VBMP2021_Infrared_WGS", "type": "MapServer"},
        { "name": "VBMP_Imagery/VBMP2021_WGS", "type": "MapServer"},
        { "name": "VBMP_Imagery/VBMP2022_Infrared_WGS", "type": "MapServer"},
        { "name": "VBMP_Imagery/VBMP2022_WGS", "type": "MapServer"}
      ];

      basemaps.forEach(function(basemap) {
        // Add San Juan Islands Basemaps
        var opts = {
          title: "VGIN " + basemap.name.split('/')[1],
          url: 'https://gismaps.vdem.virginia.gov/arcgis/rest/services/' + basemap.name + '/' + basemap.type,
          visible: false,
          base: true,
          group: 'Base layers',
        };
        instance.addLayer('arcgis-tile', opts);
      });

    }
  };
}());
