var scrollButton = document.querySelector("#scroll"),
    workButton = document.querySelector("#landing button"),
    moreAbout = document.querySelector("#moreAbout"),
    portSpan = document.querySelector("#projects .back-text"),
    menuTrigger = document.querySelector(".menu-trigger"),
    menuOverlay = document.querySelector("#menu-overlay"),
    menuGrid = document.querySelector("#menu-overlay .grid"),
    menuItems = document.querySelectorAll(".data ul li a"),
    el = document.createElement("output");


document.body.append(el);
Object.assign(el.style, {
  position: "fixed",
  bottom: 0,
  left: 0,
  background: "red",
  color: "white",
  padding: "5px",
  fontSize: "11px",
  opacity: 0.7
});

function updateOutput() {
  var html = document.documentElement;
  el.value = html.clientWidth + " × " + html.clientHeight;
}

window.addEventListener("resize", updateOutput);
updateOutput();

function menuNav() {
    menuTrigger.classList.toggle("active");
    menuOverlay.classList.toggle("slideDown");
    menuGrid.classList.toggle("menuOpacity");
}

menuTrigger.addEventListener("click", menuNav);

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

function horScroll() {
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

    pl.to(portSpan, {xPercent: 60});

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
}

window.addEventListener('load', function() {
    horScroll();
    menuTrigger.addEventListener("click", menuNav);
});

window.addEventListener('resize', function() {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    
    if (newWidth > 1000) {
        console.log("This is good");
        horScroll();
        } else {
    console.log("too small");
}
});

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none"});

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
    
    setTimeout(function(){ window.scrollTo(0, 0); }, 1500);
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 0.6,
        y: 20,
        opacity: 0,
//        delay: 0.2,
        stagger: 0.2,
        ease: Power4.easeInOut
//        duration: 1,
//        yPercent: -50,
//        opacity: 0,
//        stagger: 0.3,
//        delay: 0.2,
//        ease: Power1.easeInOut
    });
    tl.from(".animate-svg", {
        duration: 0.6,
        width: 200,
        opacity: 0,
        ease: Power4.easeInOut,
    });
}

//("#one", 1, {x:-100},0)
//    .from("#two", 1, {x:-100},0)
//    .from("#three", 1, {x:-100},0)
//    .from("#four", 1, {x:100, autoAlpha:0})
//    .to("#box", 1, {x:100, autoAlpha:0})

window.onload = function () {
    barba.init({
        sync: true,
//        cacheIgnore: false,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
//                    menuTrigger.addEventListener("click", menuNav);
                    horScroll();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
};