/*Sub menu*/
const HeaderContainer = document.querySelector(".Header__Container")
const HeaderMobNavigation = `<div class="Header__IMG">
<a href="index.html"> <img src="Images/logoBlue.png" alt="logo"></a>
                </div>
            </div>
            <div class="Header_Mob">
                <svg class="Header_Mob_svg">
                    <use xlink:href="Images/Icons/BurgerMenu.svg#Burger" />
                </svg>
                <div class="Header_Mob_Navigation">
                    <div class="Header_Mob_Navigation_close"> <span >close</span></div>
                    <ul>
                        <li ><a href="ServicesVr.html">SERVICES</a> <svg class="Header_Mob_Navigation_arrow">
                            <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
                        </svg>
                            <ul class="Header_Mob_Sub_Navigation">
                                <li><a href="ServicesVr.html">MOBILE APPLICATION DEVELOPMENT</a></li>
                                <li><a href="ServicesVr.html">GAME DEVELOPMENT OUTSOURCING</a></li>
                                <li><a href="ServicesVr.html">VR APP DEVELOPMENT</a></li>
                                <li><a href="ServicesVr.html">DEDICATED DEVELOPERS</a></li>
                                <li><a href="ServicesVr.html">SDK DEVELOPMENT</a></li>
                                <li><a href="ServicesVr.html">3D MODELING SERVICES</a></li>
                                <li><a href="ServicesVr.html">AR APP DEVELOPMENT</a></li>
                            </ul>
                        </li>
                        <li><a href="Technologies.html">TECHNOLOGIES</a> <svg class="Header_Mob_Navigation_arrow">
                            <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
                        </svg>
                            <ul class="Header_Mob_Sub_Navigation">
                                <li><a href="Technologies.html">ANDROID</a></li>
                                <li><a href="Technologies.html">IOS</a></li>
                                <li><a href="Technologies.html">UNITY</a></li>
                            </ul>
                        </li>
                        <li><a href="Products.html">PRODUCTS</a></li>
                        <li><a href="Portfolio.html">PORTFOLIO</a></li>
                        <li><a href="Blog.html">BLOG</a></li>
                        <li><a href="AboutUs.html" class="Active_Page">ABOUT US</a> <svg class="Header_Mob_Navigation_arrow">
                            <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
                        </svg>
                            <ul class="Header_Mob_Sub_Navigation">
                                <li><a href="ContacUs.html">CONTACTS</a></li>
                                <li><a href="Team.html">TEAM</a></li>
                                <li><a href="JoinTheTam.html">join the team</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div><a href="ContacUs.html"> <button class="TopButton">CONTACT US</button></a></div>
                </div>
            </div>`
const HeaderDescNavigation = `<div class="Header__IMG">
<a href="index.html"> <img src="Images/logoBlue.png" alt="logo"></a>
</div>
<div class="Header_Navigation">
 <ul>
     <li class="Header_Navigation_item"><a href="ServicesVr.html">SERVICES</a> <svg class="Header_Navigation_arrow">
         <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
     </svg>
         <div class="Header_Navigation_Sub_Menu">
             <ul>
                 <li><a href="ServicesVr.html">MOBILE APPLICATION DEVELOPMENT </a></li>
                 <li><a href="ServicesVr.html">GAME DEVELOPMENT OUTSOURCING</a></li>
                 <li><a href="ServicesVr.html"> VR APP DEVELOPMENT</a></li>
                 <li><a href="ServicesVr.html">DEDICATED DEVELOPERS</a></li>
                 <li><a href="ServicesVr.html"> SDK DEVELOPMENT</a></li>
                 <li><a href="ServicesVr.html"> 3D MODELING SERVICES</a></li>
                 <li><a href="ServicesVr.html"> AR APP DEVELOPMENT</a></li>
             </ul>
         </div>
     </li>
     <li class="Header_Navigation_item"><a href="Technologies.html">TECHNOLOGIES</a> <svg class="Header_Navigation_arrow">
         <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
     </svg>
         <div class="Header_Navigation_Sub_Menu">
             <ul>
                 <li><a href="Technologies.html">ANDROID </a></li>
                 <li><a href="Technologies.html">IOS</a></li>
                 <li><a href="Technologies.html">UNITY</a></li>
             </ul>
         </div>
     </li>
     <li class="Header_Navigation_item"><a href="Products.html">PRODUCTS</a></li>
     <li class="Header_Navigation_item"><a href="Portfolio.html">PORTFOLIO</a></li>
     <li class="Header_Navigation_item"><a href="Blog.html">BLOG</a></li>
     <li class="Header_Navigation_item Active_Page"><a href="AboutUs.html">ABOUT US</a> <svg class="Header_Navigation_arrow">
         <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
     </svg>
         <div class="Header_Navigation_Sub_Menu">
             <ul>
                 <li><a href="ContacUs.html">CONTACTS </a></li>
                 <li><a href="Team.html">team</a></li>
                 <li><a href="JoinTheTam.html">join the team</a></li>
             </ul>
         </div>
     </li>
 </ul>
</div>
<div >
<a href="ContacUs.html"> <button class="TopButton">CONTACT US</button></a>
</div>`

