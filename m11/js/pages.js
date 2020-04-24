

// ASYNC
const showListPage = async () => {
	let d = await query({
		type:'shops_from_user',
		params:[sessionStorage.userId]
	});

	console.log(d);

	$("#list-page .animallist")
		.html(makeShopsList(d.result));
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
	if(sessionStorage.animalId===undefined) {
		throw("No animal id defined");
	}

	let d = await query({
		type:'shops_by_id',
		params:[sessionStorage.animalId]
	});

	console.log(d);

	$("#shops-profile-page .profile-content")
		.html(makeAnimalProfile(d.result));
}