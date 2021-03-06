<script>
        require([
        "esri/Map",
        "esri/views/MapView",
        "esri/widgets/Search",
        "esri/layers/FeatureLayer",
        "dojo/domReady!"
        ], function(Map, MapView, Search, FeatureLayer) {
        
        var map = new Map({
            basemap: "streets-vector"
        });
        
        // Add the layer to the map
        var trailsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
        });
        
        //map.add(trailsLayer); // Optionally add layer to map
        
        var view = new MapView({
            container: "viewDiv",  
            map: map,
            center: [-118.35,34.05],
            zoom: 9
        });
        
        // Search
        
        var search = new Search({
            view: view
        });
        search.defaultSource.withinViewEnabled = true; // Limit search to visible map area only
        view.ui.add(search, "top-right"); // Add to the map

        // Add the trailheads as a search source
        search.sources.push({
            featureLayer: trailsLayer,
            searchFields: ["TRL_NAME"],
            displayField: "TRL_NAME",
            exactMatch: false,
            outFields: ["TRL_NAME", "PARK_NAME"],
            resultGraphicEnabled: true,
            name: "Trailheads",
            placeholder: "Santa",
        });
            
        // Find address
        
        function showPopup(address, pt) {
            view.popup.open({
            title: "Find Address Result",
            content: address + "<br><br> Lat: " + Math.round(pt.latitude * 100000)/100000 + " Lon: " + Math.round(pt.longitude * 100000)/100000,
            location: pt
            });
        }
        
        view.on("click", function(evt){
            search.clear(); 
            view.popup.clear();
            var locatorSource = search.defaultSource;
            locatorSource.locator.locationToAddress(evt.mapPoint)
            .then(function(response) {
                var address = response.address;
                // Show the address found
                showPopup(address, evt.mapPoint);
            }, function(err) {
                // Show no address found
                showPopup("No address found for this location.", evt.mapPoint);
            });
        });

        });
    </script>