function HeaderNavigation() {
    if (document.documentElement.clientWidth<= 850) 
    {
        HeaderContainer.innerHTML = HeaderMobNavigation;
        const Burger = document.querySelector(".Header_Mob_svg")
        const MobNavigation = document.querySelector(".Header_Mob_Navigation")
        const SubMenuMobArrow = document.querySelectorAll(".Header_Mob_Navigation_arrow")
        const CloseNavigation = document.querySelector(".Header_Mob_Navigation_close")
        const SubMenuMob = document.querySelectorAll(".Header_Mob_Sub_Navigation")
        Burger.addEventListener("click", () => { MobNavigation.classList.toggle("Active_Sub_Menu") })
        CloseNavigation.addEventListener("click", () => { MobNavigation.classList.toggle("Active_Sub_Menu") })
        SubMenuMobArrow.forEach((elem, index) => {
            elem.addEventListener("click", () => {
                elem.classList.toggle("Active_Sub_Menu_img")
                SubMenuMob[index].classList.toggle("Active_Sub_Menu")
            })
        })

    }


    if (document.documentElement.clientWidth>850) 
    {
        HeaderContainer.innerHTML = HeaderDescNavigation
        const HeadMenuli = document.querySelectorAll(".Header_Navigation_item")
        const SubMenuArrow = document.querySelectorAll(".Header_Navigation_arrow")
        const SubMenu = document.querySelectorAll(".Header_Navigation_Sub_Menu")
        SubMenuArrow.forEach((elem, index) => {
            elem.addEventListener("click", () => {
                elem.classList.toggle("Active_Sub_Menu_img")
                HeadMenuli[index].classList.toggle("Active_Navation")
                SubMenu[index].classList.toggle("Active_Sub_Menu")
            })
        })

    }
}
HeaderNavigation()
/*slide project*/ 
const slideButtonLeft=document.querySelector(".Rec_Button_1")
const slideButtonRight=document.querySelector(".Rec_Button_2")
const SlideGame=document.querySelectorAll(".RecProject_Content_item")
let SizeSpace=0;
let Postion=0;
function SetSizeSpace()
{
    let Postion=0;
    SizeSpace=480;
    if (window.screen.width<=1440 && window.screen.width>1280)SizeSpace=420;
    if (window.screen.width<=1280 && window.screen.width>1152)SizeSpace=550;
    if (window.screen.width<=1152 && window.screen.width>800)SizeSpace=425;
    if (window.screen.width<=800)SizeSpace=430;
    for (let i = 0; i < SlideGame.length; i++) {
    
        SlideGame[i].style.left=`${Postion}px`
        Postion+=SizeSpace
    }
}
SetSizeSpace()
slideButtonLeft.addEventListener("click",()=>{

    SlideGame.forEach((e)=>{
        if (parseInt(getComputedStyle(e).left)===SizeSpace*(SlideGame.length-1))
        e.style.left=`0px`;
        else  e.style.left=`${parseInt(getComputedStyle(e).left)+SizeSpace}px`
    })
})
slideButtonRight.addEventListener("click",()=>{
    SlideGame.forEach((e)=>{
        if (parseInt(getComputedStyle(e).left)===0)
            e.style.left=`${SizeSpace*(SlideGame.length-1)}px`;
            else  e.style.left=`${parseInt(getComputedStyle(e).left)-SizeSpace}px`
    })
})
window.addEventListener("resize",()=>
{ 
    SetSizeSpace()
    HeaderNavigation()
})