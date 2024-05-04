// Show and Hide Menu
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}

// Remove Menu when clicke on any link from menu
const navLink = document.querySelectorAll(".nav__link")
const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))


// Change Header Background
const blurHeader = ()=>{
    const header = document.getElementById("header")
    window.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)


// Swiper in Favorite Section
let swiperFavorite = new Swiper('.favorite__swiper', {
    slidesPerView: 1,
    loop: true,
    slidePerview: "auto",
    centeredSlides: "auto",
    grabCursor: true,
    breakpoints:{
        768: {
            slidesPerView: 3,
        }
    }
})

// Show Scroll Up
const scrollUp = ()=>{
    const scrollUp = document.getElementById("scroll-up")
    window.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)


// Change link color when we where on this section
const sections = document.querySelectorAll("section[id]")
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute("id")
        const sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`)


        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active-link")
        }else{
            sectionsClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll",scrollActive)


// Scroll Animations
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(".home__social, .favorite__container, .sponser__container, .footer")
sr.reveal(".home__title span:nth-child(1)" , {origin: "left" , opacity: 1})
sr.reveal(".home__title span:nth-child(3)" , {origin: "right" , opacity: 1})
sr.reveal(".home__tooltip, .home__button, .model__button" , {origin: "bottom"})
sr.reveal(".about__data" , {origin: "left"})
sr.reveal(".about__img, .model__tooltip" , {origin: "right"})