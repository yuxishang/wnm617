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
			case "profile-page":
				showUserPage();
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