// ASYNC
const showListPage = async () => {
	let d = await query({
		type:'animals_from_user',
		params:[sessionStorage.userId]
	});

	// console.log(d);

	$("#list-page .animallist")
		.html(makeAnimalList(d.result));
}


const showUserPage = async () => {
	let d = await query({
		type:'user_by_id',
		params:[sessionStorage.userId]
	});

	// console.log(d);

	$("#profile-page .profile-content")
		.html(makeUserProfile(d.result));
}


const callAnimalProfile = (id,target) => {
	query({
		type:'animal_by_id',
		params:[id]
	}).then(d=>{
		console.log(d);

		$(target).html(makeAnimalProfile(d.result));

		$("#animal-profile-page .profile-description")
			.html(d.result[0].description)
	});
}
const callAnimalMap = (id,target) => {
	query({
		type:'locations_from_animal',
		params:[id]
	}).then(async d=>{
		let map_el = await makeMap(target);

		makeMarkers(
			map_el,
			d.result
		);
	});
}

const showAnimalPage = async () => {
	if(sessionStorage.animalId===undefined) {
		throw("No animal id defined");
	}

	callAnimalProfile(
		sessionStorage.animalId,
		"#animal-profile-page .profile-top"
	);
	callAnimalMap(
		sessionStorage.animalId,
		"#animal-profile-page .map"
	);

}




const showRecentPage = async () => {
	let d = await query({
		type:'recent_animal_locations',
		params:[sessionStorage.userId]
	});

	// console.log(d);

	let animals = d.result.reduce((r,o)=>{
		o.icon = o.img;
		// o.icon = `img/icons/icon_${o.type}.svg`;
		if(o.lat) r.push(o);
		return r;
	},[]);

	let map_el = await makeMap("#recent-page .map");

	makeMarkers(map_el,animals);

	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click",function(e){
			// example 1
			$("#recent-page .basin")
				.addClass("active")
				.html(makeRecentWindow(animals[i]));

			// example 2
			map_el.data("infoWindow")
				.open(map_el.data("map"),o);
			map_el.data("infoWindow")
				.setContent(makeRecentWindow(animals[i]));
		})
	});

	map_el.data("map").addListener("click",function(e){
		$("#recent-page .basin")
			.removeClass("active")
	});
}




const showAddLocationPage = async () => {
	let map_el = await makeMap("#add-location-page .map");

	map_el.data("map").addListener("click",function(e){
		let pos = {
			lat:e.latLng.lat(),
			lng:e.latLng.lng()
		};
		let m = new google.maps.Marker({
			position: pos,
			map: map_el.data("map")
		});
	});

	setMapBounds(map_el.data("map"),[]);
}