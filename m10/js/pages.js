
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

	console.log(d);

	$("#profile-page .profile-content")
		.html(makeUserProfile(d.result));

}

const showShopPage = async () => {
	if(sessionStorage.shopId===undefined) {
		throw("No shop id defined");
	}

	let d = await query({
		type:'shop_by_id',
		params:[sessionStorage.shopId]
	});

	console.log(d);

	$("#shop-profile-page .profile-body")
		.html(makeShopProfile(d.result));

} 