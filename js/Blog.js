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
                    <li><a href="Products.html">PRODUCTS</a></li>
                    <li><a href="Portfolio.html">PORTFOLIO</a></li>
                    <li><a href="Blog.html" class="Active_Page">BLOG</a></li>
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
                <li class="Header_Navigation_item"><a href="Products.html">PRODUCTS</a></li>
                <li class="Header_Navigation_item"><a href="Portfolio.html">PORTFOLIO</a></li>
                <li class="Header_Navigation_item  Active_Page"><a href="Blog.html">BLOG</a></li>
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
                            <li><a href="Technologies.html">ANDROID</a></li>
                            <li><a href="Technologies.html">IOS</a></li>
                            <li><a href="Technologies.html">UNITY</a></li>
                        </ul>
                    </li>
                    <li><a href="Products.html">PRODUCTS</a></li>
                    <li><a href="Portfolio.html">PORTFOLIO</a></li>
                    <li><a href="Blog.html" class="Active_Page">BLOG</a></li>
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
                <li class="Header_Navigation_item"><a href="Products.html">PRODUCTS</a></li>
                <li class="Header_Navigation_item"><a href="Portfolio.html">PORTFOLIO</a></li>
                <li class="Header_Navigation_item Active_Page"><a href="Blog.html">BLOG</a></li>
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
/*********//*********/

