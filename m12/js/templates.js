//templater (f=>{}) ([{},{}])

const makeShopList = templater(o=>`
<li class="shoplist-item">
<a href="#shop-profile-page" class="display-flex shop-jump" data-id="${o.id}">
                            <div class="flex-none shoplist-image"><img src="${o.img}" alt=""></div>
                            <div class="flex-stretch shoplist-title">${o.name}</div>
                        </a></li>
`);


const makeUserProfile = templater(o=>`
        <img src="${o.img}" style="position: absolute;width: 140px;height: 140px;left: 118px;top: 100px;border-radius: 50%;background-color:var(--color-neutral-light);"></div> 
        <h1 class="user_head">${o.name}</h1>

        <a href="#shop-edit-page" data-activate="#list-edit-modal">
        <div class="user_info"></div>
        <span class="iconify fav" data-inline="false" data-icon="ant-design:heart-outlined" style="font-size: 30px;"></span>
        <p class="favp">Favorite Shop : ${o.favoritestore}
       </ul>
   </p>
        <span class="iconify calendar" data-inline="false" data-icon="ant-design:calendar-outlined" style="font-size: 30px;"></span>
        <p class="calendarp">Days on UPOP -${o.days} DAYS</p>
        <span class="iconify paw" data-inline="false" data-icon="cil:paw" style="font-size: 30px;"></span>
        <p class="pawp">Places have been to <br>${o.places}</p>

        

`);

const makeShopProfile = templater(o=>`

   <img src="${o.img}" style="position: absolute;width: 140px;height: 140px;left: 118px;top: 30px;border-radius: 50%; background-color:var(--color-neutral-light);">
     <h1 class="profile_head">${o.name}</h1>
    <p class="profile_type">${o.type}</p>
    <p class="times">${o.times}</p> 
    <div class="shop_info"></div>
    <div class="dot1"></div>
    <p class="date1">${o.dates}</p>
    <div class="line"></div>
    <div class="dot2"></div>
    <p class="date2">2020/01/01</p>
    <p class="openinghours">Opening Hours<br><br>
${o.open_time}-${o.close_time}</p>

    
    


`);

const makeRecentWindow = templater(o=>`
            <a href="#shop-profile-page" class=" shop-jump" data-id="${o.id}">
            <div class="basinname">${o.name}</div>
            <div class="basintype">${o.type}</div>
            <div class="basindetails">Opening Hours<br>
            <div class="basinopeninghours">March 24th-April 14th<br><br>
            Mon-Fri ${o.open_time}-${o.close_time}<br>Sat-Sun ${o.open_time}-${o.close_time} </div></div>
            <img src="img/popupstore1.png" style="width: 30%;margin-top: -100px; margin-left: 30px;">
            </a>
`);

const makeEditUserForm = (o) => {
return `
<form id="edit-user-form">
    <div class="form-control">
                        <label class="form-label" for="edit-fullname">Full name</label>
                        <input class="form-input" type="text" placeholder="Full name" data-role="none" id="edit-fullname" value="${o.name}">
                    </div
                    <div class="form-control">
                        <label class="form-label" for="edit-Email">Email</label>
                        <input class="form-input" type="text" placeholder="Email" data-role="none" id="edit-Email" value="${o.email}">
                    </div>
                    <div class="form-control">
                        <label class="form-label" for="edit-fav-store">Favorite store</label>
                        <input class="form-input" type="text" placeholder="Favorite store" data-role="none" id="edit-fav-store" value="${o.favoritestore}">
                    </div>
</form>
`;
}

const makeEditTypeSelect = (type) => {
    let options = ["Art","Architecture","Food","Fashion"];
    return options.reduce((r,o)=>{
        return r+`<option value="${o}" ${type==o?"selected":""}>${o.toUpperCase()}</option>`;
    },'');
}

const makeEditStoreForm = (o) => {
return `
<form id="edit-store-form">
        <div class="form-control">
                        <label class="form-label" for="edit-shop-name">Name</label>
                        <input class="form-input" type="text" placeholder="Pop up store name" data-role="none" id="edit-shop-name" value="${o.name}">
                    </div>
                    <div class="form-control">
                        <label class="form-label" for="edit-shop-type">Type</label>
                        <select class="form-button" id="edit-shop-type" data-role="none">
                            ${makeEditTypeSelect(o.type)}
                        </select>
                    </div>
                    <div class="form-control">
                        <label class="form-label" for="edit-shop-open-time">Open Time</label>
                        <input class="form-input" type="text" placeholder="Open Time" data-role="none" id="edit-shop-open-time" value="${o.open_time}">
                    </div>
                    <div class="form-control">
                        <label class="form-label" for="edit-shop-close-time">Close Time</label>
                        <input class="form-input" type="text" placeholder="Close Time" data-role="none" id="edit-shop-close-time" value="${o.close_time}">
                    </div>
                    <div class="form-control">
                        <label class="form-label" for="edit-shop-description">Description</label>
                        <textarea class="form-input" placeholder="Type your Description" data-role="none" id="edit-shop-description">${o.description}</textarea>
                    </div>   
</form>
`;
}


