// ASYNC
const showListPage = async () => {
	let d = await query({
		type:'shops_from_user',
		params:[sessionStorage.userId]
	});

	// console.log(d);

	$("#list-page .shoplist")
		.html(makeShopList(d.result));
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

const callShopProfile = (id,target) => {
	query({
		type:'shop_by_id',
		params:[id]
	}).then(d=>{
		console.log(d);

		$(target).html(makeShopProfile(d.result));
		$("#shop-profile-page .profile-description")
			.html(d.result[0].description)
	});
}
const callShopMap = (id,target) => {
	query({
		type:'locations_from_shops',
		params:[id]
	}).then(async d=>{
		let map_el = await makeMap(target);

		makeMarkers(
			map_el,
			d.result
		);
	});
}

const showShopPage = async () => {
	if(sessionStorage.shopId===undefined) {
		throw("No shop id defined");
	}

	callShopProfile(
 	sessionStorage.shopId,
		"#shop-profile-page .profile-body"
	 );
	callShopMap(
		sessionStorage.shopId,
	 	"#shop-profile-page .map"
 );

} 

const showRecentPage = async () => {
	let d = await query({
		type:'recent_shop_locations',
		params:[sessionStorage.userId]
	});

	// console.log(d);

	let shops = d.result.map(o=>{
		     o.icon = `img/icons/icon_${o.type}.png`;
		     // o.icon = `img/shopicon_yellow.png`;
		     // if(o.lat) r.push(o);
			return o;
		});

	let map_el = await makeMap("#recent-page .map");

	makeMarkers(map_el,shops);

	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click",function(e){
			$("#recent-page .basin")
				.toggleClass("active")
				.html(makeRecentWindow(shops[i]));
		})
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