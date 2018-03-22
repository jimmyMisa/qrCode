function map_recorder(map,action){
	/*

	google.maps.event.addListener(map, 'click', function(e) {
	    var latitude = e.latLng.lat();
	    var longitude = e.latLng.lng();
	    alert([latitude,longitude]);
	})
	*/
	google.maps.event.addListener(map, 'click', action)
}