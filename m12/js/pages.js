
// ASYNC
const showListPage = async () => {
	let d = await query({
		type:'shops_from_user',
		params:[sessionStorage.userId]
	});

	console.log(d);

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
// 	 query({
// 		type:'shop_by_id',
// 		params:[sessionStorage.shopId]
// 	}).then(d=>{
// 		console.log(d);

// 	$("#shop-profile-page .profile-body")
// 	.html(makeShopProfile(d.result));
// });
    

//   query({
//    	type:'locations_from_shops',
//    	params:[sessionStorage.shopId]
//    }).then(d=>{
// 		 let map_el = makeMap("#shop-profile-page .map");

// 		 makeMarkers(map_el,d.result);
// 		 });

} 
const showRecentPage = async () => {
	let d = await query({
		type:'recent_shop_locations',
		params:[sessionStorage.userId]
	});

	// console.log(d);

	let map_el = await makeMap("#recent-page .map");

	makeMarkers(
		map_el,
		d.result.map(o=>{
		    // o.icon = `img/icons/icon_${o.type}.png`;
		     // o.icon = `img/shopicon_yellow.png`;
		     o.icon = `img/icons/icon_architecture.png`;
			return o;
		})
	);
}