/*POST*/
const Blog = document.querySelector(".Blog_Body_item")
const Posts = [
    {
        "id": 1,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "March 21, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    },
    {
        "id": 2,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    }, {
        "id": 3,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "1",
        "vivews": "543"

    }, {
        "id": 4,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 5,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "5",
        "vivews": "543"

    }, {
        "id": 6,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 7,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 8,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 9,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 10,
        "Image": "Images/ServicesVr/stickman",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "2",
        "vivews": "543"

    }, {
        "id": 11,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "March 21, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    },
    {
        "id": 12,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    }, {
        "id": 13,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "1",
        "vivews": "543"

    }, {
        "id": 14,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 15,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "5",
        "vivews": "543"

    }, {
        "id": 16,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 17,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 18,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 19,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 20,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "2",
        "vivews": "543"

    }, {
        "id": 21,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "March 21, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    },
    {
        "id": 22,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    }, {
        "id": 23,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "1",
        "vivews": "543"

    }, {
        "id": 24,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 25,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "5",
        "vivews": "543"

    }, {
        "id": 26,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 27,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 28,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    },{
        "id": 29,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "1",
        "vivews": "543"

    }, {
        "id": 30,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 31,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "5",
        "vivews": "543"

    }, {
        "id": 32,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 33,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 34,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 35,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 36,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "2",
        "vivews": "543"

    }, {
        "id": 37,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "March 21, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    },
    {
        "id": 38,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    },{
        "id": 39,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    },{
        "id": 40,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    }, {
        "id": 41,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "2",
        "vivews": "543"

    }, {
        "id": 4,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "March 21, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    },
    {
        "id": 43,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    }, {
        "id": 44,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "1",
        "vivews": "543"

    }, {
        "id": 45,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 46,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "5",
        "vivews": "543"

    }, {
        "id": 47,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 48,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 49,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    },{
        "id": 50,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "1",
        "vivews": "543"

    }, {
        "id": 51,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 52,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "5",
        "vivews": "543"

    }, {
        "id": 53,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 54,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    }, {
        "id": 55,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 56,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "3",
        "vivews": "543"

    }, {
        "id": 57,
        "Image": "Images/ServicesVr/heart",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "February 24, 2021",
        "TimeReadPost": "6",
        "RatePost": "2",
        "vivews": "543"

    }, {
        "id": 58,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "March 21, 2021",
        "TimeReadPost": "6",
        "RatePost": "4",
        "vivews": "543"

    },
    {
        "id": 59,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    },{
        "id": 60,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    },{
        "id": 61,
        "Image": "Images/ServicesVr/ori",
        "Title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend lobortis fringilla non elit.  Vivamus mollis, odio ac finibus rutrum ..",
        "AuthorAvatar": "Images/sid",
        "Author": "Eugeniro",
        "DatePost": "May 1, 2022",
        "TimeReadPost": "4",
        "RatePost": "2",
        "vivews": "1230"

    }
];
/*HTML POST*/
function _Post(id,image, title, text,
    AuthorAvatar, Author, DatePost, TimeReadPost, RatePost, vivews) {
    return ` 
<div class="Blog_item" data-post="${id}">
    <div class="Blog_item_left">
    <picture>
    <source type="image/avif" srcset="${image}.avif 1x,${image}@2x.avif 2x,${image}@3x.avif 3x">
    <source type="image/webp" srcset="${image}.webp 1x,${image}@2x.webp 2x,${image}@3x.webp 3x">
    <img class="Blog_item_left_image" src="${image}.jpg" srcset="${image}@2x.jpg 2x,${image}@3x.jpg 3x" alt="Game">
    </picture>
    </div>
    <div class="Blog_item_right">
        <div class="Blog_item_right_Top">
            <div class="Blog_Rating_star">
                <div class="Rating_star_grey">
                    <div class="Rating_star_green ${RatePost >= 1 ? "Star_item" : ""}"></div>
                </div>
                <div class="Rating_star_grey">
                    <div class="Rating_star_green ${RatePost >= 2 ? "Star_item" : ""}"></div>
                </div>
                <div class="Rating_star_grey">
                    <div class="Rating_star_green ${RatePost >= 3 ? "Star_item" : ""}"></div>
                </div>
                <div class="Rating_star_grey">
                    <div class="Rating_star_green ${RatePost >= 4 ? "Star_item" : ""}"></div>
                </div>
                <div class="Rating_star_grey">
                    <div class="Rating_star_green ${RatePost >= 5 ? "Star_item" : ""}"></div>
                </div>
            </div>
            <div class="Blog_TimeRead">
                <svg  class="Blog_Right_svg">
                    <use xlink:href="Images/Icons/BlogClock.svg#Clock" />
                </svg>
                <span><span>${TimeReadPost}</span> min read</span>
             </div>
            <div class="Blog_Views">
                <svg class="Blog_Right_svg">
                    <use xlink:href="Images/Icons/BlogEye.svg#Eye" />
                </svg>
                <span><span>${vivews}</span> views</span>
            </div>
        </div>
        <div class="Blog_item_right_Middle">
            <h3>${title}</h3>
            <p>${text}</p>
        </div>
        <div class="Blog_item_right_bottom">
            <div class="Blog_Author">
                <a href="Author.html">
                <picture>
                <source type="image/avif" srcset="${AuthorAvatar}.avif 1x">
                <source type="image/webp" srcset="${AuthorAvatar}.webp 1x">
                <img src="${AuthorAvatar},jpg" alt="Avatar">
                </picture>
                </a>
                <a href="Author.html"><span class="Blog_Author_Name">by <span>${Author} </span></span></a>
                </div>
            <div class="Blog_Date"><span>${DatePost}</span></div>
        </div>
    </div>
</div>`
}
function Postlocation(e)
{
    sessionStorage.setItem("POST",e.currentTarget.getAttribute("data-post"))
    window.location="Article.html";
}
let PostPage = 1
/*Add post*/
function ShowPostPage(CurrentPage) {
    for (let i = (CurrentPage * 10 - 10); i < (CurrentPage * 10); i++) {
      if (Posts[i]) Blog.insertAdjacentHTML("beforeend",_Post(Posts[i].id,Posts[i].Image, Posts[i].Title, Posts[i].text, Posts[i].AuthorAvatar,
        Posts[i].Author, Posts[i].DatePost, Posts[i].TimeReadPost, Posts[i].RatePost, Posts[i].vivews));
        else
        { 
            document.querySelectorAll(".Blog_item").forEach((e)=>
            {
                e.addEventListener("click",Postlocation)
            })
            return;
        }


    }
    document.querySelectorAll(".Blog_item").forEach((e)=>
    {
        e.addEventListener("click",Postlocation)
    })
}
/*********//*********/

ShowPostPage(PostPage);
/* BUTTONS PAGE LIST*/
const ButtonPageContainer = document.querySelector(".ButtonPage_Container");
const ButtonPage_Middle = document.querySelector(".ButtonPage_Middle");
let PageListRight,PageListLeft;
let PageListButton=[];
let CountPostPage = Math.ceil(Posts.length / 10);
function LeftChangePage() {

    PostPage--;
    document.querySelectorAll(".Blog_item").forEach((e)=>
    {
        e.removeEventListener("click",Postlocation)
    })
    while(Blog.firstChild) {
        Blog.removeChild(Blog.firstChild);
    }
    ShowPostPage(PostPage);
    if (PageListRight)
    {
        PageListRight.remove();
        PageListRight.removeEventListener("click",RightChangePage)
    }
    while(ButtonPage_Middle.firstChild) {
        ButtonPage_Middle.removeChild(ButtonPage_Middle.firstChild);
    }
    PageListButton.forEach(e=>{e.removeEventListener("click",ChangePage)})
    PageListLeft.remove();
    PageListLeft.removeEventListener("click",LeftChangePage)
    ButtonPages(CountPostPage, PostPage)

}
function RightChangePage()
{
    PostPage++;
    document.querySelectorAll(".Blog_item").forEach((e)=>
    {
        e.removeEventListener("click",Postlocation)
    })
    while(Blog.firstChild) {
        Blog.removeChild(Blog.firstChild);
    }
    ShowPostPage(PostPage);

    if (PageListLeft)
    {
        PageListLeft.remove();
        PageListLeft.removeEventListener("click",RightChangePage)
    }
    while(ButtonPage_Middle.firstChild) {
        ButtonPage_Middle.removeChild(ButtonPage_Middle.firstChild);
    }
    PageListButton.forEach(e=>{e.removeEventListener("click",ChangePage)})
    PageListRight.remove();
    PageListRight.removeEventListener("click",LeftChangePage)
    ButtonPages(CountPostPage, PostPage)
}
function ChangePage()
{
   PostPage=parseInt(this.innerHTML);
   document.querySelectorAll(".Blog_item").forEach((e)=>
   {
       e.removeEventListener("click",Postlocation)
   })
    while(Blog.firstChild) {
        Blog.removeChild(Blog.firstChild);
    }
    ShowPostPage(PostPage);

    if (PageListLeft)
    {
        PageListLeft.remove();
        PageListLeft.removeEventListener("click",RightChangePage)
    }
    if (PageListRight)
    {
        PageListRight.remove();
        PageListRight.removeEventListener("click",LeftChangePage)
    }
    while(ButtonPage_Middle.firstChild) {
        ButtonPage_Middle.removeChild(ButtonPage_Middle.firstChild);
    }
    PageListButton.forEach(e=>{e.removeEventListener("click",ChangePage)})
    ButtonPages(CountPostPage, PostPage)
}
/*Add button*/
function ButtonPages(CountPostPage, CurrentPage) {

    /* middle*/
    if (1 < CurrentPage - 2 && CountPostPage > CurrentPage + 2) {
        let PageButton = CurrentPage - 3;
        for (let i = 0; i < 7; i++) {
            if (i === 0) {
                ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${1}</span>`)
            } else
                if (i === 1 || i === 5) {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span>...</span>`)
                } else if (i === 6) {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${CountPostPage}</span>`);
                }
                else if(PageButton + i===CurrentPage)
                {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page ButtonPage_Current">${PageButton + i}</span>`);
                }
                else {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${PageButton + i}</span>`);
                }
        }
    }
    /* start*/
    else
        if (1 >= CurrentPage - 2 &&CountPostPage>4) {
            let countElem=CurrentPage===3?6:5
            for (let i = 0; i < countElem; i++) {
                if (i === countElem-2) {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span>...</span>`)
                }
                else if (i === countElem-1) {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${CountPostPage}</span>`)
                }
                else if (i + 1===CurrentPage)
                {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page ButtonPage_Current">${i + 1}</span>`);
                }
                else {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${i + 1}</span>`);
                }
            }
        }
        /* end*/
        else if ( CountPostPage <= CurrentPage + 2 &&CountPostPage>4) {
            let countElem=CurrentPage===CountPostPage-2?6:5
            for (let i = 0; i < countElem; i++) {
                if (i === countElem-(i+1)*countElem) {
                    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${1}</span>`)
                } else
                    if (i === countElem-(i*countElem-1)) {
                        ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span>...</span>`)
                    } else if(CountPostPage - (-i + (countElem-1))===CurrentPage) ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page ButtonPage_Current">${CountPostPage - (-i + (countElem-1))}</span>`);
                    else {
                        
                        ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${CountPostPage - (-i + (countElem-1))}</span>`);
                    }
            }
        }
        /* pages<=4*/
        else
        {
            for (let i = 0; i < CountPostPage; i++) {
                if (i+1===CurrentPage) ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page ButtonPage_Current">${i+1}</span>`);
                else ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${i+1}</span>`);

            }
        }
    /*Button Left Right and Listeners*/
    if (CurrentPage != 1) {
        ButtonPageContainer.insertAdjacentHTML("afterbegin", `<div class="ButtonPage_left">
    <svg class="ButtonPage_left_svg" >
        <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
    </svg>
</div>`)
        PageListLeft = document.querySelector(".ButtonPage_left");
        PageListLeft.addEventListener("click", LeftChangePage)
    }
    if (CurrentPage != CountPostPage) {
        ButtonPageContainer.insertAdjacentHTML("beforeend", `  <div class="ButtonPage_right">
<svg class="ButtonPage_right_svg">
    <use xlink:href="Images/Icons/arrowBlue.svg#ArrowBlue" />
</svg>
</div>`)
        PageListRight = document.querySelector(".ButtonPage_right");
        PageListRight.addEventListener("click", RightChangePage )
    }
    PageListButton = document.querySelectorAll(".Select_Page");
    PageListButton.forEach(e=>{e.addEventListener("click", ChangePage)})
}
if (CountPostPage > 1) {
    ButtonPages(CountPostPage, PostPage)
}
else {
    ButtonPage_Middle.insertAdjacentHTML("beforeend", `<span class="Select_Page">${1}</span>`)
}
/*********//*********/
/*resize*/
window.addEventListener("resize",()=>
{ 
    HeaderNavigation()
    
}) 