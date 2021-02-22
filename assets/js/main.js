var scrollButton = document.querySelector("#scroll"),
    workButton = document.querySelector("#landing button"),
    moreAbout = document.querySelector("#moreAbout"),
    parallaxMouse = document.querySelector(".parallaxMouse"),
    portSpan = document.querySelector("#projects .back-text"),
    menuTrigger = document.querySelector(".menu-trigger"),
    docBody = document.querySelector("body"),
    actualInnerWidth = document.body.clientWidth,
    menuOverlay = document.querySelector("#menu-overlay"),
    cursorOuter = document.querySelector(".cursor-outer"),
    cursorInner = document.querySelector(".cursor-inner"),
    menuGrid = document.querySelector("#menu-overlay .grid"),
    menuItems = document.querySelectorAll(".data ul li a"),
    toggle = document.querySelector(".switch input"),

    el = document.createElement("output");


    const currentTheme = sessionStorage.getItem("theme");
var parallaxItems = document.querySelectorAll(".parallaxMouse")

let isDark = true

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
} 

function themeMode() {
    isDark = !isDark;
//    isDark ? toggle.innerText = "🌚" : toggle.innerText = "🌞";
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    }
    sessionStorage.setItem("theme", theme);
}

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

window.addEventListener('load', function () {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll(".newPage");
    const animateIn = document.querySelectorAll(".animate-this");

    setTimeout(() => {
        transition_el.classList.add("onLeave");
    }, 200);

    setTimeout(() => {
        transition_el.classList.remove("isActive");
    }, 800);

    setTimeout(() => {
        transition_el.classList.remove("onLeave");
    }, 800);

    setTimeout(() => {
        contentAnimation();
    }, 350);

    //    for (let x = 0; x < animateIn.length; x++) {
    //        const singleAnimateIn = animateIn[i];
    //        
    //        setTimeout(() => {
    //            contentAnimation();
    //        }, 600);
    //    }

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            //            console.log(target);
            transition_el.classList.add("isActive");

            setTimeout(() => {
                transition_el.classList.add("onLeave");
            }, 600);

            setTimeout(() => {
                transition_el.classList.remove("isActive");
            }, 1200);

            setTimeout(() => {
                transition_el.classList.remove("onLeave");
            }, 1200);

            setTimeout(() => {
                window.location.href = target;
            }, 600);

        });
    }
    


if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
} 
    
});


window.addEventListener("resize", updateOutput);
updateOutput();

function menuNav() {
    menuTrigger.classList.toggle("active");
    menuOverlay.classList.toggle("slideDown");
    menuGrid.classList.toggle("menuOpacity");
}

menuTrigger.addEventListener("click", menuNav);

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
        menuGrid.classList.remove("menuOpacity");
        menuOverlay.classList.remove("slideDown");
        menuTrigger.classList.remove("active");
    });
}



function checkWidth() {
    actualInnerWidth = document.body.clientWidth;
    //    console.log(actualInnerWidth);
}




function horScroll() {

//    gsap.registerPlugin(ScrollTrigger);
//    gsap.defaults({
//        ease: "none"
//    });
//    
//    const tl = gsap.timeline();
//    let sections = gsap.utils.toArray(".scrollItem");
//
//    tl.to(".sideScroll", {
//        xPercent: -75
//    });
//
//    ScrollTrigger.create({
//        animation: tl,
//        trigger: "#projects",
//        start: "top top",
//        endTrigger: "#projects",
//        end: "bottom -=200%",
//        scrub: 0.2,
//        pin: true
//    });
//    
//    const pl = gsap.timeline();
//    pl.to(portSpan, {
//        xPercent: 60
//    });
//    
//    ScrollTrigger.create({
//        animation: pl,
//        trigger: '#projects',
//        start: 'top top',
//        endTrigger: "#projects",
//        end: "bottom -=200%",
//        scrub: 0.3,
//        //        pin: true,
//        ease: Power3.easeInOut
//    });
}













ScrollTrigger.matchMedia({
	
  // desktop
  "(min-width: 1000px)": function() {
          gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({
        ease: "none"
    });
    
    const tl = gsap.timeline();
    let sections = gsap.utils.toArray(".scrollItem");

    tl.to(".sideScroll", {
        xPercent: -75
    });

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
    pl.to(portSpan, {
        xPercent: 60
    });
    
    ScrollTrigger.create({
        animation: pl,
        trigger: '#projects',
        start: 'top top',
        endTrigger: "#projects",
        end: "bottom -=200%",
        scrub: 0.3,
        //        pin: true,
        ease: Power3.easeInOut
    });
  },

  // mobile
  "(max-width: 999px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
  },
	
  // all 
  "all": function() {
    gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    ease: "none"
});

const bg = gsap.timeline();
let sections = gsap.utils.toArray(".parallax img:last-of-type");

bg.to(".parallax img:last-of-type", {
    xPercent: 7
});

ScrollTrigger.create({
    animation: bg,
    trigger: "#about",
    start: "top bottom",
    endTrigger: "#about",
    end: "bottom top",
    scrub: 0.2,
    //        pin: true
});
      
