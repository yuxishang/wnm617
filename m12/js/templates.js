//templater (f=>{}) ([{},{}])

const makeShopList = templater(o=>`
<li class="shoplist-item">
<a href="#shop-profile-page" class="display-flex shop-jump" data-id="${o.id}">
                            <div class="flex-none shoplist-image"><img src="${o.img}" alt=""></div>
                            <div class="flex-stretch shoplist-title">${o.name}</div>
                        </a></li>
`);


const makeUserProfile = templater(o=>`
        <img src="${o.img}" style="position: absolute;width: 140px;height: 140px;left: 118px;top: 100px;border-radius: 50%;"></div> 
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

    <img src="${o.img}" style="position: absolute;width: 140px;height: 140px;left: 118px;top: 30px;border-radius: 50%;">
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