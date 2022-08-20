/*Sub menu*/
const HeaderContainer = document.querySelector(".Header__Container")
let HeaderListenerFUNC=
{
    headMobShowClose:"",
    headListMobShowClose:"",  
}
function HeaderNavigation() {
    if (window.screen.width!==window.innerWidth)
    {
        if (window.innerWidth<= 1024 && !HeaderListenerFUNC.headMobShowClose) 
        {
            HeaderContainer.innerHTML = `  <div class="Header__IMG">
            <div class="Header_Mob_logo"> <a href="index.html">  <picture>
            <source type="image/avif" srcset="Images/logoBlue.avif 1x,Images/logoBlue@2x.avif 2x, Images/logoBlue@3x.avif 3x">
            <source type="image/webp" srcset="Images/logoBlue.webp 1x,Images/logoBlue@2x.webp 2x, Images/logoBlue@3x.webp 3x">
            <img src="Images/logoBlue.png" srcset="Images/logoBlue@2x.png 2x, Images/logoBlue@3x.png 3x" alt="logo">
        </picture></a>
            </div>
        </div>
        <div class="Header_Mob">
            <svg class="Header_Mob_svg">
                <use xlink:href="Images/Icons/BurgerMenu.svg#Burger" />
            </svg>
            <div class="Header_Mob_Navigation">
                <div class="Header_Mob_Navigation_close"> <span >close</span></div>
                <ul>
                    <li><a href="ServicesVr.html">SERVICES</a> <svg data-index="0" class="Header_Mob_Navigation_arrow">
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
                    <li><a href="Technologies.html">TECHNOLOGIES</a> <svg data-index="1" class="Header_Mob_Navigation_arrow">
                        <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
                    </svg>
                        <ul class="Header_Mob_Sub_Navigation">
                            <li><a href="Technologies.html">ANDROID</a></li>
                            <li><a href="Technologies.html">IOS</a></li>
                            <li><a href="Technologies.html">UNITY</a></li>
                        </ul>
                    </li>
                    <li><a href="Products.html" class="Active_Page">PRODUCTS</a></li>
                    <li><a href="Portfolio.html">PORTFOLIO</a></li>
                    <li><a href="Blog.html">BLOG</a></li>
                    <li><a href="AboutUs.html">ABOUT US</a> <svg data-index="2" class="Header_Mob_Navigation_arrow">
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
            const Burger = document.querySelector(".Header_Mob_svg")
            const MobNavigation = document.querySelector(".Header_Mob_Navigation")
            const SubMenuMobArrow = document.querySelectorAll(".Header_Mob_Navigation_arrow")
            const CloseNavigation = document.querySelector(".Header_Mob_Navigation_close")
            const SubMenuMob = document.querySelectorAll(".Header_Mob_Sub_Navigation")
            HeaderListenerFUNC.headMobShowClose=() => { MobNavigation.classList.toggle("active") }
            HeaderListenerFUNC.headListMobShowClose=(e) => {
                SubMenuMobArrow[e.currentTarget.getAttribute("data-index")].classList.toggle("active")
                SubMenuMob[e.currentTarget.getAttribute("data-index")].classList.toggle("active")
            }
            Burger.addEventListener("click", HeaderListenerFUNC.headMobShowClose )
            CloseNavigation.addEventListener("click",  HeaderListenerFUNC.headMobShowClose)
            SubMenuMobArrow.forEach((elem) => {
                elem.addEventListener("click", HeaderListenerFUNC.headListMobShowClose)
            })
        } 
        if (window.innerWidth>1024 && HeaderListenerFUNC.headMobShowClose)
        {
            document.querySelector(".Header_Mob_svg").removeEventListener("click",HeaderListenerFUNC.headMobShowClose)
            document.querySelector(".Header_Mob_Navigation_close").removeEventListener("click",HeaderListenerFUNC.headMobShowClose)
            document.querySelectorAll(".Header_Mob_Navigation_arrow").forEach((elem) => {
                elem.removeEventListener("click", HeaderListenerFUNC.headListMobShowClose)
            })
            HeaderListenerFUNC.headMobShowClose="";
            HeaderListenerFUNC.headListMobShowClose="";
            HeaderContainer.innerHTML = ` <div class="Header__IMG">
            <a href="index.html">
            <picture>
            <source type="image/avif" srcset="Images/logoBlue.avif 1x,Images/logoBlue@2x.avif 2x, Images/logoBlue@3x.avif 3x">
            <source type="image/webp" srcset="Images/logoBlue.webp 1x,Images/logoBlue@2x.webp 2x, Images/logoBlue@3x.webp 3x">
            <img src="Images/logoBlue.png" srcset="Images/logoBlue@2x.png 2x, Images/logoBlue@3x.png 3x" alt="logo">
        </picture>
            </a>
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
                <li class="Header_Navigation_item Active_Page"><a href="Products.html">PRODUCTS</a></li>
                <li class="Header_Navigation_item"><a href="Portfolio.html">PORTFOLIO</a></li>
                <li class="Header_Navigation_item"><a href="Blog.html">BLOG</a></li>
                <li class="Header_Navigation_item"><a href="AboutUs.html">ABOUT US</a> <svg class="Header_Navigation_arrow">
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
        <div>
         <a href="ContacUs.html"> <button class="TopButton Header_button">CONTACT US</button></a>
        </div>`
        }

    }else
    {
        if (window.screen.width<= 1024 && !HeaderListenerFUNC.headMobShowClose) 
        {
            HeaderContainer.innerHTML = `  <div class="Header__IMG">
            <div class="Header_Mob_logo"> <a href="index.html">  <picture>
            <source type="image/avif" srcset="Images/logoBlue.avif 1x,Images/logoBlue@2x.avif 2x, Images/logoBlue@3x.avif 3x">
            <source type="image/webp" srcset="Images/logoBlue.webp 1x,Images/logoBlue@2x.webp 2x, Images/logoBlue@3x.webp 3x">
            <img src="Images/logoBlue.png" srcset="Images/logoBlue@2x.png 2x, Images/logoBlue@3x.png 3x" alt="logo">
        </picture></a>
            </div>
        </div>
        <div class="Header_Mob">
            <svg class="Header_Mob_svg">
                <use xlink:href="Images/Icons/BurgerMenu.svg#Burger" />
            </svg>
            <div class="Header_Mob_Navigation">
                <div class="Header_Mob_Navigation_close"> <span >close</span></div>
                <ul>
                    <li><a href="ServicesVr.html">SERVICES</a> <svg data-index="0" class="Header_Mob_Navigation_arrow">
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
                    <li><a href="Technologies.html">TECHNOLOGIES</a> <svg data-index="1" class="Header_Mob_Navigation_arrow">
                        <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
                    </svg>
                        <ul class="Header_Mob_Sub_Navigation">
                            <li><a href="Technologies.html" class="Active_Page">ANDROID</a></li>
                            <li><a href="Technologies.html">IOS</a></li>
                            <li><a href="Technologies.html">UNITY</a></li>
                        </ul>
                    </li>
                    <li><a href="Products.html">PRODUCTS</a></li>
                    <li><a href="Portfolio.html">PORTFOLIO</a></li>
                    <li><a href="Blog.html">BLOG</a></li>
                    <li><a href="AboutUs.html">ABOUT US</a> <svg data-index="2" class="Header_Mob_Navigation_arrow">
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
            const Burger = document.querySelector(".Header_Mob_svg")
            const MobNavigation = document.querySelector(".Header_Mob_Navigation")
            const SubMenuMobArrow = document.querySelectorAll(".Header_Mob_Navigation_arrow")
            const CloseNavigation = document.querySelector(".Header_Mob_Navigation_close")
            const SubMenuMob = document.querySelectorAll(".Header_Mob_Sub_Navigation")
            HeaderListenerFUNC.headMobShowClose=() => { MobNavigation.classList.toggle("active") }
            HeaderListenerFUNC.headListMobShowClose=(e) => {
                SubMenuMobArrow[e.currentTarget.getAttribute("data-index")].classList.toggle("active")
                SubMenuMob[e.currentTarget.getAttribute("data-index")].classList.toggle("active")
            }
            Burger.addEventListener("click", HeaderListenerFUNC.headMobShowClose )
            CloseNavigation.addEventListener("click",  HeaderListenerFUNC.headMobShowClose)
            SubMenuMobArrow.forEach((elem) => {
                elem.addEventListener("click", HeaderListenerFUNC.headListMobShowClose)
            })
        } 
        if (window.screen.width>1024 && HeaderListenerFUNC.headMobShowClose)
        {
            document.querySelector(".Header_Mob_svg").removeEventListener("click",HeaderListenerFUNC.headMobShowClose)
            document.querySelector(".Header_Mob_Navigation_close").removeEventListener("click",HeaderListenerFUNC.headMobShowClose)
            document.querySelectorAll(".Header_Mob_Navigation_arrow").forEach((elem) => {
                elem.removeEventListener("click", HeaderListenerFUNC.headListMobShowClose)
            })
            HeaderListenerFUNC.headMobShowClose="";
            HeaderListenerFUNC.headListMobShowClose="";
            HeaderContainer.innerHTML = ` <div class="Header__IMG">
            <a href="index.html">
            <picture>
            <source type="image/avif" srcset="Images/logoBlue.avif 1x,Images/logoBlue@2x.avif 2x, Images/logoBlue@3x.avif 3x">
            <source type="image/webp" srcset="Images/logoBlue.webp 1x,Images/logoBlue@2x.webp 2x, Images/logoBlue@3x.webp 3x">
            <img src="Images/logoBlue.png" srcset="Images/logoBlue@2x.png 2x, Images/logoBlue@3x.png 3x" alt="logo">
        </picture>
            </a>
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
                <li class="Header_Navigation_item Active_Page"><a href="Products.html">PRODUCTS</a></li>
                <li class="Header_Navigation_item"><a href="Portfolio.html">PORTFOLIO</a></li>
                <li class="Header_Navigation_item"><a href="Blog.html">BLOG</a></li>
                <li class="Header_Navigation_item"><a href="AboutUs.html">ABOUT US</a> <svg class="Header_Navigation_arrow">
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
        <div>
         <a href="ContacUs.html"> <button class="TopButton Header_button">CONTACT US</button></a>
        </div>`
        }

    }
}
HeaderNavigation()
/*Show more*/
const ProductsContainer=document.querySelector(".Products_container");
let ShowMoreButton=""
let HasShowMore=false;
let EventShowMore=""
function Showmore()
{
    if (window.screen.width!==window.innerWidth)
    {
        if( window.innerWidth<=500&& !HasShowMore)
        {
           HasShowMore=true;
            ProductsContainer.insertAdjacentHTML("beforeend",` <div class="show_more">
            <span>Show more</span> <svg>
              <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
          </svg>
        </div>`)
        ShowMoreButton=document.querySelector(".show_more");
        EventShowMore=()=>{
            ShowMoreButton.children[0].innerHTML==="Show more"?
            ShowMoreButton.children[0].innerHTML="Hide":ShowMoreButton.children[0].innerHTML="Show more"
            ShowMoreButton.children[1].classList.toggle("active")
            document.querySelector(".Products_body").classList.toggle("Active_show_more")
        }
        ShowMoreButton.addEventListener("click",EventShowMore)
        }
        if( window.innerWidth>500 && HasShowMore)
        {     HasShowMore=false;
                ShowMoreButton.removeEventListener("click",EventShowMore)
                ShowMoreFUNC="";
               if( ProductsContainer.lastChild.classList.contains("show_more"))
               {
                   ProductsContainer.lastChild.remove( ProductsContainer.lastChild);
               }
        }
    }
    else
    {
        if( window.screen.width<=500&& !HasShowMore)
        {
           HasShowMore=true;
            ProductsContainer.insertAdjacentHTML("beforeend",` <div class="show_more">
            <span>Show more</span> <svg>
              <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
          </svg>
        </div>`)
        ShowMoreButton=document.querySelector(".show_more");
        EventShowMore=()=>{
            ShowMoreButton.children[0].innerHTML==="Show more"?
            ShowMoreButton.children[0].innerHTML="Hide":ShowMoreButton.children[0].innerHTML="Show more"
            ShowMoreButton.children[1].classList.toggle("active")
            document.querySelector(".Products_body").classList.toggle("Active_show_more")
        }
        ShowMoreButton.addEventListener("click",EventShowMore)
        }
        if( window.screen.width>500 && HasShowMore)
        {     HasShowMore=false;
                ShowMoreButton.removeEventListener("click",EventShowMore)
                ShowMoreFUNC="";
               if( ProductsContainer.lastChild.classList.contains("show_more"))
               {
                   ProductsContainer.lastChild.remove( ProductsContainer.lastChild);
               }
        }
    }
}
Showmore()
/*resize*/
window.addEventListener("resize",()=>
{ 
    HeaderNavigation()
    Showmore()
})