ScrollTrigger.batch(".appear", {
    onEnter: batch => {
        //    gsap.from(batch, {
        //        autoAlpha: 0,
        //    })
        gsap.to(batch, {
            duration: 0.6,
            autoAlpha: 1,
//            y: -50,
                    delay: 0.1,
                    stagger: 0.2,
            ease: Power2.easeInOut,
        })
    },
    once: true
});
  }
	
}); 















function small() {
    console.log("small");
    var lottiePlayer = document.querySelector('lottie-player');
    
    lottiePlayer.addEventListener('stop', pause());
    document.body.setAttribute("style", "cursor: normal;");
}

function large() {
    console.log("large");
    LottieInteractivity.create({
        renderer: 'canvas',
        player: '#firstLottie',
        mode: 'cursor',
        container: '#landing',
        actions: [
            {
                position: { x: [0, 1], y: [-1, 2] },
                type: 'seek',
                frames: [0, 60],
            },
        ],
    });
    
    document.addEventListener('mousemove', function (e) {
    cursorOuter.setAttribute("style", "top: " + (e.clientY - 10 + "px; left: " + (e.clientX - 10) + "px;"));
    cursorInner.setAttribute("style", "top: " + (e.clientY - 4) + "px; left: " + (e.clientX - 4) + "px;");

    if (e.clientX > (actualInnerWidth - 10)) {
        cursorOuter.setAttribute("style", "width: 0px; height: 0px; opacity: 0;");
        cursorInner.setAttribute("style", "width: 0px; height: 0px; opacity: 0;");
        docBody.setAttribute("style", "cursor: normal;");
    } else {
        docBody.setAttribute("style", "cursor: none;");
    }

})
    
    document.addEventListener("mousemove", function (e) {



    for (var i = 0; i < parallaxItems.length; i++) {
        const speed = parallaxItems[i].getAttribute('data-speed');
        const x =  (window.innerWidth/2 - e.pageX)/100 * speed;
        const y =  (window.innerHeight/2 - e.pageY)/100 * speed;

        
        
        
        parallaxItems[i].style.transform = "translate("+ x + "px, " + y + "px)";
        
        
        

    }

});
}

var bounds = [
    {
        min: 0,
        max: 999,
        func: small
    },
    {
        min: 1000,
        func: large
    }
];


// define a resize function. use a closure for the lastBoundry determined.
function resizeFn() {
    var lastBoundry; // cache the last boundry used
    return function () {
        var width = window.innerWidth; // get the window's inner width
        var boundry, min, max;
        for (var i = 0; i < bounds.length; i++) {
            boundry = bounds[i];
            min = boundry.min || Number.MIN_VALUE;
            max = boundry.max || Number.MAX_VALUE;
            if (width > min && width < max &&
                lastBoundry !== boundry) {
                lastBoundry = boundry;
                return boundry.func.call(boundry);
            }
        }
    }
};

window.addEventListener('resize', resizeFn());
window.addEventListener('load', resizeFn());


window.addEventListener('onload', function () {
    window.trigger('resize'); // on load, init the lastBoundry
});

window.addEventListener('resize', function() {
});



function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    //    tl.to(".loading-screen", {
    //        duration: 1,
    //        width: "100%",
    //        left: "0%",
    //        ease: "Expo.easeOut",
    //    });
    //
    //    tl.to(".loading-screen", {
    //        duration: 1,
    //        left: "100%",
    //        width: "0%",
    //        ease: "Expo.easeOut",
    //        
    //    });
    //    
    //    tl.to(".loading-screen", {
    //        duration: 1,
    //        width: "100%",
    //        left: "0%",
    //        ease: "Expo.easeInOut",
    ////        delay: 1
    //    });
    //    
    //    tl.to(".loading-screen", {
    //        duration: 1,
    //        width: "0%",
    //        left: "0%",
    //        ease: "Expo.easeOut",
    //    });

    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        left: "100%",
        width: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,

    });

    tl.set(".loading-screen", {
        left: "-100%",
    });

    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1500);
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 1.2,
        y: 50,
        autoAlpha: 0,
        //        delay: 0.2,
        stagger: 0.2,
        ease: Power2.easeInOut,
        //        duration: 1,
        //        yPercent: -50,
        //        opacity: 0,
        //        stagger: 0.3,
        //        delay: 0.2,
        //        ease: Power1.easeInOut
    });
    tl.from(".animate-svg", {
        duration: 1.2,
        width: 200,
        autoAlpha: 0,
        ease: Power2.easeOut,
    });
}

//function appearAnimate() {
//    var ap = gsap.timeline();
//    ap.from(".appear", {
//        duration: 1.2,
//        y: 50,
//        autoAlpha: 0,
////        delay: 0.2,
//        stagger: 0.2,
//        ease: Power2.easeInOut,
////        duration: 1,
////        yPercent: -50,
////        opacity: 0,
////        stagger: 0.3,
////        delay: 0.2,
////        ease: Power1.easeInOut
//    });
//}



