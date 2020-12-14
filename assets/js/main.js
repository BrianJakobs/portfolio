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
    menuTrigger = document.querySelector(".menu-trigger");

menuTrigger.addEventListener("click", function () {
    "use strict";
    menuTrigger.classList.toggle("active");
    document.querySelector("#menu-overlay").classList.toggle("slideDown");
//    return false;
});

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
//    snap: 1 / (section.length - 1),
//    snap: 1 / (sections.length - 1)
//    end: () => "+=" + document.querySelector("#projects").offsetWidth
});

const pl = gsap.timeline();
//let sections = gsap.utils.toArray(".scrollItem");

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