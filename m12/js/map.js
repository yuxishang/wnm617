
const makeMap = async (target) => {
	await checkData(()=>window.google);

	let sf = {lat: 37.385681, lng: -122.074744};
	let map_el = $(target);

	if(!map_el.data("map"))
		map_el.data(
			"map",
			new google.maps.Map(map_el[0], {
				center: sf,
				zoom: 12,
				disableDefaultUI:true
		    })
	    );

    return map_el;
}


const makeMarkers = (map_el,locs) => {

	 let map = map_el.data("map");
	 let markers = map_el.data("markers");

 if(markers) markers.forEach(o=>o.setMap(null));

	 markers = [];

	 locs.forEach((o,i,a)=>{
	// 	if(!o.lat) return;
	 	let m = new google.maps.Marker({
	 		position: o,
			map: map,
	// 		icon: {
	// 			url:o.icon,
	// 			scaledSize: {
	// 				width:40,
	// 				height:40
	// 			}
	// 		}
 	});
	markers.push(m);
 });

	 map_el.data("markers",markers);

	// setTimeout(()=>{setMapBounds(map,locs)},100);
}

const setMapBounds = (map, locs) => {
	if(locs.length == 1) {
		map.setCenter(locs[0]);
		map.setZoom(14);
	} else
	if(locs.length == 0) {
		if(window.location.protocol!=="https:") return;
		else {
			navigator.geolocation.getCurrentPosition(p=>{
				let pos = {
					lat:p.coords.latitude,
					lng:p.coords.longitude
				};
				map.setCenter(pos);
				map.setZoom(15);
			},(...args)=>{
				console.log("error?",args);
			},{
				enableHighAccuracy:false,
				timeout:5000,
				maximumAge:0
			})
		}
	} else {
		let bounds = new google.maps.LatLngBounds(null);
		locs.forEach(o=>{
			if(o.lat) bounds.extend(o);
		});
		map.fitBounds(bounds);
	}
}
