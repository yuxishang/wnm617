$(()=>{

	checkUserId();

	// Event Delegation
	$(document)


	// ROUTING
	.on("pagecontainerbeforeshow",function(e,ui){
		console.log(ui.toPage[0].id)
		switch(ui.toPage[0].id) {
			case "recent-page":
				showRecentPage();
				break;
			case "list-page":
				showListPage();
				break;
			case "shop-profile-page":
				showShopPage();
				break;
			case "add-location-page":
				showAddLocationPage();
				break;
			case "profile-page":
				showUserPage();
				break;
			case "edit-user-page":
				showEditUserPage();
				break;
			case "edit-store-page":
				showEditStorePage();
				break;
		 	
		}
	})


/* FORMS */
	.on("submit","#login-form",function(e){
		e.preventDefault();
		checkLoginForm();
	})

	.on("submit","#signup-form",function(e){
		e.preventDefault();

		if($("#signup-password").val()!=$("#signup-password2").val()) {
			throw "Passwords don't match";
			return;
		}
		
		query({
			type:'insert_user',
			params:[
				$("#signup-username").val(),
				$("#signup-email").val(),
				$("#signup-password").val()
			]
		}).then(d=>{
			if(d.error) throw d.error;
			$.mobile.navigate("#login-page");
		})
	})
	
	.on("submit","#list-add-form",function(e){
		e.preventDefault();
		query({
			type:'insert_shop',
			params:[
				sessionStorage.userId,
				$("#list-add-name").val(),
				$("#list-add-type").val(),
				$("#list-add-open-time").val(),
				$("#list-add-close-time").val()
			]
		}).then(d=>{
			if(d.error) throw d.error;
			showListPage();
		})
	})




	/* CLICKS */

	.on("click",".js-addlocation",function(e) {
		query({
			type:'insert_location',
			params:[
				sessionStorage.shopId,
				$("#add-location-lat").val(),
				$("#add-location-lng").val(),
			]
		}).then(d=>{
			if(d.error) throw d.error;
			// showListPage();
		})
	})
	.on("click",".js-logout",function(e) {
		sessionStorage.removeItem("userId")
		checkUserId();
	})

	.on("click",".shop-jump",function(e){
		if($(this).data("id")===undefined) {
			throw("No id defined on this element");
		}
		sessionStorage.shopId = $(this).data("id");
	})

	.on("click",".nav-tabs a",function(e) {
		let id = $(this).parent().index();
		$(this).parent().addClass("active")
			.siblings().removeClass("active");

		$(this).parent().parent().parent().next().children()
			.eq(id).addClass("active")
			.siblings().removeClass("active")
	})

	.on("click",".js-edituser",function(e) {
		query({
			type:'edit_user',
			params:[
				$("#edit-fullname").val(),
				$("#edit-Email").val(),
				$("#edit-fav-store").val(),
				sessionStorage.userId
			]
		}).then(d=>{
			if(d.error) throw d.error;
			// showListPage();
		})
	})
	.on("click",".js-editshop",function(e) {
		query({
			type:'edit_shop',
			params:[
				$("#edit-shop-name").val(),
				$("#edit-shop-type").val(),
				$("#edit-shop-open-time").val(),
				$("#edit-shop-close-time").val(),
				$("#edit-shop-description").val(),
				sessionStorage.shopId
			]
		}).then(d=>{
			if(d.error) throw d.error;
			// showListPage();
		})
	})

	.on("click",".js-deleteshop",function(e){
		query({
			type:'delete_shop',
			params:[$(this).data("id")]
		})
		.then(d=>{
			if(d.error) throw d;
			$.mobile.navigate("#list-page");
		});
	})
	.on("submit","#map-search",function(e){
		e.preventDefault();
		let search = $(".search").val();
		if(search=="") {
			showListPage();
		} else {
			query({
				type:'search_shops',
				params:[
					search,
					sessionStorage.userId
				]
			}).then(d=>{
				if(d.error) throw d.error;
				else showListPage(d.result);
			})
		}
	})



	.on("click","#shop-profile-page .profile-image",function(e){
		let src = $("#shop-profile-page .profile-image img").attr("src")

		$("#edit-upload-type").val("shop");
		$("#edit-upload-id").val(sessionStorage.shopId);
		$("#edit-upload-filename").val(src);

		$("#edit-upload-page .image-picker")
			.css({"background-image":`url(${src})`})
		$.mobile.navigate("#edit-upload-page");
	})
	.on("change","#edit-upload-image",function(e){
		upload($("#edit-upload-image")[0].files[0])
		.then(d=>{
			if(d.error) throw d;
			else {
				let src = `https://go-roxy.com/aau/wnm617/uploads/${d.result}`;
				$("#edit-upload-filename").val(src);
				$("#edit-upload-page .image-picker").css("background-image",`url(${src})`);
			}
		})
	})
	.on("click",".js-editupload",function(e){
		query({
			type:'edit_'+$("#edit-upload-type").val()+'_image',
			params:[
				$("#edit-upload-filename").val(),
				$("#edit-upload-id").val()
			]
		})
		.then(d=>{
			if(d.error) throw d;
		})
	})

	.on("click",".js-editupload",function(e){
		query({
			type:'edit_'+$("#edit-upload-type").val()+'_image',
			params:[
				$("#edit-upload-filename").val(),
				$("#edit-upload-id").val()
			]
		})
		.then(d=>{
			if(d.error) throw d;
		})
	})

	.on("click","#profile-page .profile-image",function(e){
		let src = $("#profile-page .profile-image img").attr("src")

		$("#edit-upload-type").val("user");
		$("#edit-upload-id").val(sessionStorage.userId);
		$("#edit-upload-filename").val(src);

		$("#edit-upload-page .image-picker")
			.css({"background-image":`url(${src})`})
		$.mobile.navigate("#edit-upload-page");
	})



	/* DATA ACTIVATE */
	.on("click","[data-activate]",function(e){
		$($(this).data("activate"))
			.addClass("active");
	})
	.on("click","[data-deactivate]",function(e){
		$($(this).data("deactivate"))
			.removeClass("active");
	})
	.on("click","[data-toggle]",function(e){
		$($(this).data("toggle"))
			.toggleClass("active");
	})
	.on("click","[data-activateone]",function(e){
		$($(this).data("activateone"))
			.addClass("active")
			.siblings().removeClass("active");
	})
	;









	$("[data-template]").each(function(){
		let template_id = $(this).data("template");
		let template_str = $(template_id).html();
		$(this).html(template_str);
	})

})