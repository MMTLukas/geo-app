var app = angular.module('GeoApp', ['ngMaterial', 'leaflet-directive']);

app.controller('AppCtrl', ['$scope', '$mdUtil', '$mdSidenav', '$log', function ($scope, $mdUtil, $mdSidenav, $log) {
  var tilesDict = {
    openStreetMap: {
      url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      options: {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    },
    esriWorldImagery: {
      name: 'Esri WorldImagery',
      url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      type: 'xyz',
      options: {
        attribution: '<a href="http://www.esri.com/">Esri</a>',
        who: 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }
    },
    mapboxOutdoors: {
      name: 'Mapbox Outdoors',
      url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
      type: 'xyz',
      options: {
        apikey: 'pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q',
        mapid: 'bufanuvols.lia3no0m'
      }
    }
  };

  angular.extend($scope, {
    center: {
      lat: 47.798,
      lng: 13.046,
      zoom: 16
    },
    markers: {
      0: {
        lat: 47.7985,
        lng: 13.0465,
        message: "I'm a static marker with defaultIcon",
        focus: false,
        icon: {
          type: 'awesomeMarker',
          icon: 'tree-conifer',
          markerColor: 'blue'
        }
      },
      1: {
        lat: 47.798,
        lng: 13.046,
        message: "I'm a static marker with defaultIcon",
        focus: false,
        icon: {
          type: 'awesomeMarker',
          icon: 'tree-conifer',
          markerColor: 'blue'
        }
      }
    },
    tiles: tilesDict.openStreetMap
  });

  $scope.changeTiles = function (tiles) {
    $scope.tiles = tilesDict[tiles];
  };

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  $scope.showMenu = $mdUtil.debounce(function () {
    $mdSidenav("left")
      .toggle()
      .then(function () {
        $log.debug("toggle " + "left" + " is done");
      });
  }, 300);


}]);