//    let appearItems = document.querySelectorAll('.appear');
//
//    appearItems.forEach( function( elem ) {
//        gsap.from(elem, {
//            scrollTrigger: {
//                trigger: elem,
//                one: true
//            },
//            rotation: 360,
//            duration: 2
//        })
//    })


//("#one", 1, {x:-100},0)
//    .from("#two", 1, {x:-100},0)
//    .from("#three", 1, {x:-100},0)
//    .from("#four", 1, {x:100, autoAlpha:0})
//    .to("#box", 1, {x:100, autoAlpha:0})






//window.onload = () => {
//  const anchors = document.querySelectorAll('a');
//  const transition_el = document.querySelector('.transition');
//
//  setTimeout(() => {
//    transition_el.classList.remove('is-active');
//  }, 500);
//
//  for (let i = 0; i < anchors.length; i++) {
//    const anchor = anchors[i];
//
//    anchor.addEventListener('click', e => {
//      e.preventDefault();
//      let target = e.target.href;
//
//      console.log(transition_el);
//
//      transition_el.classList.add('is-active');
//
//      console.log(transition_el);
//
//      setInterval(() => {
//        window.location.href = target;
//      }, 500);
//    })
//  }
//}







//function bmAnimation() {    
//    
//gsap.registerPlugin(ScrollTrigger);
//    gsap.defaults({ease: "none"});
//      
//    const bl = gsap.timeline();
//    let sections = gsap.utils.toArray("lottie-player");
//    
//    bl.to("lottie-player", {xPercent: -75});
//
//    ScrollTrigger.create({
//        animation: bl,
//        trigger: "#landing",
//        start: "top top", 
//        endTrigger: "#intro",
//        end: "bottom bottom",
//        scrub: 0.2,
//        pin: true
//    });
//}
//
// bmAnimation();

//ScrollLottie (target: String, jsonPath: String, easeDuration: Number, speed: String "fast" | "medium" | "slow")






//window.onload = () => {
//    const transition_el = document.querySelector('.transition');
//    
//    setTimeout(() => {
//        transition.el.classList.remove('is-active');
//    }, 500);
//}

//const enteringItem = gsap.utils.toArray('.showEntering');
//
//gsap.utils.toArray('.showEntering').forEach(enteringItem => {
//  gsap.fromTo(enteringItem, {
//      autoAlpha: 0, 
//      y: 20,
//      stagger: 0.2,
//      ease: Power4.easeInOut,
//    }, {
//    scrollTrigger: {
//      trigger: enteringItem,
//      once: true
//    },
//    duration: 0.6, 
//    autoAlpha: 1, 
//    y: 0
//  });
//});











//actualInnerWidth = document.body.clientWidth,





//var parallaxContainer = document.querySelector("#landing");









//$("#container").mousemove(function(e) {
//  parallaxIt(e, ".slide", -100);
//  parallaxIt(e, "img", -30);
//});
//
//function parallaxIt(e, target, movement) {
//  var $this = $("#container");
//  var relX = e.pageX - $this.offset().left;
//  var relY = e.pageY - $this.offset().top;
//
//  TweenMax.to(target, 1, {
//    x: (relX - $this.width() / 2) / $this.width() * movement,
//    y: (relY - $this.height() / 2) / $this.height() * movement
//  });
//}



scrollButton.addEventListener("click", function () {
    gsap.to(window, {
        duration: 1,
        scrollTo: ".scrollTo",
        ease: Power2.easeOut
    });
});

//scrollButton.addEventListener("click", function() {
//    gsap.to(window, {duration: 1, scrollTo:"#projectIntro", ease:Power2.easeOut});
//});

workButton.addEventListener("click", function () {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: "#projects",
        scrollToease: Sine.easeInOut
    });
});

//toggle.addEventListener('click', function() {
////    window.body.classList.toggle('light-theme');
//    docBody.classList.toggle('dark-theme');
//    if (docBody.hasClass("dark-theme")) {
//    docBody.addClass("dark-theme");
//    window.localStorage.hasDarkThemeClass = true;
//    } else {
//    window.localStorage.hasLightThemeClass = false;
//    docBody.removeClass("dark-theme");
//}
//});


//source: https://dev.to/vaishnavme/storing-theme-state-in-localstorage-ee5


toggle.addEventListener("click", themeMode)


moreAbout.addEventListener("click", function () {
    gsap.to(window, {
        duration: 2,
        scrollTo: "#about",
        ease: Sine.easeInOut
    });
});
















//$(window).load(function() {
//        function Preloader() {
//            var preloader = $ ('.loader');
//            preloader.delay(1000) .fadeOut (500);
//            var preloader = $('.preloader');
//            preloader.delay (1500) .slideUp(500);
//        }
//        if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
//            sessionStorage.setItem( 'doNotShow', true );
//            Preloader();
//        } else {
//           $ ('.loader, .preloader').hide();
//        }
//});



//
//    var animation = bodymovin.loadAnimation({
//      renderer: 'canvas'
//    });
