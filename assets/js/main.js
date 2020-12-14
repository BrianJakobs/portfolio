//(function(){
//  ('.menu-trigger').on('click', function() {
//    (this).toggleClass('active');
//    return false;
//  });
//});


var scrollButton = document.querySelector("#scroll"),
    workButton = document.querySelector("#landing button"),
    moreAbout = document.querySelector("#moreAbout"),
    portSpan = document.querySelector("#projects .back-text"),
    menuTrigger = document.querySelector(".menu-trigger"),
    menuOverlay = document.querySelector("#menu-overlay"),
    menuGrid = document.querySelector("#menu-overlay .grid"),
    menuItems = document.querySelectorAll(".data ul li a");

menuTrigger.addEventListener("click", function () {
    "use strict";
    menuTrigger.classList.toggle("active");
    menuOverlay.classList.toggle("slideDown");
    menuGrid.classList.toggle("menuOpacity");
});

//menuItems.addEventlistener("click", function () {
//    "use strict";
//    for (var i = 0; i < menuItems.length; i++){
//    menuItems[i].classList.remove("slideDown");}
////    menuOverlay.classList.remove("slideDown");
//});

 for (var i = 0; i < menuItems.length; i++) {
     menuItems[i].addEventListener("click", function() {
         menuGrid.classList.remove("menuOpacity");
         menuOverlay.classList.remove("slideDown");
         menuTrigger.classList.remove("active");
     });
 }

scrollButton.addEventListener("click", function() {
    gsap.to(window, {duration: 1, scrollTo:"#intro", ease:Power2.easeOut});
});

workButton.addEventListener("click", function() {
    gsap.to(window, {duration: 1.5, scrollTo:"#projects", ease:Sine.easeInOut});
});

moreAbout.addEventListener("click", function() {
    gsap.to(window, {duration: 2, scrollTo:"#about", ease:Sine.easeInOut});
});

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none"});

const tl = gsap.timeline();
let sections = gsap.utils.toArray(".scrollItem");
    
tl.to(".sideScroll", {xPercent: -75});

ScrollTrigger.create({
    animation: tl,
    trigger: "#projects",
    start: "top top", 
    endTrigger: "#projects",
    end: "bottom -=200%",
    scrub: 0.2,
    pin: true
});

const pl = gsap.timeline();

pl.to(portSpan, {left: 4000});

ScrollTrigger.create ({
    animation: pl,
    trigger: '#projects',
    start: 'top top',
    endTrigger: "#projects",
    end: "bottom -=200%",
    scrub: 0.3,
//        pin: true,
    ease: Power3.easeInOut
});