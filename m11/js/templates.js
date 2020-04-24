//templater (f=>{}) ([{},{}])

const makeShopsList = templater(o=>`
<li class="animallist-item">
<a href="#shop-profile-page" class="display-flex animal-jump" data-id="${o.id}">
	<div class="flex-none animallist-image"><img src="${o.img}" alt=""></div>
	<div class="flex-stretch animallist-title">${o.name}</div>
</a>
</li>
`);


const makeUserProfile = templater(o=>`
<ul>
	<li class="flex-none"><a href="#recent-page" class="backarrowstoreprofile"><span class="iconify" data-inline="false" data-icon="ic:outline-arrow-back-ios" style="font-size: 30px; margin-top:7px; margin-right: 7px;"></span></a>
	</li>
	<li class="flex-stretch"><a href="#" data-activate="#edit-profile-modal" class="editicon">
     <span class="iconify" data-inline="false" data-icon="bytesize:edit" style="font-size: 30px;"></span></a></li>
	</ul>
	</header>
	<div data-role="main">
    <img src="${o.img}" style="position: absolute;width: 140px;height: 140px;left: 118px;top: 100px;border-radius: 50%;"></div>	
     <h1 class="user_head">${o.name}</h1>

        <a href="#shop-edit-page" data-activate="#list-edit-modal">
        <span class="iconify editicon" data-inline="false" data-icon="bytesize:edit" style="font-size: 30px;"></span></a>
        <div class="user_info"></div>
        <span class="iconify fav" data-inline="false" data-icon="ant-design:heart-outlined" style="font-size: 30px;"></span>
        <p class="favp">Favorite Shop
       <ul>
       	<li>${o.favoritestore}</li>
       	<li>${o.favoritestore}</li>
        <li>${o.favoritestore}</li>
       </ul>
   </p>
        <span class="iconify calendar" data-inline="false" data-icon="ant-design:calendar-outlined" style="font-size: 30px;"></span>
        <p class="calendarp">Days on UPOP -${o.days} DAYS</p>
        <span class="iconify paw" data-inline="false" data-icon="cil:paw" style="font-size: 30px;"></span>
        <p class="pawp">Places have been to
        ${o.places}</p>

`);

const makeAnimalProfile = templater(o=>`
<ul>
	<li class="flex-none">
		<a href="#recent-page" class="backarrowstoreprofile"><span class="iconify " data-inline="false" data-icon="ic:outline-arrow-back-ios" style="font-size: 30px; margin-top:7px; margin-right: 7px;"></span></a>
	</li>
	<li class="flex-stretch"><span class="iconify heart" data-inline="false" data-icon="ant-design:heart-outlined" style="font-size: 30px; margin-top:7px; margin-right: 7px;"></span></li>
	<li class="flex-none">
	<a href="#" data-activate="#list-edit-modal" class="editicon">
    <span class="iconify" data-inline="false" data-icon="bytesize:edit" style="font-size: 30px;"></span></a>
	</li>
	</ul>
	</header>
	<div data-role="main">
    <img src="${o.img}" style="position: absolute;width: 140px;height: 140px;left: 118px;top: 100px;border-radius: 50%;"></div>	
     <h1 class="profile_head">${o.name}</h1>
    <p class="profile_type">${o.type}</p>
    <p class="times">${o.times}</p> 
    <div class="shop_info"></div>
    <div class="dot1"></div>
    <p class="date1">${o.dates}</p>
    <div class="line"></div>
    <div class="dot2"></div>
    <p class="date2">2020/01/01</p>
    <p class="openinghours">Opening Hours<br>
${o.open_time} ${o.open_hours}</p>

		</div>
`);